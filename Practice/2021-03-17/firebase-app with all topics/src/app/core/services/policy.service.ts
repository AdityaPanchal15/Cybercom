import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private firestore: AngularFirestore,private firebaseDatabase:AngularFireDatabase,private http:HttpClient ) { }
  
  url="https://fcm.googleapis.com/fcm/send";
  body={
    "notification": {
      "title": "My Policy", 
      "body": "Policy added"
     },
     "to" : "eegAu0vmoKZby8oiPvJGMI:APA91bHGc5IY7E8fRO2vHyv5j6xTpK95zIxorMS8GMkoRF-TPkMrOz3kOsdirNwxnKJeqEdXks8XTk5S1nrE0kKN66cNakEKDVFWrmEK6u4EByrpJT0T2vN8l_VB-Z3dgU3DzRElsXTt"
    }
  
  header={
    "Content-Type":"application/json",
    "Authorization":"key=AAAAwbRqZW4:APA91bEq6LyAuhWTY3DpgOgnJuEsQWsK8HctQalWm0Gcovdkwf-QOtx3DoNpj1MsyUZYPe0mrS6BNAZISHKJo1J28ywbnMoeOUtI4h4f8wXkfkb0f67sXksRSjcxT1xY-nBGYYAJ70Z6"
  }

  getPolicies() {
    // return this.firestore.collection('policies').snapshotChanges();
    return this.firebaseDatabase.list('/policies').snapshotChanges();
  }

  createPolicy(policy: any){
    // return this.firestore.collection('policies').add(policy);
    this.http.post(this.url,this.body,{headers:this.header}).subscribe(data=>{
      console.log(data);
    });
    return this.firebaseDatabase.database.ref('/policies').push(policy);
  }

  updatePolicy(policy: any){
    let id=policy.ref_id;
    delete policy.ref_id;
    // this.firestore.doc('policies/' + policy.ref_id).update(policy);
    return this.firebaseDatabase.database.ref('/policies/'+id).update(policy);
  }

  deletePolicy(policyId: string){
    // this.firestore.doc('policies/' + policyId).delete();
    return this.firebaseDatabase.database.ref('/policies/'+policyId).remove();
  }
}
