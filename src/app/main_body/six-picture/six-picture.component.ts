import { Component, OnInit, OnDestroy } from '@angular/core';
import {PicturesService} from '../../pictures.service'

@Component({
  selector: 'app-six-picture',
  templateUrl: './six-picture.component.html',
  styleUrls: ['./six-picture.component.css']
})
export class SixPictureComponent implements OnInit {

  constructor( private picturesService: PicturesService) { }

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
    for(let i = 0 ; i <= 5 ; i++ ){
      this.numPictShow.push(`https://i.picsum.photos/id/${this.getRandomNbr()}/400/100.jpg`)
    }
    console.log(this.numPictShow);
  }

}
