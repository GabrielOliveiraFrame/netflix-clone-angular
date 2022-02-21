import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HomeInputComponent } from './components/home-input/home-input.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LoginCardComponent } from './components/login-card/login-card.component';


@NgModule({
  declarations: [HomeComponent, HomeInputComponent, LoginCardComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PublicModule { }
