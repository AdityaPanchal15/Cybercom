import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Policy } from '../model/policy.model';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private firestore: AngularFirestore,private firebaseDatabase:AngularFireDatabase) { }

  getPolicies() {
    // return this.firestore.collection('policies').snapshotChanges();
    return this.firebaseDatabase.list('/policies').snapshotChanges();
  }

  createPolicy(policy: any){
    // return this.firestore.collection('policies').add(policy);
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
