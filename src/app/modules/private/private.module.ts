import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { CardsSliderComponent } from './components/cards-slider/cards-slider.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HomeComponent } from './components/home/home.component';
import { DetailsClickComponent } from './components/details-click/details-click.component';
import { SimilarCardComponent } from './components/similar-card/similar-card.component';
import { ModalComponent } from './components/modal/modal.component';

import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


@NgModule({
  declarations: [HomeComponent, CardsSliderComponent, DetailsClickComponent, SimilarCardComponent, ModalComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    IvyCarouselModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ]
})
export class PrivateModule { }
