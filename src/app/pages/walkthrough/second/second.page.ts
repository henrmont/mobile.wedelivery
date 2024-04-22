import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterModule
  ]
})
export class SecondPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
