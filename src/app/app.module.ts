import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WebStorageModule} from 'ngx-store';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PersonSimpleComponent } from './person-simple/person-simple.component'

import { StarwarsApiService } from './services/starwars-api/starwars-api.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PersonSimpleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    WebStorageModule
  ],
  providers: [StarwarsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
