import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-edit-idea',
  templateUrl: './edit-idea.page.html',
  styleUrls: ['./edit-idea.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EditIdeaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
