import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RodapeComponent } from 'src/app/shared/components/rodape/rodape.component';
import { HomeInputComponent } from '../home-input/home-input.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, RodapeComponent, HomeInputComponent],
      imports: [
        RouterTestingModule,
        FormBuilder
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to login', () => {
    jest.spyOn(router, 'navigate').mockReturnValue(null);
    component.navigateLogin();
    expect(router.navigate).toHaveBeenCalledWith(['/public/login']);
  });
});
