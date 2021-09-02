import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {

  keys;
  data = [];

  constructor(
    private dataService: DataServiceService) { }

  ngOnInit(): void {
    const form = this.dataService.getformData();
    this.keys =  Object.keys(form).forEach(k => {
      Object.keys(form[k]).forEach((k1) => {
        let obj = {};
        obj['key'] = k1;
        obj['value'] = form[k][k1];
        this.data.push(obj);
      });
    });
  }

}
