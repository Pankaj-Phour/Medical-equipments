import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() {
    if(window.innerWidth>768){
      this.mobile = false;
    }
    else{
      this.mobile = true;
    }
   };

  services:any = [
    {name:'Mental Health Services',color:'',children:[{name:'Mental Health Problems'},{name:'Psychotherapy'},{name:'Counselling'},{name:'Psychiatric treatment'}]},
    {name:'Addiction Services',color:'',children:[{name:'Addiction treatment'},{name:'Deaddiction treatment'}]},
    {name:'Therapeutic Approaches',color:'',children:[{name:'CBT (Cognitive Behavioral Therapy)'},{name:'Hypnotherapy'},{name:'Mindfulness'},{name:'REBT (Rational Emotive Behavior Therapy)'}]},
    {name:'Specific Issues',color:'',children:[{name:'Anger management'},{name:'Behavioural disorders'},{name:'Relationship difficulties'},{name:'Stress management'}]},
    {name:'Assessment Services',color:'',children:[{name:'Psychological testings'}]},
    {name:'Consultation',color:''},
  ];

  mobile = true;

  ngOnInit(): void {
    for(let item of this.services){
      if(item.children){
        for(let inner of item.children){
          // inner['width'] = 0;
        }
      }
    }
  }

  ngAfterViewInit(){
    console.log("Hello from after view init");
    for(let item of this.services){
      if(item.children){
        for(let inner of item.children){
          let element = document.getElementById(inner.name);
          console.log(element);
          if(element){
            console.log(element.clientWidth);
            inner['width'] = element.clientWidth/2;
          }
        }
        let parent = document.getElementById(item.name);
        if(parent){
          parent.style.paddingLeft = item.children[0].width + 'px';
          parent.style.paddingRight = item.children[item.children.length-1].width + 'px';
        }
      }
    }
    
  }

}
