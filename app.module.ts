import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DeptComponent } from './dept/dept.component';
import { LibComponent } from './lib/lib.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DeptComponent,
    LibComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(
      [
        {path:"url1",component:AboutComponent},
        {path:"url2",component:DeptComponent},
        {path:"url3",component:LibComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
