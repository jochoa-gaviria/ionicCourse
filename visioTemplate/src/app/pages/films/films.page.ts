import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})

export class FilmsPage implements OnInit {
  identificador:number=42
  constructor(private navController: NavController, private router: Router) { }
  
  ngOnInit() {

  }

  openDetails() {
    // Both of these would work!
    // But the standard Router is recommended.
    // this.navController.navigateForward(`/tabs/films/42`);
    console.log('open detail...')
    this.router.navigateByUrl(`/tabs/films/${this.identificador}`);
  }

  goToPlanets() {
    this.navController.navigateRoot(`/tabs/planets`)
  }
}