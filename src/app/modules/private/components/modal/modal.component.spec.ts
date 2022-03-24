import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MoviesMock } from './../../../../shared/mocks/movies-mock';
import { MoviesService } from 'src/app/shared/service/movies.service';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  const moviesServiceMock = {
    getVideos: jest.fn(() => of(MoviesMock.getVideosMock)),
    getDetails: jest.fn(() => of(MoviesMock.movieDetailMock)),
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers: [
        { provide: MoviesService, useValue: moviesServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Method: MovieDetails', () => {
    it('should GetDetails have been called', () => {
      component.Id = 230;
      component.getMoviesDetails();
      expect(moviesServiceMock.getDetails).toHaveBeenCalled();
    });
  });
  describe('Method: MovieVideo', () => {
    it('should getByGenre called', () => {
      component.Id = 589761;
      component.getTrailer();
      expect(component.safeUrl).toEqual({"changingThisBreaksApplicationSecurity": "https://www.youtube.com/embed/Sb79EvE-nyg?autoplay=1&showinfo=0&controls=0"});
    });
  });
  describe('Convert To Hour', () => {
    it('should convert to hour type', () => {
      component.convertHour(120);
      expect(component.hour).toBe("02h 00min")
    });
  });
  describe('Emmit Click Event', () => {
    it('should emmit a click event', () => {
      component.iconClicked();
      expect(component.moreClicked.emit).toBeTruthy();
    });
  });
});
