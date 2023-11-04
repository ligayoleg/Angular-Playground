import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule,
    BooksRoutingModule
  ],
  providers: [],
  bootstrap: [BooksHomeComponent]
})
export class BooksModule { }
