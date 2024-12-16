import { Component } from '@angular/core';
import { MenubarrComponent } from '../../menubarr/menubarr.component';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CompetencesComponent } from '../../visiteur/competences/competences.component';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';


@Component({
  selector: 'app-gestioncompetence',
  standalone: true,
  imports: [MenubarrComponent, RouterLink,FormsModule],
  templateUrl: './gestioncompetence.component.html',
  styleUrl: './gestioncompetence.component.css'
})
export class GestioncompetenceComponent {
  // competenceObj :any;
  // constructor(){
  //   this.competenceObj = new any();
  // }
  nom: string = '';
  idLastCompetence:number=0;
  competences:any[] =[];
  listCompetence: any[] = [];
  compSelect:any
  tabCompetence:any;
  nomComp :string="";

  ngOnInit(){
    if (!localStorage.getItem("Competences")) {
      localStorage.setItem("Competences", JSON.stringify(this.competences));
    }
    this.tabCompetence = JSON.parse(localStorage.getItem("Competences") || "[]");
    console.log(this.tabCompetence);
    this.getAllCompetence();
  }
  getAllCompetence() {
    this.listCompetence = JSON.parse(localStorage.getItem('Competences') || "");
  }
  Open(){
    alert('ouvert')
  }
  ajout(){
    alert('bien')
    if (this.tabCompetence.length) {
      alert('competence')
      console.log("taille du tab");
      this.idLastCompetence = this.tabCompetence[this.tabCompetence.length - 1].idLastCompetence;
      console.log(this.idLastCompetence)
    }
    else {
      this.idLastCompetence = 0;
      console.warn("idLastCompetence = 0")
    }

    // Verification du nom
    // Si le champ est remplit, on ajoute la comprtence dans le tableau localStorage
    if (this.nomComp == "") {
      // this.Swal('error', 'Erreur!', 'Veuillez remplir le champ');
    } else {
      let competence = {
        idCompetence: this.idLastCompetence + 1,
        nom: this.nomComp,
      }
      let competenceExist = this.tabCompetence.find((elemt: any) => elemt.nom == this.nomComp);

      if (competenceExist) {
        // this.swal('error', 'Erreur!', 'Cette classe est déjà ajoutée');
      }
      else {
        // On crée le compte 
        this.tabCompetence.push(competence);
        console.log(this.tabCompetence)
        localStorage.setItem("Competences", JSON.stringify(this.tabCompetence));
        // this.swal('success', 'Felicitation!', 'Ajout Classe reuissie');
        this.nomComp = '';
      }
    }
  }
  ///****************charger les informations à modifier*************/
  chargercomp(nom:any){
    this.compSelect = this.listCompetence.find((element:any)=>element.nom===nom);
    this.nomComp=this.compSelect.nom
    console.log(this.compSelect)

  }
  //************Modifier une competence****************/
  ModifiComp(nom:any){
    this.compSelect.nom=nom
    localStorage.setItem('Competences', JSON.stringify(this.listCompetence));
    this.getAllCompetence();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Votre Competence a été modifier",
      showConfirmButton: false,
      timer: 1500
    });
  }
  // *****supprimer une competence**********
  delete(nom:any){
    let indexElementAsupprimer = this.listCompetence.findIndex((element: any) => element.nom === nom);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.listCompetence.splice(indexElementAsupprimer, 1);
        localStorage.setItem('Competences', JSON.stringify(this.listCompetence));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    this.getAllCompetence();
  }

  // sweet(arg0: string, arg1: string, arg2: string) {
  //   throw new Error('Method not implemented.');
  // }
}
// export class any {
//   nomComp :string="";

// constructor() {
//   this.nomComp = "";
 
// }
// }