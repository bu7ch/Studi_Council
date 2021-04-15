let player;

player = {
  name: "Jean",
  health: 50,
  place: "le donjon de la Mort",
};

showPlayerName =(name)=> console.log(name);
showPlayerPlace =(name,place)=> console.log(`${name} est dans ${place}`);
getPlayerHealth =(name,health)=> console.log(`${name} a ${health} vie!`);


getMessage=() => console.log("partons à l'aventure!!!");


showPlayerInfos = (name, place, health) =>{
  console.log("");
  showPlayerName(name);
  console.log("-----------------------------");
  showPlayerPlace(name,place)
  getPlayerHealth(name,health)
  console.log("-----------------------------");
console.log("");
}

console.log(getMessage());

showPlayerInfos(player.name, player.place, player.health)





