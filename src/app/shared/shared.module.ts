import { NgModule } from '@angular/core';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    PageNotFoundComponent
  ],
  imports: [
  ],
  exports: [
    ToolbarComponent
  ]
})
export class SharedModule { }
