import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})

export class AppareilViewComponent implements OnInit{
  isAuth = true;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 1000
    );
  }
  );

  lesAppareils = [];
  appareilSubscription: Subscription;

  constructor(private appareilService : AppareilService) {
    // setTimeout(
    //   () => {
    //     this.isAuth = true;
    //   }, 1000
    // );
  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (lesAppareils: any[]) => {
        this.lesAppareils = lesAppareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumerAll() {
    this.appareilService.switchOnAll();

  }

  onEteindreAll() {
    this.appareilService.switchOffAll();
  }

  onSave() {
    this.appareilService.saveAppareilsToServer();
  }

  onFetch() {
    this.appareilService.getAppareilsFromServer();
  }

}
