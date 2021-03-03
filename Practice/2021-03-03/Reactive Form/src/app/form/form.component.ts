import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../core/services/form-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  //  @Output() _newItemEvent = new EventEmitter<Object>();
  _registrationDetails: Object;

  constructor(private _fb: FormBuilder, private _router: Router, private _serivce: FormDataService) { }

  form = this._fb.group({
    cruisSpecifics: this._fb.group({
      date: ['', Validators.required],
      participants: ['', Validators.required],
      foodRequest: this._fb.group({
        breakfast: [''],
        lunch: [''],
        dinner: ['']
      }),
      chooseOption: ['', Validators.required]
    }),

    contactInformation: this._fb.group({
      fullName: this._fb.group({
        firstName: [''],
        lastName: ['']
      }),
      email: [''],
      phoneNumber: [''],
      additionalRequests: ['']
    })
  });

  onChangeOption() {
    if (this.chooseOption.value == 'yes') {
      this.firstName.setValidators([Validators.required]);
      this.firstName.updateValueAndValidity();

      this.lastName.setValidators([Validators.required]);
      this.lastName.updateValueAndValidity();

      this.email.setValidators([Validators.required]);
      this.email.updateValueAndValidity();

      this.phoneNumber.setValidators([Validators.required]);
      this.phoneNumber.updateValueAndValidity();
    } else {
      this.firstName.clearValidators();
      this.firstName.updateValueAndValidity();

      this.lastName.clearValidators();
      this.lastName.updateValueAndValidity();

      this.email.clearValidators();
      this.email.updateValueAndValidity();

      this.phoneNumber.clearValidators();
      this.phoneNumber.updateValueAndValidity();

    }
  }

  onSubmit() {
    this._registrationDetails = this.form.value;
    this.formData = this._registrationDetails;
    // this._newItemEvent.emit(this._registrationDetails);
    // console.log(this._registrationDetails);
    this._router.navigate(['/registrationDetails']);
  }

  set formData(data: Object) {
    this._serivce.formData = data;
  }

  get date() { return this.form.get('cruisSpecifics.date'); }
  get participants() { return this.form.get('cruisSpecifics.participants'); }
  get foodRequest() { return this.form.get('cruisSpecifics.foodRequest'); }
  get chooseOption() { return this.form.get('cruisSpecifics.chooseOption'); }

  get firstName() { return this.form.get('contactInformation.fullName.firstName'); }
  get lastName() { return this.form.get('contactInformation.fullName.lastName'); }
  get email() { return this.form.get('contactInformation.email'); }
  get phoneNumber() { return this.form.get('contactInformation.phoneNumber'); }
  get additionalRequests() { return this.form.get('contactInformation.additionalRequests'); }


}
