var Player = require('../player');
var assert = require('assert');

describe('Player', function(){

  var player;

  before(function(){
    player = new Player({
      name: "Gadwin Springer",
      position: "Prop",
      height: 191
    });
  });

  it('should have a name', function(){
    assert.equal("Gadwin Springer", player.name);
  })

  it('should have a position', function(){
    assert.equal("Prop", player.position);
  })

  it('should have a height', function(){
    assert.equal(191, player.height);
  })

});