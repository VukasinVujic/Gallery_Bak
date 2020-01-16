import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreePictureComponent } from './three-picture.component';

describe('ThreePictureComponent', () => {
  let component: ThreePictureComponent;
  let fixture: ComponentFixture<ThreePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
