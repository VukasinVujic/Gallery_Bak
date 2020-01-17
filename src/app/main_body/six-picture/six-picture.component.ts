import { Component, OnInit, OnDestroy } from '@angular/core';
import {PicturesService} from '../../pictures.service'

@Component({
  selector: 'app-six-picture',
  templateUrl: './six-picture.component.html',
  styleUrls: ['./six-picture.component.css']
})
export class SixPictureComponent implements OnInit {

  constructor( private picturesService: PicturesService) { }

  numPictShow: string[] = [];
  arrayForWidthLength: number[] = [ 100 , 50 , 185 , 150 , 55 , 60 , 75 , 74 , 120, 180, 140, 150 , 170 , 95 ];
  randomNumber: number[] = [100,100];

  height: string[] = [];

  ngOnInit() {
    this.getRandomNbr();
    this.makeUrlPaths();
    this.getRandomNbgFromArray();
    this.smallToBi();
  }
  getRandomNbr(){
    return Math.floor(Math.random() * 100);
  }
  makeUrlPaths(){
    this.numPictShow.slice(0);
    for(let i = 0 ; i <= 5 ; i++ ){
      this.numPictShow.push(`https://i.picsum.photos/id/${this.getRandomNbr()}/${this.getRandomNbgFromArray()[0]}/${this.getRandomNbgFromArray()[1]}.jpg`)
    }
    console.log(this.numPictShow);
  }
  getRandomNbgFromArray(){
    this.randomNumber.slice(0) ;
    this.randomNumber[0] = this.arrayForWidthLength[Math.floor(Math.random() * this.arrayForWidthLength.length)];
    this.randomNumber[1] = this.arrayForWidthLength[Math.floor(Math.random() * this.arrayForWidthLength.length)];    
    return this.randomNumber;
  }

  aaaa ="";
  smallToBi(){
    // console.log(this.numPictShow);
    for(let i = 0 ; i<this.numPictShow.length ; i++){
      // this.aaaa = (this.numPictShow.length[i].lastIndexOf('/'))      
      console.log(this.aaaa);
  }

  }
}

// // console.log(`This is the ${i} ${this.numPictShow[i]}`);
//       // for(let j = this.numPictShow[i].length-1 ; j>=0 ; j--) {
//         // console.log(this.numPictShow[i][j]);
//         // if(this.numPictShow[i][j] === '/'){
//         //   this.height = this.numPictShow[i][j+1]
//         // }
//         this.height = this.
//       // }
//     // }
