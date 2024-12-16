import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarrComponent } from './menubarr.component';

describe('MenubarrComponent', () => {
  let component: MenubarrComponent;
  let fixture: ComponentFixture<MenubarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenubarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
