import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { IdeaService } from '../idea.service';
import { IIdea, Idea } from '../model/IIdea.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-idea',
  templateUrl: './edit-idea.page.html',
  styleUrls: ['./edit-idea.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EditIdeaPage implements OnInit {

  idea: IIdea = new Idea()
  Id: number
  statusIdea: string
  constructor(
    public navCtrl: NavController,
    private ideaServiceList: IdeaService,
    private route: ActivatedRoute
) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.Id = id

    this.ideaServiceList.getIdeaById(id).subscribe((idea: IIdea) =>{
      this.idea.title = idea.title
      this.idea.content = idea.content

      if (this.idea.status == 0) {
        this.statusIdea = "Approuvé"
      }else{
        this.statusIdea = "Désaprouvé"
      }
    })
  }

  back():void{
    this.navCtrl.navigateBack("/home")
  }

  onsubmit():void{
    this.updateIdea()
    this.goToIdeaList()
  }

  updateIdea():void{
    this.ideaServiceList.upDateIdea(this.Id, this.idea).subscribe({
      next: idea => {
        console.log("enregistrer", idea)
        this.loadall()
      }
    })
  }

  // Fonction pour naviguer vers la page d'ajout d'idée
  goToIdeaList(): void{
    this.navCtrl.navigateForward("/home")
  }

  loadall():void{
    this.ideaServiceList.getIdea()
  }

  setStatus():void{
    let status: number

    this.ideaServiceList.getIdeaById(this.Id).subscribe((idea: IIdea) =>{
     status = this.idea.status = idea.status
     if (status== 0) {
       this.statusIdea = "Approuvé"
       this.idea.status= 1
     }else{
       this.idea.status = 0
       this.statusIdea = "Désaprouvé"
     }
    })
    this.updateIdea()
  }


}
