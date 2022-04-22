import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnalyticsService } from 'src/app/shared/service/analytics.service';
import { UserService } from 'src/app/shared/service/user.service';
import { FormValidations } from 'src/app/shared/validators/form-validations';

@Component({
  selector: 'app-sign-up-card',
  templateUrl: './sign-up-card.component.html',
  styleUrls: ['./sign-up-card.component.css']
})
export class SignUpCardComponent implements OnInit {

  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private userService: UserService,
    private analyticsService: AnalyticsService
  ) { }

  public signUpForm!: FormGroup;
  public cont:number = 0;
  logErr = false;

  ngOnInit(): void {
    this.formBuilder();
  }

  navigateLogin(){
    this.router.navigate(['/public/login']);
  }

  navigateNext(){
    this.cont++;
  }

  signUp(){
    if(this.signUpForm.valid){
      this.userService.getUser(this.signUpForm.get('email').value).subscribe({
        next: (result: any) => {
         console.log(result);
          if(result.length !== 0){
            alert("Esse usuário já esta cadastrado");
            this.logErr = true;
          }else{
            this.userService.postUser(this.signUpForm.value).subscribe({
              next: (data:any) =>{
                this.navigateNext();
                this.analyticsService.eventEmitter('create_account', this.signUpForm.get('email').value);
              }
            });
          }
        }, error: (err: any) => {
          alert('Erro de servidor, tente novamente!');
          this.logErr = true;
        }
      })
    } else {
      FormValidations.checkValidations(this.signUpForm);
    }
  }

  formBuilder(){
    this.signUpForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]]
    })

    if (sessionStorage.getItem('email') !== null){
      let emailValue = sessionStorage.getItem('email');
      this.signUpForm.patchValue({email:emailValue})
    }
  }
}
