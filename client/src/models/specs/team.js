var Player = require("./player.js");

var Team = function(){

}

Team.prototype = {
  all: function(onCompleted){
    var self = this;

    var url = "http://localhost:3000/api/castigers";
    this.makeRequest(url, function(){
      if(this.status != 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);

      var team = self.populateTeam(results);
      onCompleted(team);
    })
  }
}