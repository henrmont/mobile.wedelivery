import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CreateAccountComponent } from 'src/app/components/account/create-account/create-account.component';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CreateAccountComponent
  ]
})
export class CreateAccountPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
