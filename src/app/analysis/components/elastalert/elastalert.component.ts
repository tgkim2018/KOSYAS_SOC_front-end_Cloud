import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elastalert',
  templateUrl: './elastalert.component.html',
  styleUrls: ['./elastalert.component.scss']
})
export class ElastalertComponent implements OnInit {

  public select:string;
  public ruleData:string;
  public ruleName:string;

  constructor() { }

  ngOnInit() {
    this.select = "list";
    this.ruleData = "";
    this.ruleName = "";
  }

}
