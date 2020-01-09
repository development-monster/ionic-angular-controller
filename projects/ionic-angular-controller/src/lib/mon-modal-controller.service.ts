import { Injectable } from '@angular/core';
import { ComponentRef, ModalOptions } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { MonHistoryController } from './mon-history-controller.service';

export interface MonModalOptions < ComponentRef > extends ModalOptions {
  size ? : 'large' | 'normal' | 'small'
}
@Injectable()
export class MonModalController {
  constructor(
    private historyCtrl: MonHistoryController,
    private alerCtrl: ModalController
  ) {
    //console.log('injected:MonModalController');
  }
  async create(opts: MonModalOptions < ComponentRef > ) {
    return await this.historyCtrl.create(this.alerCtrl, opts) as HTMLIonModalElement;
  }
  async dismiss(data?: any, role?: string | undefined, id?: string | undefined):Promise<boolean> {
    return await this.alerCtrl.dismiss(data, role, id);
  }
  async getTop():Promise<HTMLIonModalElement | undefined> {
    return await this.alerCtrl.getTop();
  }
}