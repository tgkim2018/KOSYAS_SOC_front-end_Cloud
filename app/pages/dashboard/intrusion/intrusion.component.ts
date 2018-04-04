import {Component} from '@angular/core';
import {IntrusionService} from './intrusion.service';
//import * as Chart from 'chart.js';

@Component({
  selector: 'intrusion',
  templateUrl: './intrusion.html',
  styleUrls: ['./intrusion.scss']
})

// TODO: move chart.js to it's own component
export class Intrusion {
  data:any;

  constructor(private _intrusionService:IntrusionService) {
  }

  ngOnInit() {
    this.data = this._intrusionService.getAll();
  }

  getResponsive(padding, offset) {
    return this._intrusionService.getResponsive(padding, offset);
  }
}
