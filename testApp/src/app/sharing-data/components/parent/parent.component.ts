import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  title = 'parent';
  messageFromChild: string = '';
  ngOnInit(): void {

  }

  receiveMessageFromChild(message: string){
    this.messageFromChild = message;
  }
}
