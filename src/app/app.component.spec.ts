import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {Store} from "@ngrx/store";
import {AsyncPipe, CommonModule} from "@angular/common";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';

const testStore = {
  select: a => Observable.of(12),
  dispatch: a => a
}

const storeProvider = {
  provide: Store,
  useValue: testStore
};

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        CommonModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        storeProvider
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
