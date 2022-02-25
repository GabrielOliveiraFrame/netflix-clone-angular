import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { CardsSliderComponent } from './components/cards-slider/cards-slider.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [HeaderComponent, CardsSliderComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    IvyCarouselModule
  ]
})
export class PrivateModule { }
