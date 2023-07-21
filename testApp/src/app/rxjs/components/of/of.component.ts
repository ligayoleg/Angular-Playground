
import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {

  ofArr$ = of('Item 1', 'Item 2'); // --> [Item 1, Item 2]

  fromArr$ = from(['Item1', 'Item2']); // --> Item1 Item2

  itemsArr = ['Item 1', 'Item 2', 'Item 3'];
  ofItemsArr = of(...this.itemsArr); //--> Item 1 Item 2 Item 3

  num = interval(1000).subscribe(console.log);
  constructor() { }

  ngOnInit(): void {
  }

}
