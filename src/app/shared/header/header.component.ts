import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentSection: string = 'home'; // البداية

  isMenuOpen: boolean = false;

  // عند التمرير، راقب الأقسام وقيمتها من الأعلى
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sectionIds = ['home', 'work', 'certifications', 'about', 'contact'];
    let found = false;
    for (let i = 0; i < sectionIds.length; i++) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        // إذا وصل أعلى القسم لنقطة معينة من الشاشة (مثلا 100 بكسل من الأعلى)
        if (rect.top <= 100 && rect.bottom > 100) {
          this.currentSection = sectionIds[i];
          found = true;
          break;
        }
      }
    }
    if (!found) {
      this.currentSection = 'home'; // default إذا ما فيه قسم ظاهر
    }
  }

  isActive(section: string): boolean {
    return this.currentSection === section;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
