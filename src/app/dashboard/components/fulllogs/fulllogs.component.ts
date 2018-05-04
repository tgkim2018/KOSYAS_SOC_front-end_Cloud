import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fulllogs',
  templateUrl: './fulllogs.component.html',
  styleUrls: ['./fulllogs.component.scss']
})
export class FulllogsComponent implements OnInit {

  timestamp = "2017/12/21 18:23:17.124";
  index = "wazuh-index-20171221";
  source = "_src: wazuh, source: { ip: 192.168.0.111, port: 8021, protocol: http, method: post}, type: wazuh-test";
  constructor() { }

  ngOnInit() {
  }

}
