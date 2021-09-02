import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {

  keys;
  formData;

  constructor(
    private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.keys =  Object.keys(this.dataService.getformData());
    this.formData = this.dataService.getformData();
  }

}
