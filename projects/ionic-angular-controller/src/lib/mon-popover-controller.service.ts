import { Injectable } from '@angular/core';
import { ComponentRef, PopoverOptions } from '@ionic/core';
import { PopoverController } from '@ionic/angular';
import { MonHistoryController } from './mon-history-controller.service';

export interface MonPopoverOptions < ComponentRef > extends PopoverOptions {
  size ? : 'large' | 'normal' | 'small'
}
@Injectable()
export class MonPopoverController {

  constructor(
    private historyCtrl: MonHistoryController,
    private alerCtrl: PopoverController
  ) {
    console.log('injected:MonPopoverController');
  }
  async create(opts: MonPopoverOptions < ComponentRef > ) {
    return await this.historyCtrl.create(this.alerCtrl, opts) as HTMLIonPopoverElement;
  }
  async dismiss(data?: any, role?: string | undefined, id?: string | undefined):Promise<boolean> {
    return await this.alerCtrl.dismiss(data, role, id);
  }
  async getTop():Promise<HTMLIonPopoverElement | undefined> {
    return await this.alerCtrl.getTop();
  }
}
