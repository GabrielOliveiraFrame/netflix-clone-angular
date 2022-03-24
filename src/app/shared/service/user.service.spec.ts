import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserMock } from '../mocks/user-mock/user-mock';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpClient: HttpClient;

  const httpMock = {
    get: jest.fn()
  };
  const responseUserData = UserMock.userData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide: HttpClient, useValue: httpMock}
      ]
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(UserService);    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Method: getByGenre', () => {
    it('should return the same of mock', () => {

      httpMock.get.mockReturnValue(of(responseUserData));

      let response: [];
      service.getUser("test@test.com").subscribe((data: any) => {
        response = data.results;
      });

      expect(response).toBe(responseUserData.email);
    });
  });
});
