import { Component } from '@angular/core';
import { IonMenu } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(private router: Router) {}

  // Method to close the menu
  closeMenu() {
    const menu = document.querySelector('ion-menu') as HTMLIonMenuElement;
    menu.close(); // Close the menu
  }
}
