import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Bike } from '../bike.model';
import { YAMAHA_MOCK_DATA } from './mock-data';

// reference: https://jasonwatmore.com/post/2022/11/30/angular-14-fake-backend-api-to-intercept-http-requests-in-development

// array in local storage for registered bikes
const bikesKey = 'fakeDB';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // save mocked bike data to local storage if data is not there
    this.setFakeDB();
    return this.handleRoute(request, next);
  }

  handleRoute(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, body } = request;
    switch (true) {
      case url.endsWith('/bikes') && method === 'GET':
        return this.getBikes();
      case url.match(/\/bikes\/\d+$/) && method === 'GET':
        return this.getBikeById(url);
      case url.endsWith('/bikes') && method === 'POST':
        return this.saveBike(body);
      case url.match(/\/bikes\/\d+$/) && method === 'DELETE':
        return this.deleteBike(url);
      default:
        // pass through any requests not handled above
        return next.handle(request);
    }
  }

  // route functions

  getBikes() {
    return this.ok(this.fakeDB());
  }

  getBikeById(url: string) {
    const bikeId = this.idFromUrl(url);
    const bike = this.fakeDB().find((x) => x.articleCompleteInfo.articleID === bikeId) || {};
    return this.ok(bike);
  }

  saveBike(updatedBike: Bike) {
    const bikes: Bike[] = this.fakeDB();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const bike = bikes.find(
      (bike) => bike.articleCompleteInfo.articleID === updatedBike.articleCompleteInfo.articleID
    )!;
    // if bike exist in DB update it, else add new bike to db
    bike ? Object.assign(bike, updatedBike) : bikes.push(updatedBike);
    this.updateFakeDB(bikes);
    return this.ok(bike);
  }

  deleteBike(url: string) {
    const bikeId = this.idFromUrl(url);
    const bikes = this.fakeDB().filter((x) => x.articleCompleteInfo.articleID != bikeId);
    this.updateFakeDB(bikes);
    return this.ok();
  }

  // helper functions

  ok(body?: any): Observable<any> {
    // delay observable to simulate server api call
    return of(new HttpResponse({ status: 200, body })).pipe(delay(100));
  }

  idFromUrl(url: string): number {
    const urlParts = url.split('/');
    return parseInt(urlParts[urlParts.length - 1]);
  }

  modelFromUrl(url: string): string {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 1];
  }

  fakeDB(): Bike[] {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return JSON.parse(localStorage.getItem(bikesKey)!);
  }

  setFakeDB(): void {
    if (!localStorage.getItem(bikesKey)) {
      this.updateFakeDB(YAMAHA_MOCK_DATA);
    }
  }

  updateFakeDB(data: Bike[]): void {
    localStorage.setItem(bikesKey, JSON.stringify(data));
  }
}
