import { Component, Input } from '@angular/core';
import { SearchResults } from '../models/search-results';
@Component({
  selector: 'ng-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  @Input() results: any[] = [];
  @Input() query: string = '';
  @Input() totalItems: number = 0;
  // @Input() searchResults: SearchResults[] = {
  //   title: '',
  //   description: '',
  //   url: ''
  // }

  searchResults: SearchResults = {
    title: '',
    description: '',
    url: ''

  }

}
