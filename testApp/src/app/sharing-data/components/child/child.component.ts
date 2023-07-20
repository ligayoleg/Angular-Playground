import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{
  title = 'child';

  @Input() messageFromParent: string = '';
  @Output() messageFromChild = new EventEmitter<string>();

  ngOnInit(): void {

  }

  sendMessageFromChild(value: string){
    this.messageFromChild.emit(value);
  }
}
