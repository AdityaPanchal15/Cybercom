import { Component } from '@angular/core';
import { MessagingService } from './core/services/messaging.service';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-app';
  
  message:any;
  update:boolean;

  constructor(private messagingService: MessagingService,private swUpdate:SwUpdate) { 
    this.swUpdate.available.subscribe(data=>{
      this.update=true;
    })
  }

  ngOnInit() {
    // const userId = 'user001';
    this.messagingService.getPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
    };
}


