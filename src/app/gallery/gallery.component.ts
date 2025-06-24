import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {


  images:any = [
    {image:'assets/images/gallery/image1.jpg'},
    {image:'assets/images/gallery/image2.jpg'},
    {image:'assets/images/gallery/image3.jpg'},
    {image:'assets/images/gallery/image4.jpg'},
    {image:'assets/images/gallery/image5.jpg'},
    {image:'assets/images/gallery/image6.jpg'},
    // {image:'assets/images/gallery/image7.jpg'},
    // {image:'assets/images/gallery/image8.jpg'},
    {image:'assets/images/gallery/image9.jpg'},
    {image:'assets/images/gallery/image10.jpg'},
    {image:'assets/images/gallery/image11.jpg'},
    // {image:'assets/images/gallery/image12.jpg'},
    // {image:'assets/images/gallery/image13.jpg'},
    // {image:'assets/images/gallery/image14.jpg'},
    {image:'assets/images/gallery/image15.jpg'},
    // {image:'assets/images/gallery/image16.jpg'},
    // {image:'assets/images/gallery/image17.jpg'},
    {image:'assets/images/gallery/image18.jpg'},
    {image:'assets/images/gallery/image19.jpg'},
    {image:'assets/images/gallery/image20.jpg'},
    {image:'assets/images/gallery/image21.jpg'},
    {image:'assets/images/gallery/image22.jpg'},
    // {image:'assets/images/gallery/image23.jpg'},
    // {image:'assets/images/gallery/image24.jpg'},
    // {image:'assets/images/gallery/image25.jpg'},
    // {image:'assets/images/gallery/image26.jpg'},
    // {image:'assets/images/gallery/image27.jpg'},
    {image:'assets/images/gallery/image28.jpg'},
    {image:'assets/images/gallery/image29.jpg'},
    {image:'assets/images/gallery/image30.jpg'},
    {image:'assets/images/gallery/image31.jpg'},
    {image:'assets/images/gallery/image32.jpg'},
    {image:'assets/images/gallery/image33.jpg'},
    {image:'assets/images/interns/intern1.jpg'},
    {image:'assets/images/interns/intern2.jpg'},
    {image:'assets/images/interns/intern3.jpg'},
    {image:'assets/images/interns/intern4.jpg'},
    {image:'assets/images/interns/intern5.jpg'},
    {image:'assets/images/interns/intern6.jpg'},
    {image:'assets/images/interns/intern7.jpg'},
    {image:'assets/images/interns/intern8.jpg'},
    {image:'assets/images/interns/intern9.jpg'},
    {image:'assets/images/interns/intern10.jpg'},
    {image:'assets/images/interns/intern11.jpg'},
    {image:'assets/images/interns/intern12.jpg'},
    {image:'assets/images/interns/intern13.jpg'},
    {image:'assets/images/interns/intern14.jpg'},
    {image:'assets/images/interns/intern15.jpg'},
    {image:'assets/images/interns/intern16.jpg'},
    {image:'assets/images/interns/intern17.jpg'},
    {image:'assets/images/interns/intern18.jpg'},
    {image:'assets/images/interns/intern19.jpg'},
    {image:'assets/images/interns/art_therapy.jpg',text:'Art Therapy'},
    {image:'assets/images/interns/art_therapy2.jpg',text:'Art Therapy'},
    {image:'assets/images/interns/bonding_exercise.jpg',text:'Bonding Exercise'},
    {image:'assets/images/interns/guided_meditation.jpg',text:'Guided Meditation'},
    {image:'assets/images/interns/mindfullness.jpg',text:'Mindfulness'},
    {image:'assets/images/interns/role_play.jpg',text:"Role Play"},
    {image:'assets/images/interns/workshop.jpg',text:'Workshop on Drug abuse and its prevention'},
    {image:'assets/images/interns/workshop2.jpg',text:'Workshop on Drug abuse and its prevention'},
  ];
  selected:any;
  preview = false;

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
