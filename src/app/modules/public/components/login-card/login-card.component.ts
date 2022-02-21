import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidations } from 'src/app/shared/validators/form-validations';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {
  activeText: boolean = false;
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  toogleText(): void {
    this.activeText = !this.activeText;
  }

  createForm(): void {
    this.form = this.fb.group({
      credential: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    })
  }

  submit(): void {
    if(this.form.valid){
      console.log(this.form.value);
    } else {
      FormValidations.checkValidations(this.form);
    }
  }

}
