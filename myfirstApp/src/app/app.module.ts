import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ValidatorService} from '../app/validator.service';
import { RouterModule } from "@angular/router";
import { HomePage } from './home/home.page';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ 
    
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
     IonicModule.forRoot(), 
    AppRoutingModule, 
    BrowserAnimationsModule,
  
  
  ],
  providers: [
    ValidatorService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
