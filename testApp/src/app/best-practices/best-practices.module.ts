import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { BestPracticesRoutingModule } from './best-practices-routing.module';
//Components
import { BestPracticesHomeComponent } from './best-practices-home/components/best-practices-home.components';



@NgModule({
  declarations: [
    BestPracticesHomeComponent,

  ],
  imports: [
    // BrowserModule,
    BestPracticesRoutingModule
  ],
  providers: [],
  bootstrap: [BestPracticesHomeComponent]
})
export class BestPracticesModule { }
