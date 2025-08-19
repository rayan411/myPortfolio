import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  loading: boolean = true;
  title = 'myPortfolio';
  constructor(private router: Router) {}

  ngOnInit(): void {
    // لعرض اللودر عند بداية تشغيل الموقع
    setTimeout(() => {
      this.loading = false;
    }, 1500);

    // لو حبيت تشغل اللودر عند التنقل بين الصفحات
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loading = false;
      }
    });
  }
}
