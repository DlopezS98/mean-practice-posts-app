import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from './pages.component';
import { MainComponent } from './main/main.component';

import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';

const routes: Routes = [
  { 
    path: 'main',
    component: PagesComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'posts/create', component: PostCreateComponent },
      // { path: 'posts/list', component: PostsListComponent }
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
