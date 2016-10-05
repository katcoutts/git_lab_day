var CasTigersApi = function(app){

  var casTigers = [{
    name: "Luke Dorn",
    position: "Full Back",
    height: "175 cm",
    image: "https://d3huroy24hmimh.cloudfront.net/media/1038.jpg"
  },
  {
    name: "Jake Webster",
    position: "Centre",
    height: "182 cm",
    image: "https://d3huroy24hmimh.cloudfront.net/media/1040.jpg"
  },
  {
    name: "Denny Solomona",
    position: "Winger",
    height: "190 cm",
    image: "https://d3huroy24hmimh.cloudfront.net/media/1042.jpg "
  },
  {
    name: "Michael Shenton",
    position: "Centre",
    height: "190 cm",
    image: "https://d3huroy24hmimh.cloudfront.net/media/1041.jpg"
  },
  {
    name: "Gadwin Springer",
    position: "Prop",
    height: "191 cm",
    image: " https://d3huroy24hmimh.cloudfront.net/media/1080.jpg"
  }
  ]
  
  app.get("/api/castigers", function(req,res){
    res.json({data: casTigers});
  })

}


module.exports = CasTigersApi;