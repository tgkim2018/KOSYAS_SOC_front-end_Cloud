import { Component, OnInit } from '@angular/core';
import { AgentService } from './agent.service';
import { WazuhAgentList } from './agent.service';
import { WazuhAgentList_Data } from './agent.service';
import { WazuhAgentList_Item } from './agent.service';
import { WazuhAgentList_Os } from './agent.service';
import { WazuhManagerStatus } from './agent.service';

@Component({
  selector: 'agent',
  templateUrl: './agent.html',
})

export class Agent {

  constructor(private agentService:AgentService) {
  }

  ngOnInit() {
    //this.getWazuhAgentList();
  }

  fullWazuhagentlists:WazuhAgentList;
  wazuhagentlists:WazuhAgentList_Item [];
  wazuhagentlist:WazuhAgentList_Item;
  selectWazuhagent:WazuhAgentList_Item;

  getWazuhAgentList(){
    //this.agentService.getWazuhagentList("/wazuh/agents").subscribe(fullWazuhagentlists => {
    //  this.wazuhagentlists = fullWazuhagentlists.data.items
    //});
    //this.fullWazuhagentlists = this.agentService.getWazuhagentList("/wazuh/agents");
    //alert(this.fullWazuhagentlists.error);
    //this.wazuhagentlists = this.fullWazuhagentlists.data.items;
  }
}
