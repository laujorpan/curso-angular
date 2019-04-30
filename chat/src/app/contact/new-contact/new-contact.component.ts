import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';


interface NewContact {
  email: string;
  name: {
    first: string,
    last: string
  };
  picture: string;
}


@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  newContactForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.newContactForm = new FormGroup({
      name : new FormGroup ({
        first : new FormControl('', [Validators.required, Validators.minLength(3)]),
        last: new FormControl('', [Validators.required]),
      }),
      email : new FormControl('', [Validators.required, Validators.email]),
      picture: new FormControl('', [Validators.required]),
    });
  }
  getPictureErrorMessage() {
    return this.newContactForm.get('picture').hasError('required') ? 'You must enter a value' : '';
  }

  getEmailErrorMessage() {
    return this.newContactForm.get('email').hasError('required') ? 'You must enter a value' :
    this.newContactForm.get('email').hasError('email') ? 'Not a valid email' :
        '';
  }
  getFirstNameErrorMessage() {
    return this.newContactForm.get('name.first').hasError('required') ? 'You must enter a value' :
    this.newContactForm.get('name.first').hasError('minlength') ?
      (`Required ${this.newContactForm.get('name.first').getError('minlength').requiredLength} characters`):
        '';
  }
  getLastNameErrorMessage() {
    return this.newContactForm.get('name.last').hasError('required') ? 'You must enter a value' : '';
  }
}
