import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterModule
  ]
})
export class ThirdPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
