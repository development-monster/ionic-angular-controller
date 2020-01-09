import { Injectable } from '@angular/core';

interface MonHistoryItem {
  id: string,
  ctrl: any
}
@Injectable()
export class MonHistoryController {
  historyList: Array < MonHistoryItem > = [];
  historyTrigger:boolean = false;

  constructor(
  ) {
    console.log('injected:MonHistoryController');
    window.addEventListener('popstate', () => {
      console.log('popstate', this.historyTrigger);
      if(this.historyTrigger) {
        this.historyTrigger = false;
      } else {
        console.log('popstate', this.historyList);
        this.historyTrigger = true;
        const lastHistoryData = this.historyList.pop();
        lastHistoryData.ctrl.dismiss();
      }
    });
  }
  async create(ctrl, opts) {

    const monCtrl = await ctrl.create(opts);
    
    const historyData: MonHistoryItem = {
      id: this.getId(),
      ctrl: monCtrl
    };

    history.pushState(historyData.id, 'MonHistoryController', location.href);
    this.historyList.push(historyData);
    
    monCtrl.onWillDismiss().then(() => {
      console.log('onWillDismiss', this.historyTrigger);
      if(this.historyTrigger) {
        this.historyTrigger = false;
      } else {
        console.log('onWillDismiss', this.historyList);
        this.historyTrigger = true;
        history.back();
      }
    });
    return monCtrl;
  }
  getId() {
    return String(new Date().getTime());
  }
}
