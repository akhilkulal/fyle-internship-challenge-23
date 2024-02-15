import { Component,Input } from '@angular/core';
import { ResponseStoreService } from 'src/app/services/response-store.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReposListComponent } from '../repos-list/repos-list.component';
import { RepoCardComponent } from '../repo-card/repo-card.component';
import { Repo } from 'src/app/repo';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-display-repos',
  standalone: true,
  imports: [NgxPaginationModule,RepoCardComponent,CommonModule],
  templateUrl: './display-repos.component.html',
  styleUrl: './display-repos.component.scss'
})
export class DisplayReposComponent {
  @Input() noOfPages:string='';
  responseStore: ResponseStoreService = new ResponseStoreService;
  list:any[]=[]

  constructor(){
    const repo = this.responseStore.getItem('reposList');
    this.list = JSON.parse(repo)
  }
  getReposList(){
    
  }
}
