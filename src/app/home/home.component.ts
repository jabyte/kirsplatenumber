import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = ['car.jpg', 'car1.jpg', 'car2.jpg', 'car3.jpg'];

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {

  }
}
