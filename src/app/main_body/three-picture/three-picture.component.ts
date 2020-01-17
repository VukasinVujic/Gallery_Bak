import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-picture',
  templateUrl: './three-picture.component.html',
  styleUrls: ['./three-picture.component.css']
})
export class ThreePictureComponent implements OnInit {

  constructor() { }

  numPictShow: String[] = [];

  ngOnInit() {
    this.getRandomNbr();
    this.makeUrlPaths();

  }
  getRandomNbr(){
    return Math.floor(Math.random() * 100);
  }

  makeUrlPaths(){
    this.numPictShow.slice(0);
    for(let i = 0 ; i <= 2 ; i++ ){
      this.numPictShow.push(`https://i.picsum.photos/id/${this.getRandomNbr()}/160/70.jpg`)
    }
    console.log(this.numPictShow);
  }
  
  

}
