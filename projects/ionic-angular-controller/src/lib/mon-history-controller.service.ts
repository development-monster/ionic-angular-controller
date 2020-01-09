import { Injectable } from '@angular/core';

interface MonHistoryItem {
  id: string,
  ctrl: any
}
@Injectable()
export class MonHistoryController {
  historyList: Array < any > = [];
  historyTrigger:boolean = false;

  constructor(
  ) {
    console.log('injected:dev-monster/ionic-angular-controller');
    window.addEventListener('popstate', () => {
      console.log('popstate:historyTrigger', this.historyTrigger);
      if(this.historyTrigger) {
        this.historyTrigger = false;
      } else {
        console.log('popstate:historyList', this.historyList);
        if(this.historyList.length) {
          const itemIndex = this.historyList[this.historyList.length-1];
          console.log('popstate:itemIndex', itemIndex);
          this.historyTrigger = true;
          const lastHistoryData = this.historyList.pop();
          console.log(lastHistoryData);
          lastHistoryData.dismiss();
        }
      }
    });
  }
  async create(ctrl, opts) {

    const monCtrl = await ctrl.create(opts);

    history.pushState({id: new Date().getTime()}, 'MonHistoryController', location.href);
    this.historyList.push(monCtrl);
    
    monCtrl.onWillDismiss().then(() => {
      console.log('onWillDismiss:historyTrigger', this.historyTrigger);
      if(this.historyTrigger) {
        this.historyTrigger = false;
      } else {
        console.log('onWillDismiss:historyList', this.historyList);
        this.historyTrigger = true;
        const itemIndex = this.historyList.indexOf(monCtrl);
        console.log('onWillDismiss:itemIndex', itemIndex);
        this.historyList.splice(itemIndex, 1);
        history.back();
      }
    });
    return monCtrl;
  }
}
