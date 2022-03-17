import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { MoviesMock } from './../../../../shared/mocks/movies-mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesService } from 'src/app/shared/service/movies.service';

import { CardsSliderComponent } from './cards-slider.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

describe('CardsSliderComponent', () => {
  let component: CardsSliderComponent;
  let fixture: ComponentFixture<CardsSliderComponent>;

  const moviesServiceMock = {
    getByGenre: jest.fn(() => of(MoviesMock.movieResultsMock)),
    getPopular: jest.fn(() => of(MoviesMock.movieResultsMock)),
    getTopRated: jest.fn(() => of(MoviesMock.movieResultsMock)),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSliderComponent ],
      providers: [
        { provide: MoviesService, useValue: moviesServiceMock }
      ],
      imports: [
        IvyCarouselModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create && call getTopRated', () => {
    expect(component).toBeTruthy();
  });

  it('should getTopRated called', () => {
    expect(moviesServiceMock.getTopRated).toHaveBeenCalled();
  });

  describe('Method: getMovies', () => {
    it('should getByGenre called', () => {
      component.type = 'genre';
      component.genre = 28;
      component.getMovies();

      expect(moviesServiceMock.getByGenre).toHaveBeenCalled();
    });

    it('should getPopular called', () => {
      component.type = 'popular';
      component.getMovies();

      expect(moviesServiceMock.getPopular).toHaveBeenCalled();
    });
  });

  describe('mouseenter event', () => {
    it('should methods setHoverId; toggleModalTrue; cardPosition called', () => {
      const img = fixture.debugElement.queryAll(By.css('img'));
      img[0].triggerEventHandler('mouseenter', {});
    });
  });

  describe('mouseleave event', () => {
    it('should toggleModalFalse called', () => {
      const img = fixture.debugElement.queryAll(By.css('img'));
      img[0].triggerEventHandler('mouseenter', {});

      const card = fixture.debugElement.query(By.css('.cardFilm'));
      card.triggerEventHandler('mouseleave', {});

      expect(component.showCard).toBe(false);
    });
  });

  describe('Method: onMoreClicked', () => {
    it('should emit 1', () => {
      const id = 1;
      const clickedSpy = jest.spyOn(component.moreClicked, 'emit');

      component.onMoreClicked(id);
      expect(clickedSpy).toHaveBeenCalledWith(id);
    });
  });
});
