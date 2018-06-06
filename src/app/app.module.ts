import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontPageComponent } from './front-page/front-page.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [AppComponent, FrontPageComponent, ArticleComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
