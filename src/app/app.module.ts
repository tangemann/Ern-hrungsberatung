import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material/material.module';
import { LayoutComponent } from './Components/layout/layout.component';
import { HomeComponent } from './Components/home/home.component';
import { RoutingModule } from './Modules/routing/routing.module';
import { HeaderComponent } from './Components/navigation/header/header.component';
import { SidenavListComponent } from './Components/navigation/sidenav-list/sidenav-list.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [	
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    ContactComponent,
    ServiceComponent
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
