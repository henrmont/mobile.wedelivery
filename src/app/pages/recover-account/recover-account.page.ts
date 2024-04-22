import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RecoverAccountComponent } from 'src/app/components/account/recover-account/recover-account.component';

@Component({
  selector: 'app-recover-account-page',
  templateUrl: './recover-account.page.html',
  styleUrls: ['./recover-account.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RecoverAccountComponent,
  ]
})
export class RecoverAccountPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
