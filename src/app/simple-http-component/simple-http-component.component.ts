import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-http-component',
  templateUrl: './simple-http-component.component.html'
})
export class SimpleHttpComponentComponent implements OnInit {
data: Object;
loading: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  makeRequest(): void {
    this.loading = true;
    this.http
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .subscribe(data => {
          console.log('Got it baaaaack!!')
          this.data = data;
          this.loading = false;
        });
  }
}
