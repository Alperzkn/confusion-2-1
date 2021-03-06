import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from '@angular/material';
import {MdToolbarModule, MdButtonModule, MdCheckboxModule,MdListModule,MdGridListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    MdToolbarModule,
    MdButtonModule,
    MdCheckboxModule,
    MdListModule,
    MdGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
