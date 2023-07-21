
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

  //num = interval(1000).subscribe(console.log);
  constructor() { }

  ngOnInit(): void {
    of(2,4,6,8).subscribe(item => console.log(item)) // --. No need to unsubscribe as 'of' does it automatically;

    console.log('from');
    from([20,15,10,51]).subscribe({
      next: item => console.log(`result item .. ${item}`),
      error: err => console.error(`error ocurred ${err}`),
      complete: () => console.log('complete'),
    });

    console.log('of');
    of([20,15,10,51]).subscribe({
      next: item => console.log(`result item .. ${item}`),
      error: err => console.error(`error ocurred ${err}`),
      complete: () => console.log('complete'),
    });

    of('i1', 'i2', 'i3').subscribe({
      next: item => console.log(`result item .. ${item}`),
      error: err => console.error(`error ocurred ${err}`),
      complete: () => console.log('complete'),
    });
  }

}
