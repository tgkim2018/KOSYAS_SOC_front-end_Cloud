import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { HttpModule } from '@angular/http';

import { routing }       from './configuration.routing';
import { Configuration } from './configuration.component';
import { Agent } from './components/agent/agent.component';
import { Log } from './components/log/log.component';
import { System } from './components/system/system.component';
import { User } from './components/user/user.component';

import { AgentService } from './components/agent/agent.service';
import { LogService } from './components/log/log.service';
import { SystemService } from './components/system/system.service';
import { UserService } from './components/user/user.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    HttpModule
  ],
  declarations: [
    Configuration,
    Agent,
    Log,
    System,
    User
  ],
  providers: [
    AgentService,
    LogService,
    SystemService,
    UserService
  ]
})
export class ConfigurationModule {}
