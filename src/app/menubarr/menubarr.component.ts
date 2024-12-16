import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menubarr',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './menubarr.component.html',
  styleUrl: './menubarr.component.css'
})
export class MenubarrComponent {
  

}
