import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormValidations } from 'src/app/shared/validators/form-validations';


@Component({
  selector: 'app-home-input',
  templateUrl: './home-input.component.html',
  styleUrls: ['./home-input.component.css']
})
export class HomeInputComponent implements OnInit {

  public signUpForm!: FormGroup;

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.creatForm();
  }
  signUp(){
    this.router.navigate(['/public/signUp']);
  }
  creatForm(){
    this.signUpForm = this.formbuilder.group({
      email: ['', Validators.required]
    })
  }
  submit(): void {
    if(this.signUpForm.valid){
      this.signUp();
    } else {
      FormValidations.checkValidations(this.signUpForm);
    }
  }

}
