
import { Component, OnInit } from '@angular/core';
import { from, interval, map, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  data: number[] = [];
  ngOnInit(): void {
    of(2,4, 5,6)
      .pipe(
        tap(item => console.log(`${item} - before map`)),
        map(item => item * 2),
        tap(item => console.log(item)),
        take(2) // take first two elements of Observable
      )
      .subscribe(item => this.data.push(item));
  }

}
