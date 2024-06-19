import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div>project</div>
  `,
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  constructor(private route: ActivatedRoute){
    console.log(route)
  }
}
