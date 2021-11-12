import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { CreateCatComponent } from './create-cat/create-cat.component';

const routes: Routes = [
  { path: 'cats', component: CoreComponent },
  { path: 'create', component: CreateCatComponent },
  { path: '', component: CoreComponent },
  { path: '**', component: CoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
