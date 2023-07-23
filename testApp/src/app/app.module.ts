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
import { NavComponent } from './layout/nav/components/nav.component';
import { HomeComponent } from './layout/home/components/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
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
