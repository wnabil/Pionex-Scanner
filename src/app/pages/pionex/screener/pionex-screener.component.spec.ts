import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PionexScreenerComponent } from './pionex-screener.component';

describe('PionexScreenerComponent', () => {
  let component: PionexScreenerComponent;
  let fixture: ComponentFixture<PionexScreenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PionexScreenerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PionexScreenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
