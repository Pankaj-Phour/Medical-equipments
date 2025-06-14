import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { };
  carouselData:any = [
    {name:'',image:'assets/images/assignments.jpg'},
    {name:'',image:'assets/images/garden.jpg'},
    {name:'',image:'assets/images/classroom_empty.jpg'},
    {name:'',image:'assets/images/classroom.jpg'},
    {name:'',image:'assets/images/study.jpg'},
    {name:'',image:'assets/images/work_check.jpg'},
    {name:'',image:'assets/images/office_meet.jpg'},
    {name:'',image:'assets/images/students.jpg'},
    {name:'',image:'assets/images/gatherings.jpg'},
    {name:'',image:'assets/images/funtime.jpg'},
    {name:'',image:'assets/images/director.jpg'}
  ]

  ngOnInit(): void {
  }

}
