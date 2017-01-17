import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NotificationService } from './notification/notification.service';

import { AppComponent }  from './app.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NotificationComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ NotificationService ]
})
export class AppModule { }
