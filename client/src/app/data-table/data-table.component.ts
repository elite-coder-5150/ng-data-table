import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface SortConfig {
  key: string | null;
  direction: string | null;
}
@Component({
  selector: 'ng-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  data: any[] = [];
  loading: boolean = false;
  error: string = "";

  sortConfig = {
    key: 'userId',
    direction: 'asc'
  };

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.loading = true;

    axios.get('https://jsonplaceholder.typicodee.com/users')
      .then(response => {
        this.data = response.data;
        this.loading = false;
      })
      .catch(error => {
        console.error('Error fetching data: ' + error)

        this.error = 'error fetching data. please try again'
        this.loading = false;
      });
  }

  requestSort(key: string): any {
    this.sortConfig.direction = this.sortConfig.key === key && this.sortConfig.direction === 'asc' ? 'asc' : 'desc';
    this.sortConfig.key = key;
  }

  get sortedData(): any[] {
    let sortedData = [...this.data];
   
    if (this.sortConfig.key) {
      sortedData = sortedData.sort((a, b) => {
        if (a[this.sortConfig.key] && b[this.sortConfig.key]) {
          const comparison = a[this.sortConfig.key].localeCompare(b[this.sortConfig.key]);
          return this.sortConfig.direction === 'asc' ? comparison : -comparison;
        }
        return 0;
      });
    }
    
    return sortedData;
  }
}
