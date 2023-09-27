import { Component, OnInit } from "@angular/core";



@Component({
  selector: 'app-books-search',
  templateUrl: '../templates/books-search.component.html',
  styleUrls: ['../styles/books-search.component.scss']
})
export class BooksSearchComponent implements OnInit{
  title = 'Books Search!';
  ngOnInit(): void {

  }
}
