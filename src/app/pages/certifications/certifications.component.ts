import { Component } from '@angular/core';
import { CERTIFICATES } from '../../data/certificates-data';
import { Certificate } from '../../models/certificate.model';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {

certificates: Certificate[] = [];
  filtered: Certificate[] = [];
  query = '';
  issuer = 'all';
  selected: Certificate | null = null;

  issuers: string[] = [];

  ngOnInit() {
    // تحميل وترتيب من الأحدث إلى الأقدم
    this.certificates = [...CERTIFICATES].sort((a, b) => (b.date > a.date ? 1 : -1));
    this.issuers = ['all', ...Array.from(new Set(this.certificates.map(c => c.issuer)))];
    this.applyFilters();
  }

  applyFilters() {
    const q = this.query.trim().toLowerCase();
    this.filtered = this.certificates.filter(c => {
      const matchQuery =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.issuer.toLowerCase().includes(q) ||
        (c.tags?.some(t => t.toLowerCase().includes(q)) ?? false);

      const matchIssuer = this.issuer === 'all' || c.issuer === this.issuer;
      return matchQuery && matchIssuer;
    });
  this.filteredSoftware = this.filtered.filter(c => this.softwareIds.has(c.id));
  this.filteredData     = this.filtered.filter(c => this.dataIds.has(c.id));
  }

  resetFilters() {
    this.query = '';
    this.issuer = 'all';
    this.applyFilters();
  }

  openModal(cert: Certificate) {
    this.selected = cert;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selected = null;
    document.body.style.overflow = '';
  }

  trackById(_: number, item: Certificate) {
    return item.id;
  }
  
// === CATGORY BY IDs ===
private softwareIds = new Set<string>([
  'coursera-programming-js',
  'coursera-intro-mobile-dev',
  'coursera-software-impl-testing',
  'coursera-intro-software-testing',
  'coursera-intro-automated-analysis',
  'coursera-agile-software-dev'
]);

private dataIds = new Set<string>([
  'coursera-data-driven-process',
  'coursera-data-analysis-visualization',
  'coursera-applied-analytics-decision-making',
  'ine-jr-data-scientist'
]);

filteredSoftware: Certificate[] = [];
filteredData: Certificate[] = [];

}

