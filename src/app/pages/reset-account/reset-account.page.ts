import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-reset-account-page',
  templateUrl: './reset-account.page.html',
  styleUrls: ['./reset-account.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ResetAccountPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
