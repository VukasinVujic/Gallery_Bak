import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor(private http: HttpClient) { }

  // getSixPictures(): Observable<any> {
  //   return this.http.get('https://picsum.photos/200/300', { responseType: 'blob' })
  // }


}
