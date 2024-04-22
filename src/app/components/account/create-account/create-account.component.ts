import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterModule
  ]
})
export class CreateAccountComponent  implements OnInit {

  showPassword = false;
  showConfirmPassword = false;
  @ViewChild('input') input!: IonInput;
  @ViewChild('confirmInput') confirmInput!: IonInput;

  constructor() {
    addIcons({eyeOutline, eyeOffOutline})
  }

  ngOnInit() {
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }

  toggleShowConfirm() {
    this.showConfirmPassword = !this.showConfirmPassword;
    this.confirmInput.type = this.showConfirmPassword ? 'text' : 'password';
  }
}
