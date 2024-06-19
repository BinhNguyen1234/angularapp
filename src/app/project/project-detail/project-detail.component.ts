import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [],
  template: `
  <div>project Detail</div>
  <div>{{projectId}}</div>
`,
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent {
  public projectId !: string | null
  constructor(router: ActivatedRoute){
    this.projectId = router.snapshot.params["projectId"]
  }
}
