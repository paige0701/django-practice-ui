import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoredDetailComponent } from './recored-detail.component';

describe('RecoredDetailComponent', () => {
  let component: RecoredDetailComponent;
  let fixture: ComponentFixture<RecoredDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoredDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoredDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
