import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  cards:any = [
    {name:'Valued Input',text:['At Zymes, we place a strong emphasis on speaking up. Whether that’s sharing your ideas to improve the company or relying a customer story; we are here to listen and respond.']},
    {name:'Talented Team',text:['Learning opportunities come from working with talented teammates and leaders. ','At Zymes, we strive to build high performing teams to achieve great things.']},
    {name:'Career Growth',text:['Being at a small company provides employees with the opportunity to learn and take part in initiatives beyond their regular job.  Growing your career at Zymes means having expanded responsibilities and new opportunities for growth.']},
  ];

  partners:any = [
    {name:'',image:'assets/partner1.webp'},
    {name:'',image:'assets/partner2.webp'},
    {name:'',image:'assets/partner3.webp'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
