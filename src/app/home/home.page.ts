import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { AddIdeaPage } from '../add-idea/add-idea.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(public navctrl: NavController) {}

  addPage(): void{
    this.navctrl.navigateForward("/add-idea")
  }
}
