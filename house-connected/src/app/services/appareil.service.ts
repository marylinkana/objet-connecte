import { Subject } from 'rxjs/Subject';

export class AppareilService {

appareilSubject = new Subject<any[]>();

  private lesAppareils = [
    {
      id: 1,
      name:"Machine à laver",
      status:"éteint",
      description: "Ce lave-linge de classe A+ est 10% plus économique qu'un modèle de classe A. lave-linge PROLINE FP581WH blanc, capacité de 5 kg, 23 programmes, essorage de 800 tours/min, température de 20°/30°/40°/60°/90°C."
    },
    {
      id: 2,
      name:"Ordinateur",
      status:"éteint",
      description: "THOMSON Neo Classic · Windows OS · 14,1 po · 32 go de capacité du disque · Lecteur à état solide · Disque dur · 4 go de mémoire"
    },
    {
      id: 3,
      name:"frigo",
      status:"éteint",
      description: "Réfrigérateur à froid statique 119 L Congélateur à froid statique 42 L Volume total : 161 L - Dimensions HxLxP : 143 x 49,5 x 53,6 cm Classe A+ "
    }
  ];

  emitAppareilSubject() {
    this.appareilSubject.next(this.lesAppareils.slice());
  }

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
    this.emitAppareilSubject();
  }

  switchOnAll() {
    console.log('On allume tout !');
    for(let appareil of this.lesAppareils) {
      appareil.status = "allumé";
      console.log(appareil.name+' -> allumé');
    }
    this.emitAppareilSubject();
  }

  switchOnOne(index: number) {
    console.log('On allume : '+this.lesAppareils[index].name);
    this.lesAppareils[index].status = "allumé";
    this.emitAppareilSubject();
  }

  switchOffOne(index: number) {
    console.log('On eteint : '+this.lesAppareils[index].name);
    this.lesAppareils[index].status = "éteint";
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string, description: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: '',
      description: '',
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.description = description;
    appareilObject.id = this.lesAppareils[(this.lesAppareils.length - 1)].id + 1;
    this.lesAppareils.push(appareilObject);
    this.emitAppareilSubject();
  }


}
