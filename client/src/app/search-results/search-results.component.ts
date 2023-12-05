import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  @Input() results: any[] = [];
  @Input() query: string = '';
  @Input() searchResults: string[] = [];
}
