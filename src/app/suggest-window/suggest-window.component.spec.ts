import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SuggestWindowComponent} from './suggest-window.component';

describe('SuggestWindowComponent', () => {
  let component: SuggestWindowComponent;
  let fixture: ComponentFixture<SuggestWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
