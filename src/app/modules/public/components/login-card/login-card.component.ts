import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';
import { FormValidations } from 'src/app/shared/validators/form-validations';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {
  form: FormGroup;
  responseUser: any;
  formEmail: string;
  formSenha: string;
  formRemember: boolean;

  activeText: boolean = false;
  logErr: boolean = false;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private userService: UserService
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
      this.loading = true;

      this.formEmail = this.form.get('email').value;
      this.formSenha = this.form.get('senha').value;
      this.formRemember = this.form.get('remember').value;

      this.getUser();
    } else {
      FormValidations.checkValidations(this.form);
    }
  }

  getUser(){
    this.userService.getUser(this.formEmail).subscribe((data: any) => {
      if(data.length > 0){
        this.responseUser = data[0];
        this.checkCredentials();
      }else{
        this.logErr = true;
        this.loading = false;
      }
    })
  }

  checkCredentials(){
    this.formEmail == this.responseUser.email &&
      this.formSenha == this.responseUser.senha ?
        this.setStorage() : this.logErr = true, this.loading = false;
  }

  setStorage(){
    if(this.formRemember){
      localStorage.setItem('usuario', this.responseUser.email);
    } else {
      sessionStorage.setItem('usuario', this.responseUser.email);
    }

    this.navigatePrivate();
    this.loading = false;
  }

  navigatePrivate(){
    this.router.navigate(['private/home']);
    this.windowScroll();
  }

  navigateHome(){
    this.router.navigate(['public/home']);
    this.windowScroll();
  }

  windowScroll(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
