import { Component } from '@angular/core';
import { MenubarrComponent } from '../../menubarr/menubarr.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestionprojet',
  standalone: true,
  imports: [MenubarrComponent, RouterLink,FormsModule],
  templateUrl: './gestionprojet.component.html',
  styleUrl: './gestionprojet.component.css'
})
export class GestionprojetComponent {

  nomprojet : string= "";
  urlimage : string= "";
  Categories: string="";

  tabProjet:any
  projets:any[]=[]
  listProjet:any
  list:any
  idLastProjet:number=0;

  ngOnInit(){
    if (!localStorage.getItem("Projets")) {
      localStorage.setItem("Projets", JSON.stringify(this.projets));
    }
    this.tabProjet = JSON.parse(localStorage.getItem("Projets") || "[]");
    console.log(this.tabProjet);
    this.getAllprojet();
  }
  getAllprojet() {
    this.listProjet = JSON.parse(localStorage.getItem('Projets') || "");
    this.list=this.listProjet
  }
  Ajoutprojet(){
    let p = {
      nom: this.nomprojet,
      image: this.urlimage,
      categories: this.Categories
    }

    this.listProjet.push(p);

    console.log(this.listProjet);

    localStorage.setItem('Projets', JSON.stringify(this.listProjet));

    // this.swal('success', 'Ajouter avec succées')
    this.getAllprojet();
}
getBycategories(name: any) {
  if (name === '') {
    this.list = this.listProjet;  // Si le nom de la catégorie est vide, afficher tous les projets
  } else {
    this.list = this.listProjet.filter((item: any) => item.categories == name);
  }
  console.log(this.list);
}

// *********suppression d'un projet***********
supp(nom:any){
  let indexElementAsupprimer = this.listProjet.findIndex((element: any) => element.nom === nom);
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
      this.listProjet.splice(indexElementAsupprimer, 1);
      localStorage.setItem('Projets', JSON.stringify(this.listProjet));
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
  this.getAllprojet();
}
// ********pagination*******************//
projetParPage = 6; // Nombre d'projet par page
pageActuelle = 1; // Page actuelle
getProjetsPage(): any[] {
  const indexDebut = (this.pageActuelle - 1) * this.projetParPage;
  const indexFin = indexDebut + this.projetParPage;
  return this.list.slice(indexDebut, indexFin);
}
// Méthode pour générer la liste des pages
get pages(): number[] {
  const totalPages = Math.ceil(this.list.length / this.projetParPage);
  return Array(totalPages)
    .fill(0)
    .map((_, index) => index + 1);
}

// Méthode pour obtenir le nombre total de pages
get totalPages(): number {
  return Math.ceil(this.listProjet.length / this.projetParPage);
}
}

