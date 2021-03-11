import { Component } from '@angular/core';
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
  update:boolean =false;

  constructor(swUpdate:SwUpdate,private snackbar: MatSnackBar){
 
    if (swUpdate.isEnabled) {
      interval(6 * 60 * 60).subscribe(() => 
        swUpdate.checkForUpdate()
        .then(() => console.log('checking for updates')));
    }

    
  //     swUpdate.available.subscribe(evt => {
  //     const snack = this.snackbar.open('Update Available', 'Reload');
  // snack
  //   .onAction()
  //   .subscribe(() => {
  //     window.location.reload();
  //   });



  // snack.setTimeout(() => {
  //   snack.dismiss();
  // }, 6000);
// });
    // updates.available.subscribe(event=>{
    //   this.update=true;
    //   console.log(event);
      
    //   window.location.reload();
    // })
    // this.showNotification();
    
  }
  
// showNotification() {
//   Notification.requestPermission(function(result) {
//     if (result === 'granted') {
//       navigator.serviceWorker.ready.then(function(registration) {
//         registration.showNotification('Vibration Sample', {
//           body: 'Refresh page',
//           icon: 'http://simpleicon.com/wp-content/uploads/rocket.png',
//           vibrate: [200, 100, 200, 100, 200, 100, 200],
//           tag: 'vibration-sample'
//         });
//       });
//     }
//   });
// }

}
