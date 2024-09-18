import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.getElementById('header');
    if (window.pageYOffset > 50) {
      header?.classList.add('bg-white', 'text-gray-700', 'shadow-md');
      header?.classList.remove('bg-transparent', 'text-white');
    } else {
      header?.classList.add('bg-transparent', 'text-white');
      header?.classList.remove('bg-white', 'text-gray-700', 'shadow-md');
    }
  }
}
