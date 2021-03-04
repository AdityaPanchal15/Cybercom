import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cryptoApp';
  _answer:any;
  _secretKey = "aditya";

  encrypt(text:HTMLInputElement){
    if(!text){
      alert('Enter text to encrypt.');
    }else{
      console.log(text);
      this._answer=CryptoJS.AES.encrypt(text, this._secretKey).toString();
    }
  }
  decrypt(text:HTMLInputElement){
    if(!text){
      alert('Enter text to decrypt.');
    }else{
      console.log(text);
      this._answer=CryptoJS.AES.decrypt(text, this._secretKey).toString(CryptoJS.enc.Utf8);
    }
  }

  copy(){
    let copyElement = document.createElement('textarea');
    copyElement.value = this._answer;
    document.body.appendChild(copyElement);
    copyElement.focus();
    copyElement.select();
    document.execCommand('copy');
    document.body.removeChild(copyElement);
  }
}
