import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { ListsComponent } from './components/lists/lists.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {ListDetailsComponent} from './components/list-details/list-details.component'
import { EditListGuard } from './core/guards/edit-list.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'lists', component: ListsComponent, canActivate: [EditListGuard]},
  {path: 'items', component: ItemsComponent},
  {path: 'lists/:id/edit', component: EditListComponent},
  {path: 'list-details', component:ListDetailsComponent },
  {path: 'list-details/:id', component: ListDetailsComponent},
  {path: '**', component:ErrorPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
