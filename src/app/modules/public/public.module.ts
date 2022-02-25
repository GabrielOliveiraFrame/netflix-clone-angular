import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HomeInputComponent } from './components/home-input/home-input.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { SignUpCardComponent } from './components/sign-up-card/sign-up-card.component';
import { PrivateRoutingModule } from '../private/private-routing.module';

@NgModule({
  declarations: [HomeComponent, HomeInputComponent, LoginCardComponent, SignUpCardComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PrivateRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PublicModule { }
