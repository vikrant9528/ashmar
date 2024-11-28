import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { TodoitemsComponent } from './todoitems/todoitems.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
 


@NgModule({ 
  declarations: [
    AppComponent,
    TodoitemsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  entryComponents: [], 
  providers: [],
  bootstrap: [AppComponent]//which component is loaded first
})
export class AppModule { }
