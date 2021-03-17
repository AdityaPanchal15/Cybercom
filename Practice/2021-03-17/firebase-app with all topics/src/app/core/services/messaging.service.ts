import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';
import { SwPush } from '@angular/service-worker';

@Injectable()
export class MessagingService {

  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging:AngularFireMessaging) {
    this.angularFireMessaging.messages.subscribe(
      (_messaging:any) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }

 
  /**
   * request permission for notification from firebase cloud messaging
   * 
   * @param userId userId
   */
  getPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  /**
   * hook method when new notification received in foreground
   */
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
      })
  }
}