import { Component, OnInit } from "@angular/core";
import { BooksService } from "../../services/books.service";
import { Book } from "../../models/book";
import { BookResponse } from "../../models/bookResponse";
import { map } from "rxjs";



@Component({
  selector: 'app-books-search',
  templateUrl: '../templates/books-search.component.html',
  styleUrls: ['../styles/books-search.component.scss']
})
export class BooksSearchComponent implements OnInit{
  title = 'Books Search!';
  books: Book[] = [];
  ngOnInit(): void {
    this.loadBooks();
  }

  ngOnDestroy(): void{

  }

  constructor(
    private _booksService: BooksService
  ){

  }

  loadBooks(){
    this._booksService.getBooks()
    .subscribe(
      bookResponse => this.books = bookResponse.data
    );
  }


  loadBooksNonGenre(){
    this._booksService.getBooks()
    .pipe(
      map((res: BookResponse) => {
        res.data.map(book => book.genre === "Non");
      })
    )
    .subscribe(
      bookResponse=> console.log(bookResponse)
    );
  }
}
