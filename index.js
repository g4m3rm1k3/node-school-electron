

var picture = require('cat-picture');
var image = require("lightning-image-poly");

var src = picture.src;
picture.remove();
var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});

function save(){
  var remote = require('electron').remote;
  var fs = require('fs');
  remote.getCurrentWebContents().printToPDF({
    portrait:true
  },function(err, data){
    fs.writeFile('annotation.pdf', data, function(err){
      if (err) alert('error getting pdf!', + err.message)
    })
  })
  
};
window.addEventListener('keydown', function(e){
  if (e.keyCode == 69){
    console.log(e.keyCode)
    save()
    };
});
