import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';
import { from } from 'rxjs';
import {Repository} from '../../models/Repository'

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repos: Repository[];
  repoName: string;
  bookmarksRepos: Repository[]=[];
 

  constructor(private service: RepositoryService) { 
    
  }
  findRepo() {
    this.service.updateRepo(this.repoName);
    this.service.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos.items.map((repo) => {
        
        let repIsBookmark = this.bookmarksRepos.find(ob => ob.id === repo.id);
      if (repIsBookmark) {
        repo.isBookmark =  true;
        repo.bookmark = "bookmarked";
      }
      else{
        repo.isBookmark =  false;
        repo.bookmark = "bookmark";}
      return repo;
    });
      
    });
  }

bookmarkRepo(repo){
  if(!repo.isBookmark)
    {
      const index: number = this.bookmarksRepos.indexOf(repo);
      if (index == -1) {
      this.bookmarksRepos.push(repo);
      sessionStorage.setItem('repositories', JSON.stringify(this.bookmarksRepos));
      repo.bookmark ="bookmarked";
    }
    }
  else 
    {
      const index: number = this.bookmarksRepos.indexOf(repo);
      if (index !== -1) {
          this.bookmarksRepos.splice(index, 1);}
          sessionStorage.setItem('repositories', JSON.stringify(this.bookmarksRepos));
      repo.bookmark ="bookmark";
    }
    repo.isBookmark = !repo.isBookmark       
}

  ngOnInit() {
    this.loadBookmarkRepos();
      this.findRepo();
    
  }

  loadBookmarkRepos(): void {
    let bookmarks = sessionStorage.getItem('repositories');
    if(bookmarks)
    {
      this.bookmarksRepos = JSON.parse(bookmarks).map((bookRepo) => {
      bookRepo.bookmark = "bookmarked";
      bookRepo.isBookmark =  true;
        return bookRepo;
    });

  }
    else{
      sessionStorage.setItem('repositories', '');
    }
  }
  

}
