import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient
  ) { }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>('https://fakerapi.it/api/v1/books?_quantity=100&_locale=en_US');
  }
}
