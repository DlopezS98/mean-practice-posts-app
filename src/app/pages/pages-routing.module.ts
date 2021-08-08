import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from './pages.component';
import { MainComponent } from './main/main.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';

const routes: Routes = [
  { 
    path: 'main',
    component: PagesComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'posts/create', component: PostCreateComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
