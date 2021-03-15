import { Component, OnInit } from '@angular/core';
import { Policy } from '../core/model/policy.model';
import { PolicyService } from '../core/services/policy.service';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {

  policies: Policy[];
  policyModel=new Policy;
  constructor(private policyService: PolicyService) { }

  async ngOnInit() {
    this.policyService.getPolicies().subscribe(data => {
      this.policies = data.map(e => {
        return {
          ref_id: e.payload.key,
          ...e.payload.toJSON() as any
        } as Policy;
      });
    });
    
  }

  create(policy: Policy){
    if(!policy['ref_id']){
      this.policyService.createPolicy(Object.assign({},policy));
      this.policyModel=new Policy;
    }else{
      this.policyService.updatePolicy(Object.assign({},policy));
      this.policyModel=new Policy;
    }  
  }

  update(policy: Policy) {
    this.policyModel=policy;
  }

  delete(id: string) {
    this.policyService.deletePolicy(id);
  }
}
