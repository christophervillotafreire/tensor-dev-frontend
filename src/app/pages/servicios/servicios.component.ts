import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  activeTab: 'tech' | 'edu' = 'tech';

  setTab(tab: 'tech' | 'edu') {
    this.activeTab = tab;
  }
}
