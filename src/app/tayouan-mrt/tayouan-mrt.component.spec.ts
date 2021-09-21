import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TayouanMRTComponent } from './tayouan-mrt.component';

describe('TayouanMRTComponent', () => {
  let component: TayouanMRTComponent;
  let fixture: ComponentFixture<TayouanMRTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TayouanMRTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TayouanMRTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
