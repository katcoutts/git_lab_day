/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var UI = __webpack_require__(1);
	
	var app = function(){
	  new UI();
	}
	
	window.onload = app;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Team = __webpack_require__(2)
	
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
	      this.appendText(li, player.position, "Positon: ");
	      this.appendText(li, player.height, "Height: ");
	      container.appendChild(li);
	    }  
	  }
	  
	}
	
	module.exports = UI;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Player = __webpack_require__(3);
	
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
	
	      var team = self.populateTeam(results.data);
	      onCompleted(team);
	    })
	  },
	  populateTeam: function(results){
	    var team =[];
	    console.log(results);
	    for(var result of results){
	      var player = new Player(result);
	      team.push(player);
	    }
	    return team;
	  },
	  makeRequest: function(url, callback){
	    var request = new XMLHttpRequest();
	    request.open("GET", url);
	    request.onload = callback;
	    request.send();
	  }
	}
	
	module.exports = Team;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var Player = function(options){
	  this.name = options.name;
	  this.position = options.position;
	  this.height = options.height;
	  this.image = options.image;
	}
	
	module.exports = Player;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map