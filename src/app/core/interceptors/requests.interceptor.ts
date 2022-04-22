import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AnalyticsService } from 'src/app/shared/service/analytics.service';

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {

  constructor(
    private analyticsService : AnalyticsService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.analyticsService.eventEmitter('error', error.error);
        return throwError(error.error);
      })
    );
  }
}
