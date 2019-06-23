export class AppareilService {

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

  switchOffAll() {
    console.log('On éteint tout !');
    for(let appareil of this.lesAppareils) {
      appareil.status = "éteint";
      console.log(appareil.name+' -> éteint');

    }
  }

  switchOnAll() {
    console.log('On allume tout !');
    for(let appareil of this.lesAppareils) {
      appareil.status = "allumé";
      console.log(appareil.name+' -> allumé');
    }
  }

  switchOnOne(index: number) {
    console.log('On allume : '+this.lesAppareils[index].name);
    this.lesAppareils[index].status = "allumé";
  }

  switchOffOne(index: number) {
    console.log('On eteint : '+this.lesAppareils[index].name);
    this.lesAppareils[index].status = "éteint";
  }


}
