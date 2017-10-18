import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

function provideHttp(){
  return {
    provide: Http,
    useValue: {
      get: () => Observable.of('hello world')
    }
  }
}


describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestService,
        provideHttp()
      ]
    });
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));
});
