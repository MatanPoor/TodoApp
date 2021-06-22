import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListsComponent } from './components/lists/lists.component';
import { ItemsComponent } from './components/items/items.component';
import { InfoComponent } from './components/info/info.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditListComponent } from './components/edit-list/edit-list.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorsPreseneterComponent } from './components/errors-preseneter/errors-preseneter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListsComponent,
    ItemsComponent,
    InfoComponent,
    NavBarComponent,
    EditListComponent,
    ErrorsPreseneterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
  
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
