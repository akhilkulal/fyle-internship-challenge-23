import { Component,Input } from '@angular/core';
import { Repo } from 'src/app/repo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repo-card.component.html',
  styleUrl: './repo-card.component.scss'
})
export class RepoCardComponent {
  @Input() repo:Repo=new Repo();

  constructor(){
    console.log(this.repo.languages)
  }
}
