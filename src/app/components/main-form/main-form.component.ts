import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from './../../services/data-service.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataServiceService
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      projectDetails: this.fb.group({
        organization: '',
        category: '',
        activity: '',
        title: '',
        minimumAge: '',
        maximumAge: '',
        overview: ''
      }),
      projectGallery: this.fb.group({
        projectName: ''
      }),
      projectCosts: this.fb.group({
        projectName: ''
      }),
      projectIncludes: this.fb.group({
        projectName: ''
      }),
      projectDates: this.fb.group({
        projectName: ''
      }),
    });
  }

  navigate(): void {
    this.dataService.setformData(this.form.getRawValue());
    console.log(this.dataService.getformData());
    this.router.navigate(['/summary'], {
      skipLocationChange: true
    });
  }

}
