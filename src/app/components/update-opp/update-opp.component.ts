import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Opportunity } from '../../classes/opportunity';
import { OpportunitiesService } from '../../services/opportunities.service';

@Component({
  selector: 'app-update-opp',
  templateUrl: './update-opp.component.html',
  styleUrls: ['./update-opp.component.css']
})
export class UpdateOppComponent implements OnInit {

  @Input() opportunity: Opportunity;
  @Output() refresh: EventEmitter<any> = new EventEmitter();

  constructor(private opportunitiesService: OpportunitiesService) { }

  ngOnInit() {
  }

  update() {
    this.opportunitiesService.updateOpportunity(this.opportunity).subscribe((results: Opportunity) => {
      if (results.id != null || results.id != undefined) {
        this.refresh.emit(results);
      } else {
        alert("Error: " + results);
      }
    }, error => alert("Error: " + error.message));
    this.close();
  }

  close() {
    this.opportunity = null;
  }

}
