import { Component } from '@angular/core';
import { Certificate } from 'src/app/models/certificate.model';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  certificates: Certificate[] = [
    {
      title: 'Data Analysis Professional Certificate',
      issuer: 'Coursera - Google',
      date: 'June 2024',
      image: 'assets/certificates/data-analysis.png',
      url: 'https://coursera.org/verify/example',
      description: 'A comprehensive certificate in data analysis covering SQL, data visualization, and more.'
    },
    {
      title: 'Agile Foundations',
      issuer: 'LinkedIn Learning',
      date: 'March 2024',
      image: 'assets/certificates/agile.png',
      url: 'https://linkedin.com/learning/certificates/example',
    },
    {
      title: 'Junior Data Scientist',
      issuer: 'INE',
      date: 'May 2024',
      image: 'assets/certificates/ine-junior.png',
    },
    // ... add more as needed
  ];
}
