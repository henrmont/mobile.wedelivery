import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

@Component({
  selector: 'app-block-account',
  templateUrl: './block-account.component.html',
  styleUrls: ['./block-account.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterModule
  ]
})
export class BlockAccountComponent  implements OnInit {

  showPassword = false;
  @ViewChild('input') input!: IonInput;

  constructor() {
    addIcons({eyeOutline, eyeOffOutline})
  }

  ngOnInit() {
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }

}
