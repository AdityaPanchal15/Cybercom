import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Policy } from '../model/policy.model';


@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private firestore: AngularFirestore) { }

  getPolicies() {
    return this.firestore.collection('policies').snapshotChanges();
  }

  createPolicy(policy: any){
    return this.firestore.collection('policies').add(policy);
  }

  updatePolicy(policy: any){
    // delete policy.ref_id;
    this.firestore.doc('policies/' + policy.ref_id).update(policy);
  }

  deletePolicy(policyId: string){
    this.firestore.doc('policies/' + policyId).delete();
  }
}
