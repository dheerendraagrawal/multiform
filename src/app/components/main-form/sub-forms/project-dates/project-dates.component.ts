import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';
import { ProjectDatesInterface, LookUpInterface } from '../../../../common/interfaces/LookUpInterface';
import { projectList } from '../../../../common/data/data';

@Component({
  selector: 'app-project-dates',
  templateUrl: './project-dates.component.html',
  styleUrls: ['./project-dates.component.css']
})
export class ProjectDatesComponent implements OnInit {

  projectList: LookUpInterface[] = projectList;

  columnNames = ['date', 'action'];

  dataSource = new MatTableDataSource<ProjectDatesInterface>([{
    date: null
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
      date: null
    });
    this.dataSource.data = this.dataSource.data;
  }

  removeRow(index): void {
    this.dataSource = new MatTableDataSource(this.dataSource.data.filter((d, i) => i !== index));
  }

}
