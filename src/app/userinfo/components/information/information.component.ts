import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  ID = "tgkim@kosyas.com";
  Name = "tgkim";
  Company = "KOSYAS";
  password    = "";
  repassword  = "";
  Phone       = "83)10-1234-5678";
  Country     = "Republic of KOREA";

  constructor() { }

  ngOnInit() {
  }

}
