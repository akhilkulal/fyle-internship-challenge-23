import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { DetailsComponent } from './Components/details/details.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { GitRepoComponent } from './Components/git-repo/git-repo.component';
import { UnavailUserComponent } from './Components/unavail-user/unavail-user.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DetailsComponent,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'valid',component:GitRepoComponent},
      {path:'invalid-user',component:UnavailUserComponent},
      {path:'',component:AppComponent}
    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
