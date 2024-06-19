import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div>
      <ul>
        <li>
          <a [routerLink]="['/']">Home</a>
        </li>
        <li>
          <a [routerLink]="['/project']">project</a>
        </li>
        <li>
          <a [routerLink]="['/project/123123']">project Id</a>
        </li>
        <li>
          <a [routerLink]="['/project/123123/folder/555']">folder</a>
        </li>
      </ul>

    </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
