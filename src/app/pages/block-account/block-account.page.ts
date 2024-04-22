import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BlockAccountComponent } from 'src/app/components/account/block-account/block-account.component';

@Component({
  selector: 'app-block-account-page',
  templateUrl: './block-account.page.html',
  styleUrls: ['./block-account.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    BlockAccountComponent
  ]
})
export class BlockAccountPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
