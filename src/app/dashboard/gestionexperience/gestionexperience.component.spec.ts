import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionexperienceComponent } from './gestionexperience.component';

describe('GestionexperienceComponent', () => {
  let component: GestionexperienceComponent;
  let fixture: ComponentFixture<GestionexperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionexperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
