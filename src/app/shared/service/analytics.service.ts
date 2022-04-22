import { Injectable } from '@angular/core';

declare let gtag:Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  // eventEmitter(eventName: string, eventCategory: string, eventAction: string,
  //   eventLabel: string, eventValue: string){}

  eventEmitter(eventName: string, eventValue: string){
    gtag('event', eventName, {
      eventValue: eventValue
    });
  }
}
