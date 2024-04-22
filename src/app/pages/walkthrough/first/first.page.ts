import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterModule
  ]
})
export class FirstPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
