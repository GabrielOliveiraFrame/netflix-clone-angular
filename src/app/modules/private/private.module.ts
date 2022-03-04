import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { CardsSliderComponent } from './components/cards-slider/cards-slider.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HeaderComponent } from './components/header/header.component';
import { DetailsClickComponent } from './components/details-click/details-click.component';
import { SimilarCardComponent } from './components/similar-card/similar-card.component';

import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


@NgModule({
  declarations: [HeaderComponent, CardsSliderComponent, DetailsClickComponent, SimilarCardComponent],
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
