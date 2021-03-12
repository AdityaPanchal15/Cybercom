import { Component, OnInit } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa-practiceApp';
  update: boolean = false;

  constructor(private swUpdate: SwUpdate,private swPush:SwPush, private snackbar: MatSnackBar) {
    this.swUpdate.available.subscribe(evt => {
      const snack = this.snackbar.open('Update Available', 'Reload');
      snack
        .onAction()
        .subscribe(() => {
          window.location.reload();
      });
    });

    this.showNotification();

    this.swPush.messages.subscribe(msg=>{
      console.log(msg);
      this.snackbar.open(JSON.stringify(msg),'ok',{duration: 3000});
    })

    const key='BE1LnJ47NHPfANRh9adkwaRSXJ4EPPQGBBYjBhAsY5Ml8UMS3FnZFHyKqsJ3Be6dTc7Vw45Ypwc3Q34fVBgG4EQ';
    this.swPush.requestSubscription({serverPublicKey:key})
      .then(pushSubscription=>{
        console.log(pushSubscription.toJSON());
      });
   }

  // ngOnInit(): void {
    // this.swUpdate.available.subscribe(event => {
    //   this.update = true;
    //   console.log(event);

    //   window.location.reload();
    // })
    // this.showNotification();

    
    // if (swUpdate.isEnabled) {
    //   interval(6 * 60 * 60).subscribe(() => 
    //     swUpdate.checkForUpdate()
    //     .then(() => console.log('checking for updates')));
    // }

      


    // snack.setTimeout(() => {
    //   snack.dismiss();
    // }, 6000);
    // });
  // }

  showNotification() {
    Notification.requestPermission(function (result) {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(function (registration) {
          registration.showNotification('Vibration Sample', {
            body: 'Refresh page',
            icon: 'http://simpleicon.com/wp-content/uploads/rocket.png',
            vibrate: [200, 100, 200, 100, 200, 100, 200],
            tag: 'vibration-sample'
          });
        });
      }
    });
  }
}