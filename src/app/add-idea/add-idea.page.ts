import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.page.html',
  styleUrls: ['./add-idea.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddIdeaPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  back():void{
    this.navCtrl.navigateBack("/home")
  }

}
