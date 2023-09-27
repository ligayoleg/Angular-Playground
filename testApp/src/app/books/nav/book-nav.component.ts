import { Component, OnInit } from "@angular/core";



@Component({
  selector: 'app-books-nav',
  templateUrl: './books-nav.component.html',
  styleUrls: ['./books-nav.component.scss']
})
export class BooksNavComponent implements OnInit{
  title = 'Books NAV!';
  ngOnInit(): void {

  }
}
