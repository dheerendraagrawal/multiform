import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { projectList } from '../../../../common/data/data';
import { LookUpInterface, ProjectIncludesInterface } from '../../../../common/interfaces/LookUpInterface';

@Component({
  selector: 'app-project-includes',
  templateUrl: './project-includes.component.html',
  styleUrls: ['./project-includes.component.css']
})
export class ProjectIncludesComponent implements OnInit {

  projectList: LookUpInterface[] = projectList;

  columnNames = ['description', 'choice', 'action'];

  dataSource = new MatTableDataSource<ProjectIncludesInterface>([{
    description: '',
    choice: 1
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
      description: '',
      choice: 0
    });
    this.dataSource.data = this.dataSource.data;
  }

  removeRow(index): void {
    this.dataSource = new MatTableDataSource(this.dataSource.data.filter((d, i) => i !== index));
  }

}
