import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa-practiceApp';
  update:boolean =false;

  constructor(updates:SwUpdate){
    updates.available.subscribe(event=>{
      this.update=true;
    })
    showNotification();
  }
}
  
  function showNotification() {
    Notification.requestPermission(function(result) {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
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
