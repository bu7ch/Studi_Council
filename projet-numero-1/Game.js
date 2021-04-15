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
    return spacer.box(this.title, this.title.length + 4, "=" )
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

}

let bibliotheque = new Place("La vieille Bibliotheque", "Une bibliotheque avec de tres vieux livres")

let cuisine = new Place("Une Cuisine","une cuisine avec une odeure particulière" )

let hall = new Place("Le Hall Principal", "Un vaste hall, etrangement vide!")

bibliotheque.addItem("une clé")
bibliotheque.addExit(cuisine)
bibliotheque.addExit(hall)

console.log(bibliotheque.showInfos());