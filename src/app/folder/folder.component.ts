import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-folder',
  standalone: true,
  imports: [],
  template: `
    <div>folder</div>
    <div>this folder id: {{folderId}}</div>
    <div>this folder id: {{projectId}}</div>
  `,
  styleUrl: './folder.component.css'
})
export class FolderComponent {
  projectId !: string | null
  folderId !: string | null
  constructor(private route:ActivatedRoute ){
    this.folderId = route.snapshot.params["folderId"]
    this.projectId = route.snapshot.paramMap.get("projectId")
  }
}
