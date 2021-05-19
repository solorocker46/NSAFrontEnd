import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByUserIdComponent } from './view-by-user-id.component';

describe('ViewByUserIdComponent', () => {
  let component: ViewByUserIdComponent;
  let fixture: ComponentFixture<ViewByUserIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByUserIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
