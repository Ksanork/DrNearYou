import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalWithDoctorsComponent} from './modal-with-doctors.component';

describe('ModalWithDoctorsComponent', () => {
  let component: ModalWithDoctorsComponent;
  let fixture: ComponentFixture<ModalWithDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWithDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWithDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
