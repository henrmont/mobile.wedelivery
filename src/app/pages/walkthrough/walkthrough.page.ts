import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class WalkthroughPage {
  constructor() { }
}
