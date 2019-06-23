import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 1000
    );
  });

lesAppareils = [];

constructor(private appareilService : AppareilService) {
  setTimeout(
    () => {
      this.isAuth = true;
    }, 1000
  );
}

ngOnInit() {
  this.lesAppareils = this.appareilService.lesAppareils;
}

onAllumerAll() {
  this.appareilService.switchOnAll();
}

onEteindreAll() {
  this.appareilService.switchOffAll();
}

}
