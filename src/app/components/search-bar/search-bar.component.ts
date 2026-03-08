import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  username = '';
  @Output() search = new EventEmitter<string>();

  onSearch() {
    if (this.username.trim()) {
      this.search.emit(this.username.trim());
    }
  }
}
