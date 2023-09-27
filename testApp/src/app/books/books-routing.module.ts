import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksHomeComponent } from './books-home/components/books-home.component';



const bookRoutes: Routes = [
  {path: '', component: BooksHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
