import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListsComponent } from './components/lists/lists.component';
import { ItemsComponent } from './components/items/items.component';
import { InfoComponent } from './components/info/info.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListsComponent,
    ItemsComponent,
    InfoComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
