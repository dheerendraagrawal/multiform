import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  formData;

  costs;
  includes;
  dates;

  constructor() { }

  public setformData(form): void {
    this.formData = form;
  }

  public setCost(cost): void {
    this.costs = cost;
  }
  public setInclude(inc): void {
    this.includes = inc;
  }
  public setDates(dat): void {
    this.dates = dat;
  }


  public getformData(): any {
    return this.formData ;
  }

  public getCost(): any {
    return this.costs;
  }
  public getInclude(): any {
    return this.includes;
  }
  public getDates(): any {
    return this.dates;
  }


}
