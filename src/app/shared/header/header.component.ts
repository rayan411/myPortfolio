import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentSection: string = '';
  isMenuOpen: boolean = false; // <--- متغير جديد للتحكم بالقائمة

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionId = section.getAttribute('id');
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        this.currentSection = sectionId || '';
      }
    });
  }

  isActive(section: string): boolean {
    return this.currentSection === section;
  }

  // زر إغلاق القائمة عند اختيار رابط أو الضغط بالخارج (اختياري)
  closeMenu() {
    this.isMenuOpen = false;
  }
}
