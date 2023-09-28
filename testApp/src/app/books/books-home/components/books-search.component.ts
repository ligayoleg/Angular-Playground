import { Component, OnInit } from "@angular/core";
import { BooksService } from "../../services/books.service";
import { Book } from "../../models/book";



@Component({
  selector: 'app-books-search',
  templateUrl: '../templates/books-search.component.html',
  styleUrls: ['../styles/books-search.component.scss']
})
export class BooksSearchComponent implements OnInit{
  title = 'Books Search!';
  books: Book[] = [];
  ngOnInit(): void {

  }

  constructor(
    private _booksService: BooksService
  ){

  }

  loadBooks(){
    this._booksService.getBooks().subscribe(
      b => this.books = b
    );
  }
}
