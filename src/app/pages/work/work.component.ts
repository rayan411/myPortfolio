import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit  {
  project = [
    {
      id: 1,
      name:  'Uj Bridge',
      description:" هو تطبيق جوال يهدف إلى مساعدة المتعلمين في مجال علوم الحاسب من خلال توفير مسارات تعليمية منظمة، موارد مختارة، وتتبع التقدم. يعتمد التطبيق على تقنيات Flutter وFirebase لتقديم تجربة سلسة وشاملة للمستخدمين." ,
      imageUrl: 'https://i.ibb.co/w0T6Sq8/UJ-BRIDGE-logo.jpg', // يمكنك استبدال الرابط بصورة حقيقية
    },
    {
      id: 2,
      name: 'منتج 2',
      description:"UJ Bridge هو تطبيق جوال يهدف إلى مساعدة المتعلمين في مجال علوم الحاسب من خلال توفير مسارات تعليمية منظمة، موارد مختارة، وتتبع التقدم. يعتمد التطبيق على تقنيات Flutter وFirebase لتقديم تجربة سلسة وشاملة للمستخدمين.UJ Bridge هو تطبيق جوال يهدف إلى مساعدة المتعلمين في مجال علوم الحاسب من خلال توفير مسارات تعليمية منظمة، موارد مختارة، وتتبع التقدم. يعتمد التطبيق على تقنيات Flutter وFirebase لتقديم تجربة سلسة وشاملة للمستخدمين."





,
      imageUrl: 'https://via.placeholder.com/300', // يمكنك استبدال الرابط بصورة حقيقية
    },
    {
      id: 3,
      name: 'منتج 3',
      description:" مشروع تطبيق هاتف" ,

      imageUrl: 'https://via.placeholder.com/300', // يمكنك استبدال الرابط بصورة حقيقية
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}

