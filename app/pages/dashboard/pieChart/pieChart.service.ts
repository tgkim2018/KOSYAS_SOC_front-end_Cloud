import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'dashboard.cpu',
        stats: '4 core',
        icon: 'cpu',
      }, {
        color: pieColor,
        description: 'dashboard.memory',
        stats: 'total 16 GB',
        icon: 'memory',
      }, {
        color: pieColor,
        description: 'dashboard.disk',
        stats: '178 GB',
        icon: 'disk',
      }, {
        color: pieColor,
        description: 'dashboard.network',
        stats: '15,987 bps',
        icon: 'network',
      }
    ];
  }
}
