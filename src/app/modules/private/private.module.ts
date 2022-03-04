import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { CardsSliderComponent } from './components/cards-slider/cards-slider.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [HeaderComponent, CardsSliderComponent, ModalComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    IvyCarouselModule
  ]
})
export class PrivateModule { }
