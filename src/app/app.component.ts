import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { ResponseStoreService } from './services/response-store.service';
import { Router } from '@angular/router';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit{
  req:any;
  username:string='';
  
  
  constructor(
    private apiService: ApiService,
    private responseService:ResponseStoreService,
    private route:Router
  ) {
    if(this.username === ''){
      this.route.navigateByUrl('/')
    }
  }

  ngOnInit() {
    this.apiService.getUser(this.username).subscribe((response)=>{
      this.responseService.setItem('status',response.status);
      this.responseService.setItem('body',response.body);
      console.log(this.responseService.getItem('status'));
    });

    this.apiService.getRepos(this.username);//.subscribe((response)=>{}

      /*const repoList = JSON.parse(JSON.stringify(response.body))
      for(let r of repoList){
        console.log(r);
      }*/
      
      //this.responseService.setItem('repos',JSON.stringify(response.body));

      
    //}}
    console.log(this.responseService.getItem('status'));
    const status = this.responseService.getItem('status');
    console.log(status)
    if(status === '200'){
        this.route.navigateByUrl('valid');
    }
    else{
        this.route.navigateByUrl('invalid-user')
    }

    
  }
}
