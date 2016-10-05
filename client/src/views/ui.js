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

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(team){
    var container = document.getElementById("players");

    for (var player of team){
      var li = document.createElement("li");
      this.appendText(li, player.name, "Name: ");
      container.appendChild(li);
    }  
  }
  
}

module.exports = UI;