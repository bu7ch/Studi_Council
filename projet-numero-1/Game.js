const spacer  = { 
  blank:function (){
    return "";
  },
  newline:function (){
    return "\n";
  },
  line:function (length, character){
    let longString = "*********************************";
    longString += "------------------------------------";
    longString += '======================================';
    longString += "+++++++++++++++++++++++++++++++++++++++";
    longString += "";

    length = Math.max(0, length);
    length = Math.min(40, length);
    return longString.substr(longString.indexOf(character), length);
  },
  wrap: function (text, length, character){
    let padLength = length - text.length -3;
    let wrapText = character + " " + text;
    wrapText += spacer.line(padLength, " ");
    wrapText += character;
    return wrapText
  },
  box:function(text, length, character){
    let boxText = spacer.newline();
    boxText += spacer.line(length, character) + spacer.newline();
    boxText += spacer.wrap(text, length, character) + spacer.newline();
    boxText += spacer.line(length, character) + spacer.newline();
    return boxText
  }
}
const Place = function (title, description){
  let newLine = spacer.newline();

  this.title = title;
  this.description = description;
  this.items = [];
  this.exits = [];
  

  this.getItemsInfos = function () {
    let itemsString = "Items :" + newLine;
    this.items.forEach(function (item){
      itemsString += " - " + item;
      itemsString += newLine;
    })
    return itemsString;
  }

  this.getExistInfos = function () {
    let existInfo = "Exist from " + this.title;
    existInfo += ":" + newLine
    this.exits.forEach(function(exit){
      existInfo += " -" + exit.title
      existInfo += newLine
    })
    return existInfo
  }
  this.getTitleInfos = function() {
    return spacer.box(this.title, this.title.length + 4, "*" )
  }

  this.getInfo = function() {
    let infoString = this.getTitleInfos()
    infoString += this.description
    infoString += newLine + newLine
    infoString += this.getItemsInfos() + newLine
    infoString += this.getExistInfos();
    infoString += spacer.line(40, '=') + newLine
    return infoString
  }
  this.showInfos = function() {
    console.log(this.getInfo());
  }
  this.addItem = function(item) {
      this.items.push(item)
  }
  this.addExit = function(exit){
    this.exits.push(exit)
  }

  this.showInfo = function() {
    console.log(this.getInfo());
  }
}

const Player = function(name, health){
  let newLine = spacer.newline();

  this.name = name
  this.health = health
  this.items = [];
  this.place = null;

  this.addItem = function(item){
    this.items.push(item);
  }
  this.getNameInfos = function() {
    return  this.name
  }
  this.getHealthInfos = function() {
    return this.name + 'has health ' + this.health
  }

  this.getPlaceInfos = function() {
    return this.name + ' is in ' + this.place
  }

  this.getItemsInfos = function() {
    let itemString = "Items: " + newLine
    this.items.forEach(function(item){
      itemString += " - " + item + newLine
    })
    return itemString
  }

  this.getInfos = function(character) {
    let place = this.getPlaceInfos()
    let health = this.getHealthInfos()
    let longest = Math.max(place.length, health.length) + 4

    let info = spacer.box(this.getNameInfos(), longest, character)

    info += spacer.wrap(place, longest, character)
    info += newLine + spacer.wrap(health, longest, character)
    info += newLine + spacer.line(longest,character)

    info += newLine 
    info += " " + this.getItemsInfos()
    info += newLine
    info += spacer.line(longest, character)
    info += newLine

    return info

  }

  this.showInfo = function(character) {
    console.log(this.getInfos(character));
  }
}


// Contrôle du Jeu

const render = function() {
  console.clear()
  player.place.showInfo()
  player.showInfo("*")
}

const go = function(direction){
  let place = player.place
  let destination = place.exits[direction]
  player.place = destination
  render()
  return ""
}

let rampe = new Place("L'entrée", "vous accedez a une rampe inclinée.....")

let corridor = new Place("Le Coridor", " Cest un long couloir qui parcours le vaisseau")

let hub = new Place("Le Centre", "Un espace spacieux ou on est aime se detendre")

let pit = new Place("L'espace de maintenance", " c'est ici que nous effecuons des reparations")
const bench = new Place("L'espace de Jeu", 'Pour jouer pres du Hub')

hub.addItem('Droïd')
corridor.addItem('Tapis')
bench.addItem('flipper')
pit.addItem('clé à molette')
rampe.addExit("haut", corridor)
corridor.addExit('continue', pit)


const player = new Player('Bob', 50)
player.addItem('Blaster')
player.place = rampe

render()