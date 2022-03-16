import { MoviesMock } from './../../../../shared/mocks/movies-mock';
import { MoviesService } from 'src/app/shared/service/movies.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsClickComponent } from './details-click.component';
import { By, DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs';
import { SimilarCardComponent } from '../similar-card/similar-card.component';

describe('DetailsClickComponent', () => {
  let component: DetailsClickComponent;
  let fixture: ComponentFixture<DetailsClickComponent>;

  const moviesServiceMock = {
    getDetais: jest.fn(),
    getVideos: jest.fn(),
    getSimilar: jest.fn(),
  }

  const sanitizerMock = {
    bypassSecurityTrustResourceUrl: jest.fn(),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsClickComponent, SimilarCardComponent],
      providers: [
        { provide: MoviesService, useValue: moviesServiceMock },
        { provide: DomSanitizer, useValue: sanitizerMock },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Method: onChanges', () => {
    it('should call all the methods inside', () => {
      const similarSpy = jest.spyOn(component,'getSimilarMovies');
      const detailSpy = jest.spyOn(component,'getMovieDetails');
      const videosSpy = jest.spyOn(component,'getTrailer');

      const detailMock = MoviesMock.movieDetailMock;
      const resultsMock = MoviesMock.movieResultsMock;
      const videosMock = MoviesMock.getVideosMock;

      moviesServiceMock.getDetais.mockReturnValue(of(detailMock));
      moviesServiceMock.getSimilar.mockReturnValue(of(resultsMock));
      moviesServiceMock.getVideos.mockReturnValue(of(videosMock));

      component.movieId = 80;
      component.ngOnChanges();

      expect(similarSpy).toHaveBeenCalled();
      expect(detailSpy).toHaveBeenCalled();
      expect(videosSpy).toHaveBeenCalled();
    });
  });

  describe('Method: getTrailer but with type teaser', () => {
    it('should call domSanitizer', () => {
      const videosMock = MoviesMock.getVideosTeaserMock;

      moviesServiceMock.getVideos.mockReturnValue(of(videosMock));
      component.getTrailer();

      expect(sanitizerMock.bypassSecurityTrustResourceUrl).toHaveBeenCalled();
    });
  });

  describe('Function: getHours', () => {
    it('should return 02h 55min', () => {
      const movieMock = MoviesMock.movieDetailMock;

      component.movie = movieMock;
      expect(component.getHours).toBe('02h 55min');
    });
  });

  describe('Method: toggleSimilar', () => {
    it('should switch the values', () => {
      const initialValue = component.showAllSimilar;
      const movieMock = MoviesMock.movieDetailMock;
      const similarMock = MoviesMock.movieResultsMock.results;

      component.movie = movieMock;
      component.similars = similarMock;
      fixture.detectChanges();

      const button = fixture.debugElement.query(By.css('.more-circle'));
      button.nativeElement.click();

      expect(initialValue).toBe(!component.showAllSimilar);
    });
  });

  describe('Method: close', () => {
    it('should reset url', () => {
      const movieMock = MoviesMock.movieDetailMock;

      component.movie = movieMock;

      fixture.detectChanges();
      const button = fixture.debugElement.query(By.css('.close-circle'));
      button.nativeElement.click();

      expect(component.safeUrl).toBeUndefined();
    });
  });
});
