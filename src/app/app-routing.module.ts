import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { BookmarkRepositoriesComponent } from './components/bookmark-repositories/bookmark-repositories.component';

const routes: Routes = [
	{ path: '', component: RepositoriesComponent },
	{ path: 'repositories', component: RepositoriesComponent },
	{ path: 'bookmarks', component: BookmarkRepositoriesComponent },
	{ path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
