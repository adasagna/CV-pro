import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueildashboardComponent } from './accueildashboard.component';

describe('AccueildashboardComponent', () => {
  let component: AccueildashboardComponent;
  let fixture: ComponentFixture<AccueildashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueildashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccueildashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
