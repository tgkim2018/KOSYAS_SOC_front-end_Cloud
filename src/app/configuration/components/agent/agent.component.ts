import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConfigurationService } from '../../configuration.service';
import { WazuhManagerStatus, WazuhManagerStatus_Data } from '../../agent.data';
import { WazuhAgentList, WazuhAgentList_Item } from '../../agent.data';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {

  managerStatusData:WazuhManagerStatus_Data;
  managerStatus:WazuhManagerStatus;

  wazuhAgentList:WazuhAgentList;
  wazuhAgentListItems:WazuhAgentList_Item[];
  wazuhAgentListItem:WazuhAgentList_Item;
  wazuhAgentListCount:number;

  constructor(private configurationService:ConfigurationService) { }
  //constructor() { }

  ngOnInit() {
    this.getManagerStatus();
    this.getAgentList();
  }

  getManagerStatus() {
    this.managerStatus = this.configurationService.getManangerStatus();
    this.managerStatusData = this.managerStatus.data;
  }

  getAgentList() {
    this.wazuhAgentList = this.configurationService.getAgentList();
    this.wazuhAgentListItems = this.wazuhAgentList.data.items;
    this.wazuhAgentListCount = this.wazuhAgentList.data.totalItems;
  }
}
