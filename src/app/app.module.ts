import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { RepositoryService } from './services/repository.service';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AppComponent } from './app.component';

import { RepositoriesComponent } from './components/repositories/repositories.component';
import { AppRoutingModule } from './app-routing.module';
import { BookmarkRepositoriesComponent } from './components/bookmark-repositories/bookmark-repositories.component';



@NgModule({
  declarations: [
    AppComponent,

    RepositoriesComponent,

        BookmarkRepositoriesComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    StorageServiceModule,
    AppRoutingModule
  ],
  providers: [RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
