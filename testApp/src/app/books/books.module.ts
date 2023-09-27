import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { BooksRoutingModule } from './books-routing.module';

//Components
import { BooksHomeComponent } from './books-home/components/books-home.component';
import { BooksNavComponent } from './nav/book-nav.component';
import { BooksSearchComponent } from './books-home/components/books-search.component';



@NgModule({
  declarations: [
   BooksHomeComponent,
   BooksNavComponent,
   BooksSearchComponent
  ],
  imports: [
    // BrowserModule,
    BooksRoutingModule
  ],
  providers: [],
  bootstrap: [BooksHomeComponent]
})
export class BooksModule { }
