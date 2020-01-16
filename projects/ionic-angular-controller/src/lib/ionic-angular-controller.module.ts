import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MonHistoryController } from './mon-history-controller.service';
import { MonAlertController } from './mon-alert-controller.service';
import { MonModalController } from './mon-modal-controller.service';
import { MonPopoverController } from './mon-popover-controller.service';
import { MonToastController } from './mon-toast-controller.service';


@NgModule({
  declarations: [],
  imports: [
    IonicModule,
  ],
  exports: [],
  providers: [
    MonHistoryController,
    MonAlertController,
    MonModalController,
    MonPopoverController,
    MonToastController,
  ]
})
export class MonIonControllerModule { }