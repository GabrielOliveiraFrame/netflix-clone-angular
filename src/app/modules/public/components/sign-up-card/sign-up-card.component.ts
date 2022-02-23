import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/service/user.service';
import { FormValidations } from 'src/app/shared/validators/form-validations';

@Component({
  selector: 'app-sign-up-card',
  templateUrl: './sign-up-card.component.html',
  styleUrls: ['./sign-up-card.component.css']
})
export class SignUpCardComponent implements OnInit {

  constructor(private router: Router, private formbuilder: FormBuilder, private http: HttpClient, private userService: UserService) { }
  private user = new Observable<any>();
  public signUpForm!: FormGroup;
  public cont:number = 0;
  
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
    const valorForm = this.signUpForm.value;
    if(this.signUpForm.valid){
      this.userService.getUser(this.signUpForm.get('email').value).subscribe({
      next: (result: any) => {
        console.log(result);
        if(result.length !== 0){
          alert("Esse usuário já esta cadastrado")
        }else{
          this.userService.postUser(this.signUpForm.value).subscribe({
            next: (data:any) =>{
              this.navigateLogin();
            }
          });
        }
      }, error: (err: any) => {}
    })
    } else {
      FormValidations.checkValidations(this.signUpForm);
    }
  }
    
  formBuilder(){
    this.signUpForm = this.formbuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }  
}
