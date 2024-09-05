import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovelComponent } from './novel/novel.component';
import { NovelsComponent } from './novels/novels.component';

@NgModule({
  declarations: [
    AppComponent,
    NovelComponent,
    NovelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
