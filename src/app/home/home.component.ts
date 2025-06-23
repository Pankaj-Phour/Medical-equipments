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
  ];

  treatments:any = [
    {name:'Alcohol addiction',text:"Alcohol addiction, also known as alcohol use disorder (AUD), is a chronic and often progressive disease characterized by a person's inability to control their consumption of alcohol despite negative consequences.",image:''},
    {name:'Cannabis addiction',text:"Cannabis addiction, also known as cannabis use disorder (CUD), is a condition where an individual's use of cannabis becomes compulsive and interferes with their daily life.",image:''},
    {name:'Opioid addiction',text:"Opioid addiction is a serious condition characterized by physical dependence, Compulsive use despite harm, Withdrawal symptoms when attempting to stop.",image:''},
    {name:'Heroin addiction',text:"Heroin addiction is a serious and complex condition that affects individuals physically, emotionally, and psychologically. Heroin, an opioid derived from morphine, can lead to dependence and addiction due to its potent effects on the brain's reward system.",image:''},
    {name:'Cocaine addiction',text:"Cocaine addiction is a serious condition that can have significant physical and psychological consequences.",image:''},
    {name:'Poly substance abuse',text:"The use of multiple substances, such as opioids, cannabis, and other drugs, can lead to complex addiction issues. Treatment requires a comprehensive approach, addressing physical dependence, underlying issues, and developing coping strategies.",image:''},
    {name:'Benzodiazepines addiction',text:"Benzodiazepine addiction is a condition where an individual becomes physically or psychologically dependent on benzodiazepines, a class of medications commonly used to treat anxiety, insomnia, and other conditions.",image:''},
    {name:'Morphine addiction',text:"Morphine addiction is a condition where an individual becomes physically or psychologically dependent on morphine. Recovery from morphine addiction is possible with the right treatment and support.",image:''},
    {name:'Gambling addiction',text:"Gambling addiction, also known as ludomania or compulsive gambling, is a condition where an individual loses control over their gambling habits, leading to negative consequences.",image:''},
    {name:'Internet addiction',text:"Internet addiction, also known as internet use disorder or compulsive internet use, is a condition where an individual loses control over their internet habits, leading to negative consequences like excessive time spent online, often at the expense of other activities, Difficulty disconnecting or limiting internet use",image:''},
    {name:'Drug addiction',text:"Drug addiction, also known as substance use disorder, is a complex condition characterized by compulsive seeking and use of substances despite negative consequences, Physical dependence and withdrawal symptoms.",image:''},
    {name:'De-addiction treatment',text:"Deaddiction treatment typically involves a combination of interventions such as Medically supervised withdrawal from substances.Addressing underlying issues, developing coping skills. Managing withdrawal symptoms, cravings, or co-occurring conditions and promoting healthy habits, stress management.",image:''},
    {name:'Bipolar disorder',text:"Bipolar disorder is a mental health condition that causes extreme mood swings, ranging from manic or hypomanic episodes to depressive episodes.",image:''},
    {name:'Schizophrenia',text:"Schizophrenia is a chronic mental health disorder that affects how a person thinks, feels, and behaves. It can cause symptoms such as Hallucinations,Delusions ,Disorganized thinking and speech",image:''},
    {name:'Personality disorder',text:"Personality disorders are mental health conditions that affect an individual's thoughts, feelings, and behaviors, leading to difficulties in relationships, work, and daily life.",image:''},
  ]

  ngOnInit(): void {
  }

}
