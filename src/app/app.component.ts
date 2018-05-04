import { Component, OnInit } from '@angular/core';
import { BaseService } from './base.service';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent { 
  constructor(private baseService:BaseService) { }
  

  ngOnInit() {
    this.getCelebroOverview();
  }

  getCelebroOverview () {
    this.baseService.getCelebroOverview();
  }
}
