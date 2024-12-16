import { Routes } from '@angular/router';
import { GestioncompetenceComponent } from './dashboard/gestioncompetence/gestioncompetence.component';
import { GestionexperienceComponent } from './dashboard/gestionexperience/gestionexperience.component';
import { GestionprojetComponent } from './dashboard/gestionprojet/gestionprojet.component';
import { AccueilComponent } from './visiteur/accueil/accueil.component';
import { ProjetsComponent } from './visiteur/projets/projets.component';
import { ExperiencesComponent } from './visiteur/experiences/experiences.component';
import { ContactComponent } from './visiteur/contact/contact.component';
import { AproposComponent } from './visiteur/apropos/apropos.component';
import { CompetencesComponent } from './visiteur/competences/competences.component';
import { AccueildashboardComponent } from './dashboard/accueildashboard/accueildashboard.component';
export const routes: Routes = [
    {
        path: '', redirectTo: 'accueil', pathMatch:'full'
    },
    {
        path: 'accueil',
        component:AccueilComponent
    },
    {
        path: 'accueil',
        component:AccueilComponent
    },
    {
        path: 'projets',
        component:ProjetsComponent
    },
    {
        path: 'experiences',
        component:ExperiencesComponent
    },
    {
        path: 'competences',
        component:CompetencesComponent
    },
    {
        path: 'apropos',
        component:AproposComponent
    },
    {
        path: 'contact',
        component:ContactComponent
    },
    {
        path: 'gestioncompetence',
        component:GestioncompetenceComponent
    },
    {
        path: 'gestionexperience',
        component:GestionexperienceComponent
    },
    {
        path: 'gestionprojet',
        component:GestionprojetComponent
    },
    {
        path: 'accueildashboard',
        component:AccueildashboardComponent
    },
];
