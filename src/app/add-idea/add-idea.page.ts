import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { IdeaService } from '../idea.service';
import { IIdea, Idea } from '../model/IIdea.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.page.html',
  styleUrls: ['./add-idea.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AddIdeaPage implements OnInit {

  idea: IIdea = new Idea()
  constructor(
    public navCtrl: NavController,
    private ideaServiceList: IdeaService
) { }

  ngOnInit() {

  }

  back():void{
    this.loadall()
    this.navCtrl.navigateBack("/home")
  }

  onsubmit(value: IIdea):void{
    this.saveIdea(value)
  
  }

  saveIdea(value:IIdea):void{
    this.ideaServiceList.addIdea(value).subscribe(
      idea => {
        console.log("enregistrer", idea)
        this.loadall()
        // this.goToIdeaList()
      }
      
    )
  }

  // Fonction pour naviguer vers la page d'ajout d'idée
  goToIdeaList(): void{
    this.navCtrl.navigateForward("/home")
  }

  loadall():void{
    this.ideaServiceList.getIdea()
  }
}
