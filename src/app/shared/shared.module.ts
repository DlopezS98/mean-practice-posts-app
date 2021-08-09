import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialComponentsModule } from './material-components/material-components.module';
@NgModule({
  declarations: [
    ToolbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    MaterialComponentsModule
  ],
  exports: [
    ToolbarComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
