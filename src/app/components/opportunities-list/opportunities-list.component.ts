import { Component, OnInit } from '@angular/core';
import { OpportunitiesService } from './../../services/opportunities.service';
import { Opportunity } from './../../classes/opportunity';
import { Paging } from 'src/app/classes/paging';


@Component({
  selector: 'app-opportunities-list',
  templateUrl: './opportunities-list.component.html',
  styleUrls: ['./opportunities-list.component.css']
})
export class OpportunitiesListComponent implements OnInit {
  opportunities: Opportunity[];
  paging: Paging;
  clickedOpp: Opportunity;
  loading: Boolean;

  constructor(private opportunitiesService: OpportunitiesService) { }

  fetchOpportunities() {
    this.loading = true;
    this.opportunitiesService.getAll(this.paging).subscribe((results: any) => {
      if (results.data != null) {
        if (this.opportunities === undefined)
          this.opportunities = results.data;
        else
          this.opportunities = this.opportunities.concat(results.data);
        Object.assign(this.paging, results.paging);
      } else {
        alert('No more data.');
      }
      this.loading = false;
    });
  }

  updateOppModal(opportunity: Opportunity) {
    this.opportunitiesService.getOne(opportunity.id).subscribe((results: any) => this.clickedOpp = <Opportunity> results);
  }

  refreshUpdatedOpp(opportunity) {
    this.loading = true;
    const oppKey = Object.keys(this.opportunities).find(key => this.opportunities[key].id === opportunity.id);
    this.opportunities[oppKey] = opportunity;
    
    setTimeout(() => alert('Updated!'), 1000);
  }

  ngOnInit() {
    this.paging = new Paging();
    this.loading = true;
    this.fetchOpportunities();
  }

}
