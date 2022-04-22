import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CardsSliderComponent } from '../cards-slider/cards-slider.component';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CarouselComponent, IvyCarouselModule } from 'angular-responsive-carousel';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, CardsSliderComponent, CarouselComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        IvyCarouselModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Event functions', () => {
    it('Should be equal true', () => {
      component.onCardAtivado(true);
      expect(component.cardVisto).toEqual(true);
    });
    it('Should change details variable', () => {
      component.onMoreClicked(123);
      expect(component.movieClickedId).toEqual(123);
      expect(component.showDetails).toEqual(true);
    });
    it('Should change variables change values', () => {
      component.mainMovieClick();
      expect(component.movieClickedId).toEqual(568124);
      expect(component.showDetails).toEqual(true);
    });
  });
});
