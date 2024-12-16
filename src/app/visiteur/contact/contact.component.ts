import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  ListNotif: any
  email: string ="";
  nom: string="";
  message: string="";

}
