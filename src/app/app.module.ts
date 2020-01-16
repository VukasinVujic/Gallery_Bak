import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SearchBarComponent } from './layouts/header/search-bar/search-bar/search-bar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SixPictureComponent } from './main_body/six-picture/six-picture.component';
import { ThreePictureComponent } from './main_body/three-picture/three-picture.component';
import { ContainerComponent } from './main_body/container/container.component';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    FooterComponent,
    SixPictureComponent,
    ThreePictureComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
