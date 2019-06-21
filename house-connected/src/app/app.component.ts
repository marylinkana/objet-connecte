import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  lesAppareils = [
    {
      name:"Machine à laver",
      status:"éteint"
    },
    {
      name:"Ordinateur",
      status:"éteint"
    },
    {
      name:"frigo",
      status:"éteint"
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 3000
    );
  }

  onAllumerAll() {
    console.log('On allume tout !');
    for(let appareil of this.lesAppareils) {
      appareil.status = "allumé";
    }
    return this.lesAppareils;
  }

  onEteindreAll() {
    console.log('On eteint tout !');
    for(let appareil of this.lesAppareils) {
      appareil.status = "éteint";
    }
    return this.lesAppareils;
  }

}
