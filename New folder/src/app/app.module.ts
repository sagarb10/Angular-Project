import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { EmplistComponent } from './emplist/emplist.component';

@NgModule({
  declarations: [
    AppComponent,
    DeptlistComponent,
    EmplistComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
