// let compteBloquee = false
// let userRole = 'user'

// if (!compteBloquee) {
//   console.log("Ce compte est bloquée");
// } else if(userRole === 'admin') {
//   console.log("Bonjour Administrator!!")
// } else {
//   console.log("Bonjour user");
// }

// let temperature = 45

// if (temperature >= 60 && temperature <= 90) {
//   console.log("Il fait chaud mais pas trop")
// } else {
//   console.log("C'est pour Delphine !!!")
// }

// if(temperature <= 0 || temperature >= 50 ) {
//   console.log("Il est conseillé de ne pas mettre le nez dehors");
// } else {
//   console.log("Vous faites bien ce que vous voulez !!!")
// }


let inviteVeganUn = true
let inviteVeganDeux = true

if(inviteVeganUn && inviteVeganDeux) {
  console.log("Il n'y a qu'un plat vegan");
}else if(inviteVeganUn || inviteVeganDeux) {
console.log("est-ce que vous voulez manger autre chose");
}else {
  console.log("Nous avons d'autres plats, si vous voulez");
}

