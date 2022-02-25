import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { HeaderComponent } from './header/header.component';

import { CardsSliderComponent } from './components/cards-slider/cards-slider.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
<<<<<<< HEAD
  declarations: [HeaderComponent],
=======
  declarations: [CardsSliderComponent],
>>>>>>> 32b937222a50d284a32b25ab2b725552075942e1
  imports: [
    CommonModule,
    PrivateRoutingModule,
    IvyCarouselModule
  ]
})
export class PrivateModule { }
