import { Component } from '@angular/core';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  // Method to close the menu
  closeMenu() {
    const menu = document.querySelector('ion-menu') as HTMLIonMenuElement;
    menu.close(); // Close the menu
  }
}
