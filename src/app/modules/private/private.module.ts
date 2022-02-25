import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';

import { CardsSliderComponent } from './components/cards-slider/cards-slider.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
  declarations: [CardsSliderComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    IvyCarouselModule
  ]
})
export class PrivateModule { }
