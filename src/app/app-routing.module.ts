import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePage } from './home/home.page';
import { CreateVocabPage } from './create-vocab/create-vocab.page';
import { EditVocabPage } from './edit-vocab/edit-vocab.page';
import { EditVocabResolver } from './edit-vocab/edit-vocab.resolver';
import { DetailPage } from './detail/detail.page';
import { DetailResolver } from './detail/detail.resolver';


const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'create-vocab', component: CreateVocabPage },
  { path: 'edits/:id', component: EditVocabPage, resolve: { data: EditVocabResolver } },
  // { path: 'edit', loadChildren: './edit/edit.module#/EditPageModule' },
  { path: 'search-vocab', loadChildren: './search-vocab/search-vocab.module#SearchVocabPageModule' },
  { path: 'details/:id', component: DetailPage, resolve: { data: DetailResolver } },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
