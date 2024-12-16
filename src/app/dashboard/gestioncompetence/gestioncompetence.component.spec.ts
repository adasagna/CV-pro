import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncompetenceComponent } from './gestioncompetence.component';

describe('GestioncompetenceComponent', () => {
  let component: GestioncompetenceComponent;
  let fixture: ComponentFixture<GestioncompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestioncompetenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestioncompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
