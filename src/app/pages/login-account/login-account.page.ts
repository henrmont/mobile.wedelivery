import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginAccountComponent } from 'src/app/components/account/login-account/login-account.component';

@Component({
  selector: 'app-login-account-page',
  templateUrl: './login-account.page.html',
  styleUrls: ['./login-account.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    LoginAccountComponent
  ]
})
export class LoginAccountPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
