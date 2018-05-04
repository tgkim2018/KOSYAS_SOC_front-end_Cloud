import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing }   from './userinfo.routes';
import { UserinfoComponent } from './userinfo.component';
import { UserinfoService } from './userinfo.service';
import { InformationComponent } from './components/information/information.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [UserinfoComponent, InformationComponent],
  providers: [UserinfoService]
})
export class UserinfoModule { }
