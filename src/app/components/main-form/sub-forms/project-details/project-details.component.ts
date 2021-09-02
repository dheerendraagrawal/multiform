import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { LookUpInterface } from '../../../../common/interfaces/LookUpInterface';
import { DataServiceService } from '../../../../services/data-service.service';
import { organizationList, categoryList, activityList } from '../../../../common/data/data';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  organizationList: LookUpInterface[] = organizationList;

  categoryList: LookUpInterface[] = categoryList;

  activityList: LookUpInterface[] = activityList;

  @Input() form: FormGroup;


  constructor() { }

  ngOnInit(): void {
  }

}
