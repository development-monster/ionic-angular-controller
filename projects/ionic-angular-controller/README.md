# @dev-monster/ionic-angualr-controller

This library is expansions of [ionic4 controllers](https://ionicframework.com/docs/components).
[ion-alert](https://ionicframework.com/docs/api/alert), [ion-modal](https://ionicframework.com/docs/api/modal), [ion-popover](https://ionicframework.com/docs/api/popover) and [ion-toast](https://ionicframework.com/docs/api/toast).

## main functions

* `Web browsers & android back button` : Controllers can be dismissed by press backbutton on browsers and android.

* `IE browser design fix` : IE11's ToastControllers position and animation fix.

> It is **unstable** expansion. So use carefully.

## install

```
npm install --save @dev-monster/ionic-angualr-controller
```

## Usage

app.module.ts
```javascript
import { MonIonControllerModule } from '@dev-monster/ionic-angular-controller';

@NgModule({
  ...
  imports: [
    ...
    MonIonControllerModule
    ...
    ],
  ...
})
export class AppModule {}
```

and then any page's modult.ts to use this controllers.
These are allmost same usage as [ion-alert](https://ionicframework.com/docs/api/alert), [ion-modal](https://ionicframework.com/docs/api/modal), [ion-popover](https://ionicframework.com/docs/api/popover) and [ion-toast](https://ionicframework.com/docs/api/toast).

**monster-alert-controller**
```javascript
import { MonAlertController } from '@dev-monster/ionic-angular-controller';

export class HomePage implements OnInit {
  constructor(
    private alertCtrl: MonAlertController
  ) { }

  async ngOnInit() {
    const alert = await this.alertCtrl.create({
      header: `Monster Ionic Alert`,
      message: 'It is Monster Ionic Alert',
      buttons: [
        {
          text: 'cancel'
        },
        {
          text: 'close alertcontroller',
          handler: () => {
            this.alertCtrl.dismiss();
            return false;
          }
        },
        {
          text: 'close this alert',
          handler: () => {
            alert.dismiss();
            return false;
          }
        },
        {
          text: 'open one more',
          handler: () => {
            this.openAlert();
            return false;
          }
        }
      ]
    });
    await alert.present();
  }
}
```
**monster-modal-controller**
```javascript
import { MonAlertController } from '@dev-monster/ionic-angular-controller';

export class HomePage implements OnInit {
  constructor(
    private alertCtrl: MonAlertController
  ) { }

  async ngOnInit() {
    const modal = await this.modalCtrl.create({
      component: ModalSampleComponent
    });
    await modal.present();
  }
}
```
**monster-popover-controller**
```javascript
import { MonAlertController } from '@dev-monster/ionic-angular-controller';

export class HomePage implements OnInit {
  constructor(
    private alertCtrl: MonAlertController
  ) { }

  async ngOnInit() {
    const popover = await this.popoverCtrl.create({
      component: PopoverSampleComponent,
      event: ev
    });
    await popover.present();
  }
}
```