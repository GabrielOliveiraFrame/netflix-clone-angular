import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private fb: FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  toogleText(): void {
    this.activeText = !this.activeText;
  }

  createForm(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
      remember: [true]
    })
  }

  submit(): void {
    if(this.form.valid){
      console.log(this.form.value);
      this.router.navigate(['/private/header']);
    } else {
      FormValidations.checkValidations(this.form);
    }
  }

}
