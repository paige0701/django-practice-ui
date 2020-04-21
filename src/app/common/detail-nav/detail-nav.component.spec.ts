import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNavComponent } from './detail-nav.component';

describe('DetailNavComponent', () => {
  let component: DetailNavComponent;
  let fixture: ComponentFixture<DetailNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
