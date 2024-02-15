import { Component } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { DisplayReposComponent } from '../display-repos/display-repos.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-git-repo',
  standalone: true,
  imports: [DetailsComponent,DisplayReposComponent,CommonModule,FormsModule],
  templateUrl: './git-repo.component.html',
  styleUrl: './git-repo.component.scss'
})
export class GitRepoComponent {
    
  noOfPages:number=0

    constructor(){}

    
}
