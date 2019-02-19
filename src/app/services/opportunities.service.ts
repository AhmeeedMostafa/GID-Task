import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paging } from './../classes/paging';
import { Opportunity } from '../classes/opportunity';

@Injectable({
  providedIn: 'root'
})
export class OpportunitiesService {
  private mainUrl = 'http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities';
  private accessToken = 'dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c';

  constructor(private http: HttpClient) {}

  getAll(paging: Paging) {
    var pageNo = paging.next();

    const url = this.mainUrl + `?access_token=${this.accessToken}&page=${pageNo}&per_page=11`;
    return this.http.get(url);
  }

  getOne(id: number) {
    const url = this.mainUrl + `/${id}?access_token=${this.accessToken}`;
    return this.http.get(url);
  }

  updateOpportunity(opportunity: Opportunity) {
    const headers = {
      headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
    const url = `${this.mainUrl}/${opportunity.id}`;
    const data = `access_token=${this.accessToken}&opportunity[title]=${opportunity.title}&opportunity[description]=${opportunity.description}`;
    return this.http.patch(url, data, headers);
  }
}
