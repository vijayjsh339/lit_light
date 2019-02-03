import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FileUploadModule} from 'ng2-file-upload';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {ProgressBarModule} from 'angular-progress-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateProfileComponent } from "src/app/profile/profile.component";

@NgModule({
  declarations: [
    AppComponent,CreateProfileComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FileUploadModule,HttpClientModule,ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
