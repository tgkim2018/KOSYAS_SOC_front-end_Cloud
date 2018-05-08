import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { CelebroOverview_full } from './base.interface';
import { CelebroOverview } from './base.interface';

/* Elasticsearch like Celebro */
export interface CelebroOverview_Data {
  node: number;
  indices: number;
  shards: number;
  docs: string;
  disk: string;
}

export interface CelebroOverview {
  error: string;
  data: CelebroOverview;
}

@Injectable()
export class BaseService {
  //baseURL = 'http://211.252.86.169:3001';
  //fullcelebroURL = 'http://211.252.86.169:3001/cats/overview';

  constructor(public http:HttpClient) { }

  //OverviewData: CelebroOverview;
  baseURL = 'http://211.252.86.169:3001';

  testURL  = "http://localhost:4200";
  testURL1 = "http://192.168.0.116:4200";
  testURL2 = "http://192.168.0.118:8088"
  fulltestURL2 = "http://192.168.0.118:8088/assets/test.json";
  fullcelebroURL = 'http://211.252.86.169:3001/cats/overview';


  /* **CELEBRO** connect Elasticsearch to get like 'elebro Data' */
  getCelebroOverview(){
    //return this.http.get("http://211.252.86.169:3001/cats/overview").map(res=>res.json());
    //return this.http.get<CelebroOverview>(this.baseURL.concat('/cats/overview'));
    //return this.http.get<CelebroOverview>(this.testURL2.concat('/assets/test.json'));
    //return this.http.get<CelebroOverview>(this.fulltestURL2);
    
    return this.http.get<CelebroOverview_full>(this.fullcelebroURL);
  }


  getBaseUrl() :string {
    return this.baseURL;
  };

  //getCelebroOverview(){
 //   return this.http.get<CelebroOverview>(this.fullcelebroURL);
  //}
}
