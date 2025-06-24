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
  ];

  universities:any = [
    {name:'Amity University Noida'},
    {name:'Amity University Gurugram'},
    {name:'Christ University'},
    {name:'Appejay University'},
    {name:'Sushant University'},
    {name:'Lovely Professional University'},
    {name:'Ignou University'},
    {name:'Symbiosis University'},
    {name:'Manipal University'},
    {name:'Delhi University'},
    {name:'Gurugram University'},
    {name:'OP Jindal University'},
    {name:'Maharishi Dayanand University'}
  ];

  testimonials:any = [
    {name:'Student 1',university:'University 1',video:'assets/videos/student1.mp4'},
    {name:'Student 2',university:'University 2',video:'assets/videos/student2.mp4'},
    {name:'Student 3',university:'University 3',video:'assets/videos/student3.mp4'},
    {name:'Student 4',university:'University 4',video:'assets/videos/student4.mp4'},
  ];

  interns:any = [
    {image:'assets/images/interns/art_therapy.jpg',text:'Art Therapy'},
    {image:'assets/images/interns/art_therapy2.jpg',text:'Art Therapy'},
    {image:'assets/images/interns/bonding_exercise.jpg',text:'Bonding Exercise'},
    {image:'assets/images/interns/guided_meditation.jpg',text:'Guided Meditation'},
    {image:'assets/images/interns/mindfullness.jpg',text:'Mindfulness'},
    {image:'assets/images/interns/role_play.jpg',text:"Role Play"},
    {image:'assets/images/interns/workshop.jpg',text:'Awareness Program on Drug abuse and its prevention'},
    {image:'assets/images/interns/workshop2.jpg',text:'Awareness Program on Drug abuse and its prevention'},
    {image:'assets/images/interns/intern1.jpg',text:'Psychodiagnostic Test'},
    {image:'assets/images/interns/intern2.jpg'},
    {image:'assets/images/interns/intern3.jpg'},
    {image:'assets/images/interns/intern4.jpg'},
    {image:'assets/images/interns/intern5.jpg',text:'Clinical Discussion'},
    {image:'assets/images/interns/intern6.jpg'},
    {image:'assets/images/interns/intern7.jpg'},
    {image:'assets/images/interns/intern8.jpg'},
    {image:'assets/images/interns/intern9.jpg',text:'Group Therapy'},
    {image:'assets/images/interns/intern10.jpg',text:'Group Therapy'},
    {image:'assets/images/interns/intern11.jpg',text:'Conducting viva for students'},
    {image:'assets/images/interns/intern12.jpg',text:'Conducting viva for students'},
    {image:'assets/images/interns/intern13.jpg',text:'Field work exam'},
    {image:'assets/images/interns/intern14.jpg'},
    {image:'assets/images/interns/intern15.jpg'},
    {image:'assets/images/interns/intern16.jpg'},
    {image:'assets/images/interns/intern17.jpg',text:'Workshop'},
    {image:'assets/images/interns/intern18.jpg',text:'Relaxation Therapy'},
    {image:'assets/images/interns/intern19.jpg'},
  ];
  preview = false;
  selected:any;

  constructor() { }

  ngOnInit(): void {
  }

  previewImage(data:any){
    this.preview = !this.preview;
    if(data){
      this.selected = data;
    }
  }

}
