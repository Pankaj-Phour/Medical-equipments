import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {

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
  ];
  intershipPrograms:any = [
    {heading:'Clinical Psychology',text:'Dive deep into the world of mental health by working alongside experienced clinical psychologists. You will have the opportunity to:',points:[
      {text:'Conduct case history'},
      {text:'Perform Mental Status Examinations (MSE)'},
      {text:'Conduct psychological assessments'},
      {text:'Participate in therapy sessions'},
      {text:'Engage in role-play sessions'},
      {text:'Present case studies'},
      {text:'Develop treatment plans'},
      {text:'Gain clinical exposure'},
      {text:'Understand diagnostic criteria and mental health disorders'},
      {text:'Conduct research'}
    ]},
    {heading:'Counseling Psychology',text:'Enhance your skills in providing emotional support and guidance. This program includes:',points:[
      {text:'Conduct case history'},
      {text:'Perform Mental Status Examinations (MSE)'},
      {text:'Facilitate individual and group counseling sessions'},
      {text:'Implement crisis intervention strategies'},
      {text:'Engage in role-play sessions'},
      {text:'Present case studies'},
      {text:'Develop techniques for building therapeutic relationships'},
      {text:'Attend workshops on various counseling approaches'},
      {text:'Conduct research'}
    ]},
    {heading:'De-addiction Counseling',text:'Join the fight against substance abuse by gaining expertise in:',points:[
      {text:'De-addiction counseling techniques'},
      {text:'Participation in rehabilitation programs'},
      {text:'Learn relapse prevention strategies'},
      {text:'Facilitate support groups'},
      {text:'Clinical exposure in rehabilitation setup'},
      {text:'Additional exposure as needed'}
    ]},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
