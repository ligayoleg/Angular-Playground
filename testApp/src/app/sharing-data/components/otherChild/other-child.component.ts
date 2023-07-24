import { Component, OnInit } from "@angular/core"
import { SharedDataService } from "../../services/shared-data.service";


@Component({
  selector: 'app-other-child',
  templateUrl: './other-child.component.html',
  styleUrls: ['./other-child.component.scss']
})

export class OtherChildComponent implements OnInit{
  message: string = '';
  constructor(
    private sharedDataService : SharedDataService
  ){

  }
  ngOnInit(): void {

  }

  sendData(msg: string){
    this.sharedDataService.setData(msg);
  }
}
