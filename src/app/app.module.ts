import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CdkMenuModule} from '@angular/cdk-experimental/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {AppComponent} from './app.component';
import {MenuBarComponent} from './menu-bar/menu-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, MenuBarComponent],
  imports: [BrowserModule, CdkMenuModule, MatIconModule, MatButtonModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
