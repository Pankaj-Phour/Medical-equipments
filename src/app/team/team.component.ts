import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { };
  teamMembers:any = [
    {name:'Dr. Priyanka Pandey',about:'Ms. Priyanka Pandey is a distinguished Licenced Clinical Psychologist with 15 years of experience in the field. Her diverse expertise spans government hospitals, psychiatric de-addiction and rehabilitation centers, clinics, NGOs, and private practice. With proficiency in both inpatient and outpatient settings, she has effectively worked with clients across various age groups.Her exceptional skills in psychotherapy are evident in her work with substance use disorders, relationship difficulties, anxiety, depression, personality disorders, and family dynamics. Her comprehensive experience encompasses a broad spectrum of psychiatric disorders and psychological challenges. As a trained professional from esteemed institutions, she is also a passionate educator who mentors interns and conducts webinars and workshops to nurture aspiring psychologists. Notably, she has guided over 3,000 students globally, playing a pivotal role in shaping the next generation of professionals in the field. Her commitment to education and dedication to fostering growth in aspiring psychologists is truly praiseworthy, reflecting her profound impact on the field.',designation:'Director, Consultant Clinical Psychologist, RCI registered',image:'assets/images/director.jpg'},
    {name:'Dr. Neeraj Chopra',about:'Dr. Neeraj Chopra is a Homeopathic practitioner and renowned expert in deaddiction, boasting over 20 years of experience in addressing the complexities of substance abuse and addiction. With a deep understanding of the multifaceted nature of addiction, he has developed a comprehensive treatment approach that integrates physical, emotional, and psychological aspects. His holistic methodology recognizes the intricate relationships between body, mind, and spirit, and incorporates a range of therapies, including homeopathic remedies, dietary modifications, exercise regimens, and stress management techniques. By adopting a holistic approach, Dr. Chopra empowers individuals and families to achieve lasting recovery, improved overall health, and enhanced well-being.',designation:'Homeopathic consultant, deaddiction expert',image:'assets/images/director.jpg'},
  ]

  ngOnInit(): void {
  }


  contactAgent(data:any,type:string){
    console.log("Hello from contact agent",data,type);
    
  }

}
