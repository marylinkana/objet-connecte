import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 2000
    );
  }

  ngOnInit() {
  }

  getTextColor() {
    if(this.appareilStatus === "allumé"){
      return "green";
    }
    else if(this.appareilStatus === "éteint"){
      return "red";
    }
    else{
      return "purple";
    }
  }

  getStatus() {
    return this.appareilStatus;
  }

  onAllumer() {
    console.log('On allume : '+this.appareilName);
    return this.appareilStatus = "allumé";
  }

  onEteindre() {
    console.log('On eteint : '+this.appareilName);
    return this.appareilStatus = "éteint";

  }

}