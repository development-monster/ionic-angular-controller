import { Injectable } from '@angular/core';
import { ComponentRef, AlertOptions } from '@ionic/core';
import { AlertController } from '@ionic/angular';
import { MonHistoryController } from './mon-history-controller.service';

export interface MonAlertOptions < ComponentRef > extends AlertOptions {
  size ? : 'large' | 'normal' | 'small'
}
@Injectable()
export class MonAlertController {
  constructor(
    private historyCtrl: MonHistoryController,
    private alerCtrl: AlertController
  ) {
    //console.log('injected:MonAlertController');
  }
  async create(opts: MonAlertOptions < ComponentRef > ) {
    return await this.historyCtrl.create(this.alerCtrl, opts) as HTMLIonAlertElement;
  }
  async dismiss(data?: any, role?: string | undefined, id?: string | undefined):Promise<boolean> {
    return await this.alerCtrl.dismiss(data, role, id);
  }
  async getTop():Promise<HTMLIonAlertElement | undefined> {
    return await this.alerCtrl.getTop();
  }
}
