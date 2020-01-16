import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixPictureComponent } from './six-picture.component';

describe('SixPictureComponent', () => {
  let component: SixPictureComponent;
  let fixture: ComponentFixture<SixPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
