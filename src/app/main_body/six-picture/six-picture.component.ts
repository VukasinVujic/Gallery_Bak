import { Component, OnInit, OnDestroy } from '@angular/core';
import {PicturesService} from '../../pictures.service'

@Component({
  selector: 'app-six-picture',
  templateUrl: './six-picture.component.html',
  styleUrls: ['./six-picture.component.css']
})
export class SixPictureComponent implements OnInit {

  constructor( private picturesService: PicturesService) { }

  randomNumber: number = 0;
  numPictShow: String[] = [];

  ngOnInit() {
    this.getRandomPicture();
    this.makeUrlPaths();

  }

  imagePath(){
    return `https://i.picsum.photos/id/${this.randomNumber}/100/100.jpg`
  } 

  getRandomPicture(){
    this.randomNumber = 0;
    this.randomNumber = Math.floor(Math.random() * 1000); 
    return Math.floor(Math.random() * 1000);

  }

  makeUrlPaths(){
    this.numPictShow.slice(0);
    for(let i = 0 ; i <= 5 ; i++ ){
      this.numPictShow.push(`https://i.picsum.photos/id/${this.getRandomPicture()}/200/200.jpg`)
    }
    console.log(this.numPictShow);
  }

}
