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

}
