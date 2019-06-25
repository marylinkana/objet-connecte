export class AppareilService {

  lesAppareils = [
    {
      id: 1,
      name:"Machine à laver",
      status:"éteint"
    },
    {
      id: 2,
      name:"Ordinateur",
      status:"éteint"
    },
    {
      id: 3,
      name:"frigo",
      status:"éteint"
    }
  ];

  getAppareilById(id: number) {
    const appareil = this.lesAppareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
}

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
