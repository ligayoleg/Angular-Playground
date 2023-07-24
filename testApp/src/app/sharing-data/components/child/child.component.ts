import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{
  title = 'child';
  messageUsingService: string = '';

  @Input() messageFromParent: string = '';
  @Output() messageFromChild = new EventEmitter<string>();

  constructor(private sharedDataService: SharedDataService){}

  ngOnInit(): void {
    this.sharedDataService.getData()
    .subscribe({
      next: res =>  this.messageUsingService = res,
      error: err => console.log(err),
      complete: () =>  console.log(`Data complete`)
    });
  }

  sendMessageFromChild(value: string){
    this.messageFromChild.emit(value);
  }

  getMessageUsingService(){

  }
}
