import { Component, OnInit } from "@angular/core";



@Component({
  selector: 'app-books-home',
  templateUrl: '../templates/books-home.component.html',
  styleUrls: ['../styles/books-home.component.scss']
})
export class BooksHomeComponent implements OnInit{
  title = 'Books Home!';
  ngOnInit(): void {

  }
}
