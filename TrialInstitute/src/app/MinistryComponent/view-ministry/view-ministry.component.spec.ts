import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMinistryComponent } from './view-ministry.component';

describe('ViewMinistryComponent', () => {
  let component: ViewMinistryComponent;
  let fixture: ComponentFixture<ViewMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMinistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
