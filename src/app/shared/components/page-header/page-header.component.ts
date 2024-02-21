import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {
  @Input('page-title') pageTitle: string | undefined;
  @Input('show-search') showSearch: boolean = true;
  @Input('search-text') searchText: string | undefined;
  @Output() search = new EventEmitter();

  onSearch(event: any) {
    this.search.emit(event.target.value);
  }
}