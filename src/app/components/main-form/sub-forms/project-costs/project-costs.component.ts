import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { LookUpInterface, ProjectCostInterface } from '../../../../common/interfaces/LookUpInterface';
import { projectList } from '../../../../common/data/data';

@Component({
  selector: 'app-project-costs',
  templateUrl: './project-costs.component.html',
  styleUrls: ['./project-costs.component.css']
})
export class ProjectCostsComponent implements OnInit {

  projectList: LookUpInterface[] = projectList;

  columnNames = ['duration', 'cost', 'action'];

  dataSource = new MatTableDataSource<ProjectCostInterface>([{
    duration: null,
    cost: null
  }]);

  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @method addRow
   */
  addRow(): void {
    this.dataSource.data.push({
      duration: null,
      cost: null
    });
    this.dataSource.data = this.dataSource.data;
  }

  removeRow(index): void {
    this.dataSource = new MatTableDataSource(this.dataSource.data.filter((d, i) => i !== index));
  }

}
