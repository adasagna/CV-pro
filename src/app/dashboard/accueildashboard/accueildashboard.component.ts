import { Component } from '@angular/core';
import { MenubarrComponent } from '../../menubarr/menubarr.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueildashboard',
  standalone: true,
  imports: [MenubarrComponent, CommonModule],
  templateUrl: './accueildashboard.component.html',
  styleUrl: './accueildashboard.component.css'
})
export class AccueildashboardComponent {
  message :boolean=false;
  showmessage(){
     this.message= !this.message
  }
}
