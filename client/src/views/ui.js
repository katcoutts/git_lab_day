var Team = require('../models/team.js')

var UI = function(){
  var team = new Team();
  team.all(function(result){
    this.render(result);
  }.bind(this));
}

UI.prototype = {

  createText: function(text, label){
    var p = document.createElement("p");
    p.innerText = label + text;
    return p;
  },

  appendImage: function(element, url){
    var img = document.createElement("img");
    img.src = url;
    img.width = 550;
    img.height = 250;
    element.appendChild(img);
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(team){
    var container = document.getElementById("players");

    for (var player of team){
      var li = document.createElement("li");
      this.appendText(li, player.name, "Name: ");
      this.appendText(li, player.position, "Positon: ");
      this.appendText(li, player.height, "Height: ");
      this.appendImage(li, player.image);
      container.appendChild(li);
    }  
  }
  
}

module.exports = UI;