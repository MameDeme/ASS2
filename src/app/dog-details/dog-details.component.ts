import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/dog';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public name: string;
  public path: string;
  public sex: boolean;
  public color: string;
  public behavior: string;


  loaddogDetail(name, path, sex, color, behavior) {




  }











}
