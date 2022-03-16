import { MoviesMock } from './../mocks/movies-mock';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpClient: HttpClient;

  const httpMock = {
    get: jest.fn()
  };

  const responseMoviesWithResultsMock = MoviesMock.movieResultsMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide: HttpClient, useValue: httpMock}
      ]
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Method: getByGenre', () => {
    it('should return same of mock', () => {

      httpMock.get.mockReturnValue(of(responseMoviesWithResultsMock));

      let response: [];
      service.getByGenre(80).subscribe((data: any) => {
        response = data.results;
      });

      expect(response).toBe(responseMoviesWithResultsMock.results);
    });
  });

  describe('Method: getPopular', () => {
    it('should return same of mock', () => {

      httpMock.get.mockReturnValue(of(responseMoviesWithResultsMock));

      let response: [];
      service.getPopular().subscribe((data: any) => {
        response = data.results;
      });

      expect(response).toBe(responseMoviesWithResultsMock.results);
    });
  });

  describe('Method: getTopRated', () => {
    it('should return same of mock', () => {

      httpMock.get.mockReturnValue(of(responseMoviesWithResultsMock));

      let response: [];
      service.getTopRated().subscribe((data: any) => {
        response = data.results;
      });

      expect(response).toBe(responseMoviesWithResultsMock.results);
    });
  });

  describe('Method: getSimilar', () => {
    it('should return same of mock', () => {

      httpMock.get.mockReturnValue(of(responseMoviesWithResultsMock));

      let response: [];
      service.getSimilar(589761).subscribe((data: any) => {
        response = data.results;
      });

      expect(response).toBe(responseMoviesWithResultsMock.results);
    });
  });

  describe('Method: getDetails', () => {
    it('should return same of mock', () => {
      const responseDetailsMock = MoviesMock.movieDetailMock;

      httpMock.get.mockReturnValue(of(responseDetailsMock));

      let response: Object;
      service.getDetais(238).subscribe((data: any) => {
        response = data;
      });

      expect(response).toBe(responseDetailsMock);
    });
  });

  describe('Method: getVideos', () => {
    it('should return same of mock', () => {
      const responseVideosMock = MoviesMock.getVideosMock;

      httpMock.get.mockReturnValue(of(responseVideosMock));

      let response: [];
      service.getVideos(589761).subscribe((data: any) => {
        response = data.results;
      });

      expect(response).toBe(responseVideosMock.results);
    });
  });

});
