import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
  }

  SignUp(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        alert("You are Successfully signed up!");
        // console.log('You are Successfully signed up!', res);
      })
      .catch(error => {
        alert(error.message);
      });
  }

  SignIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        alert('You are Successfully logged in!');
        // console.log('You are Successfully logged in!');
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }

  SignOut() {
    this.angularFireAuth
      .signOut();
  }

  resetPassword(email: string) {
    this.angularFireAuth
      .sendPasswordResetEmail(email)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  AuthLogin(provider) {
    return this.angularFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        alert('You are Successfully logged in!');
        // console.log('You have been successfully logged in!')
      }).catch((error) => {
        console.log(error)
      })
  }
}
