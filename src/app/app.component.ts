import { Component } from '@angular/core';
import { Dog } from 'src/app/dog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dogs: Dog[] = [
    {
      'id': 1,
      'name': 'Medore',
      'picturePath': 'assets/image/dog1.jpg',
      'color': 'white',
      'sex': true,
      'behavior':'nice dog'
    },

    {
      'id': 2,
      'name': 'Blacky',
      'picturePath': 'assets/image/dog2.jpg',
       'color': 'white',
      'sex': true,
      'behavior': 'kind dog'
    },

    {
      'id': 3,
      'name': 'Sybulet',
      'picturePath': 'assets/image/dog3.jpg',
       'color': 'white',
      'sex': true,
      'behavior': 'beware of the dog'
    },
    {
      'id': 4,
      'name': 'Sybulet',
      'picturePath': 'assets/image/dog4.jpg',
      'color': 'white',
      'sex': true,
      'behavior': 'beware of the dog'
    },
    {
      'id': 5,
      'name': 'Jacaler',
      'picturePath': 'assets/image/dog5.jpg',
      'color': 'white',
      'sex': true,
      'behavior': 'bite some time'
    },

    {
      'id': 6,
      'name': 'Petrina',
      'picturePath': 'assets/image/dog6.jpg',
      'color': 'white',
      'sex': true,
      'behavior': 'cool dog'
    },

    {
      'id': 7,
      'name': 'Seoliat',
      'picturePath': 'assets/image/dog7.jpg',
      'color': 'white',
      'sex': true,
      'behavior': 'always sleeping dog'
    },
    {
      'id': 8,
      'name': 'Seoliat',
      'picturePath': 'assets/image/dog8.jpg',
      'color': 'white',
      'sex': true,
      'behavior': 'very protector'
    },
    {
      'id': 9,
      'name': 'Seoliat',
      'picturePath': 'assets/image/dog9.jpg',
      'color': 'white',
      'sex': true,
      'behavior': 'eat too much'
    },
    {
      'id': 10,
      'name': 'Seoliat',
      'picturePath': 'assets/image/dog10.jpg',
      'color': 'white',
      'sex': true,
      'behavior': 'very good dog'
    }
  ];
}
