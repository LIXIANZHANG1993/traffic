import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightwayTransportComponent } from './hightway-transport.component';

describe('HightwayTransportComponent', () => {
  let component: HightwayTransportComponent;
  let fixture: ComponentFixture<HightwayTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HightwayTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HightwayTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
