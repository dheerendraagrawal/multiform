import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { LookUpInterface } from '../../../../common/interfaces/LookUpInterface';

import { projectList } from '../../../../common/data/data';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.css']
})
export class ProjectGalleryComponent implements OnInit {

  projectList: LookUpInterface[] = projectList;
  imagesTemp: any[] = [];
  images: any[] = [];

  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event): void {
    if ( event?.target?.files ) {
      this.imagesTemp = event.target.files;
      console.log(this.imagesTemp);
    } else {
      this.imagesTemp = [];
    }
  }

  upload(): void {
    this.images = [];
    Object.values(this.imagesTemp).forEach((el) => {
      const reader = new FileReader();
      reader.onload = img => this.images.push(img.target.result);
      reader.readAsDataURL(el);
    });
  }

  removeImage(img): void {
    this.images = this.images.filter(im => im !== img);
  }

}
