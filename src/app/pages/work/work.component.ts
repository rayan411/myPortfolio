import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit  {

  project = [
     {
    id:1,
    name: 'UJ Bridge',
    description: 'تطبيق جوال لمساعدة متعلمي علوم الحاسب على تنظيم مسارات التعلم وتطوير المهارات.',
    type: 'Mobile App',
    imageUrl: '', 

    github: 'https://github.com/username/uj-bridge',
  },
    
    {
      id: 2,
      name: 'منتج 2',
      description:'',
      type: 'Mobile App',
      imageUrl: '', 


    },
    {
      id: 3,
      name: 'منتج 3',
      description:" مشروع تطبيق هاتف" ,
      type: 'Mobile App',
      imageUrl: '', 
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}

