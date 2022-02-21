import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HomeInputComponent } from './components/home-input/home-input.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [HomeComponent, HomeInputComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedComponentsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class PublicModule { }
