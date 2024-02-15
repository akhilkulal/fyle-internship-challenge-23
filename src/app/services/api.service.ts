import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';
import { ResponseStoreService } from './response-store.service';
import { Repo } from '../repo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private responseService: ResponseStoreService
  ) { 
    this.responseService.setItem('token',"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");
  }

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`,{observe:'response',headers:new HttpHeaders({
      'Authorization': 'Bearer'+this.responseService.getItem('token')
    })});
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
  getRepos(githubUsername:string){
    this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos`,{observe:'response'}).subscribe((response)=>{
      const re = JSON.parse(JSON.stringify(response.body));
      //console.log(re[4]);
      const repoList = []
      for(let i in re){
        //console.log(re[i].name, re[i].description, re[i].languages_url)
        this.getLanguage(re[i].languages_url).subscribe((resp)=>{
          this.responseService.setItem('languages'+i,Object.keys(JSON.parse(JSON.stringify(resp.body))));
        })
        repoList.push({
          name:re[i].name,
          desc:re[i].description,
          languages:JSON.parse(this.responseService.getItem('languages'+i))
        });
        
      }
      this.responseService.setItem('reposList',repoList);
//      this.responseService.setItem('repos',repoList);
    })

  }

  getLanguage(url:string){
    return this.httpClient.get(url,{observe:'response'});
  }
}
