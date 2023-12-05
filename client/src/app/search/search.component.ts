import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SearchService } from '../services/search.service';
@Component({
  selector: 'ng-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private searchSubjector = new Subject<string>();
  search: string = '';
  query: string = '';
  searchResults: string[] = [];
  constructor(private searchService: SearchService) { }

  // TODO: fix this code because the code the chatgpt is not working.
  ngOnInit(): void {
      this.searchSubjector
        .pipe(
          debounceTime(300),
          distinctUntilChanged(),
          switchMap((query: string) => this.searchService.search(query)))
          .subscribe((results => {
            console.log(results);
          }))
  }

  onSearch(query: string) {
    this.searchSubjector.next(query);
  }
}
