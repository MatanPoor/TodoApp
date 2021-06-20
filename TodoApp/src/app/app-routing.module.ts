import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { ListsComponent } from './components/lists/lists.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'lists', component: ListsComponent},
  {path: 'items', component: ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
