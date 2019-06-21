import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

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
      }, 4000
    );
  }

  onAllumerAll() {
    console.log('On allume tout !');
    // ngFor (let appareil of this.lesAppareils){
    //   appareil.status = "éteint";
    // }
  }

  onEteindreAll() {
    console.log('On eteint tout !');
    // ngFor (let appareil of this.lesAppareils){
    //   appareil.status = "éteint";
    // }
  }

}
