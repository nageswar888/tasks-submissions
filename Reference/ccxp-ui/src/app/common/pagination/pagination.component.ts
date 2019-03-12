
import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass'],
  providers:[FormBuilder]
})
export class PaginationComponent{
  @Input() page: number;
  @Input() count: number;
  @Input() perPage: number;
  @Input() dataLoaded: any;
  @Input() pagesToShow: number;

  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();

  constructor() { }

  /**
   * To get minimum number of records
   * @returns {number}
   */
  getMin(): number {
    return ((this.perPage * this.page) - this.perPage) + 1;
  }

  /**
   * To get maximum page count
   * @returns {number}
   */
  getMax(): number {
    let max = this.perPage * this.page;
    if (max > this.count) {
      max = this.count;
    }
    return max;
  }

  /**
   *  To get current page
   * @param {number} n
   */
  onPage(n: number): void {
    this.goPage.emit(n);
  }

  /**
   *  To get previous page
   */
  onPrev(): void {
    this.goPrev.emit();
  }

  /**
   *  To get next page
   * @param {boolean} next
   */
  onNext(): void {
    this.goNext.emit();
  }

  /**
   * To get total pages count
   * @returns {number}
   */
  totalPages(): number {
    return Math.ceil(this.count / this.perPage) || 0;
  }

  /**
   *  To get last page value
   * @returns {boolean}
   */
  lastPage(): boolean {
    return this.perPage * this.page > this.count;
  }

  /**
   *  To show number of pages in view
   * @returns {number[]}
   */
  getPages(): number[] {
    const c = Math.ceil(this.count / this.perPage);
    const p = this.page || 1;
    const pagesToShow = this.pagesToShow || 9;
    const pages: number[] = [];
    pages.push(p);
    const times = pagesToShow - 1;
    for (let i = 0; i < times; i++) {
      if (pages.length < pagesToShow) {
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < pagesToShow) {
        if (Math.max.apply(null, pages) < c) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  }



}
