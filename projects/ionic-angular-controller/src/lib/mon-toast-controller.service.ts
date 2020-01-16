import { Injectable } from '@angular/core';
import { ToastOptions, ComponentRef, Animation } from '@ionic/core';
import { ToastController } from '@ionic/angular';
import { MonHistoryController } from './mon-history-controller.service';

export interface MonToastOptions < ComponentRef > extends ToastOptions {
  size ? : 'large' | 'normal' | 'small'
}
@Injectable()
export class MonToastController {

  constructor(
    private historyCtrl: MonHistoryController,
    private toastCtrl: ToastController
  ) {
    //console.log('injected:MonToastController');
  }
  async create(opts: MonToastOptions < ComponentRef > ) {
    const getEnterAnimation = (AnimationC: Animation, baseEl: ShadowRoot, ev: any): Promise < Animation > => {
      const hostEl = (baseEl.host || baseEl) as HTMLElement;
      const wrapperEl = hostEl.shadowRoot.querySelector('.toast-wrapper') as HTMLElement;

      const baseAnimation = new AnimationC();
      const wrapperAnimation = new AnimationC();

      wrapperAnimation.addElement(wrapperEl);

      wrapperEl.style.marginLeft = (window.innerWidth/2) - (wrapperEl.offsetWidth/2) + 'px';
      wrapperEl.style.top = (window.innerHeight/2) - (wrapperEl.offsetHeight/2) + 'px';

      wrapperAnimation.fromTo('transform', `translate3d(0, 50px, 0)`, 'translate3d(0, 0, 0)');
      wrapperAnimation.fromTo('opacity', `0`, '1');

      return Promise.resolve(baseAnimation
        .addElement(hostEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(250)
        .add(wrapperAnimation));
    }
    opts.enterAnimation = getEnterAnimation
    return await this.historyCtrl.create(this.toastCtrl, opts) as HTMLIonToastElement;
  }
  async dismiss(data?: any, role?: string | undefined, id?: string | undefined):Promise<boolean> {
    return await this.toastCtrl.dismiss(data, role, id);
  }
}