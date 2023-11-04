import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { ParentComponent } from './sharing-data/components/parent/parent.component';
import { ChildComponent } from './sharing-data/components/child/child.component';
import { OperatorsComponent } from './rxjs/components/operators/operators.component';
import { OfComponent } from './rxjs/components/of/of.component';
import { NavComponent } from './layout/nav/components/nav.component';
import { HomeComponent } from './layout/home/components/home.component';
import { OtherChildComponent } from './sharing-data/components/otherChild/other-child.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    OfComponent,
    OperatorsComponent,
    OtherChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
