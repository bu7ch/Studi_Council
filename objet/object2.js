// let obj= new Object
// obj.name = 'roro'
// obj.name = 'billy'
// obj


let auberge = {
  name:'Les flots Bleue',
  address:'3 rue du Pain',
  rooms: 50
}
console.log(auberge.name);
//  Objet literaux

// class Person {
//   constructor(name,age){
//     this.name = name,
//     this.age = age,
//     this.head = true
//   }
// }

// let humain = new Person('JC',45)
// console.log(humain);
// let humain_1 = new Person("John", 56)
// console.log(humain_1);

// let x = "J'aime les frites"
// console.log(x.split(' ').reverse().join(' '))


// let prenom = "roro"

// let prenomModified =prenom.charAt(0).toUpperCase() + prenom.slice(1)
// console.log(prenomModified);

// Je veux Un Objet : AccordHotel 
// avec les props :
// name / rooms: 50 / pool : true / parking:true / reservation() / disponibilite()

// class AccordHotel {
//   constructor(name="anonymous"){
//     this.name=name,
//     this.rooms = 50,
//     this.roomsAvaible = this.rooms,
//     this.pool = true,
//     this.parking = true,
//     this.reservation = function(nbR){
//       return this.roomsAvaible -= nbR
//     }
//     this.disponibilite = function(){
//       return this.roomsAvaible
//     }
//   }
// }

// let Novotel = new AccordHotel()
// Novotel.reservation(4)
// Novotel.name = "Le Peninsula"
// Novotel
// let GeorgesV = new AccordHotel("GerogesV")
// GeorgesV
class Personnage {
  constructor(name,work){
    this.name = name,
    this.work = work,
    this.life = 50,
    this.currentLife = this.life,
    this.inventaire = []
  }
   equip(item){
    this.inventaire.push(item)
  }
}
let sensei = new Personnage('Bob','Chevalier')
sensei.equip("sword")
console.log(sensei.inventaire);