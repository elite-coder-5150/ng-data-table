import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'ng-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() itemsPerPage: number = 10;
  @Input() totalItems: number = 0;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  currentPage: number = 1;

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  onPageChange(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages && pageNumber !== this.currentPage) {
      this.currentPage = pageNumber;
      this.pageChanged.emit(this.currentPage);
    }
  }

  getPagesArray(): number[] {
    return Array.from({length: this.totalPages}, (_, index) => index + 1);
  }
}
