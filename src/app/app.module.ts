import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { MainFormComponent } from './components/main-form/main-form.component';
import { ProjectDetailsComponent } from './components/main-form/sub-forms/project-details/project-details.component';
import { ProjectGalleryComponent } from './components/main-form/sub-forms/project-gallery/project-gallery.component';
import { ProjectCostsComponent } from './components/main-form/sub-forms/project-costs/project-costs.component';
import { ProjectIncludesComponent } from './components/main-form/sub-forms/project-includes/project-includes.component';
import { ProjectDatesComponent } from './components/main-form/sub-forms/project-dates/project-dates.component';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    ProjectDetailsComponent,
    ProjectGalleryComponent,
    ProjectCostsComponent,
    ProjectIncludesComponent,
    ProjectDatesComponent,
    SummaryPageComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
