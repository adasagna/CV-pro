import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-visiteur',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './visiteur.component.html',
  styleUrl: './visiteur.component.css'
})
export class VisiteurComponent {

}
