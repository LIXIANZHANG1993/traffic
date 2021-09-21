import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaipeiMRTComponent } from './taipei-mrt.component';

describe('TaipeiMRTComponent', () => {
  let component: TaipeiMRTComponent;
  let fixture: ComponentFixture<TaipeiMRTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaipeiMRTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaipeiMRTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
