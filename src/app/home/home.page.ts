import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { IdeaService } from '../idea.service';
import { IIdea } from '../model/IIdea.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class HomePage implements OnInit{

  listIdea!: IIdea[]
  nbreItem: number
  note: string

  constructor(public navctrl: NavController,
    private ideaServiceList: IdeaService) {}
  ngOnInit(): void {
    this.loadall()
  }

  // Fonction pour naviguer vers la page d'ajout d'idée
  addPage(): void{
    this.navctrl.navigateForward("/add-idea")
  }

  // Supprimer une idée
  deleteIdea(id: number):void{
    this.ideaServiceList.deleteIdee(id).subscribe((idea: IIdea) => {
      console.log("Supprimer", idea.id)
    })
    window.location.reload()
  }

  //  // Fonction pour naviguer vers la page de modification d'idée
  // editPage(id: number):void{
  //   this.navctrl.navigateForward("/edit-idea", id)
  // }

  loadall():void{
    this.ideaServiceList.getIdea().subscribe({
      next: idea =>{
        this.listIdea =  idea
        this.nbreItem = this.listIdea.length
        if (this.nbreItem > 1) {
          this.note = "notes"
        }else{
          this.note = "note"
        }
        console.log("Idea", idea)
      }
    })
  }
}
