import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  isAuth = false;
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;

  constructor(private appareilService : AppareilService) {
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
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onEteindre() {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }

}
