import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { RoutingModule } from './modules/routing/routing.module';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';

@NgModule({
  declarations: [	
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    ContactComponent,
    ServiceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
