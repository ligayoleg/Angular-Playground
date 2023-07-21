import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { ParentComponent } from './sharing-data/components/parent/parent.component';
import { ChildComponent } from './sharing-data/components/child/child.component';
import { OperatorsComponent } from './rxjs/components/operators/operators.component';
import { OfComponent } from './rxjs/components/of/of.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    OfComponent,
    OperatorsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
