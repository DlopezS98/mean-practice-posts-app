import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesComponent } from './pages.component';
import { MainComponent } from './main/main.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { MaterialComponentsModule } from '../shared/material-components/material-components.module';
import { SharedModule } from '../shared/shared.module';
import { PostsListComponent } from './posts/posts-list/posts-list.component';

@NgModule({
  declarations: [
    PagesComponent,
    MainComponent,
    PostCreateComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    SharedModule
  ],
  exports: [
    PagesComponent,
    MainComponent,
    PostCreateComponent,
  ]
})
export class PagesModule { }
