import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SimpleHttpComponentComponent } from './simple-http-component/simple-http-component.component';
import { MoreHttpRequestsComponentComponent } from './more-http-requests-component/more-http-requests-component.component';
import { YoutubeSearchComponentComponent } from './youtube-search-component/youtube-search-component.component';
import { SearchResultComponentComponent } from './search-result-component/search-result-component.component';
import { SearchBoxComponent } from './search-box/search-box.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponentComponent,
    MoreHttpRequestsComponentComponent,
    YoutubeSearchComponentComponent,
    SearchResultComponentComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    FormsModule,
    HttpClientModule
  ],
  // providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
