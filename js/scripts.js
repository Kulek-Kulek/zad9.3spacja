function drawTree(lvl){
 for (var i = 1; i <= lvl; i++) {
  var star = ''
  var space = '';
  for (var k = 0; k < lvl-i; k++) {
   space += " "
  }
  for (var j = 0; j < 2*i-1; j++) {
   star += "*"
    
  }
  console.log(space+star); 

 }
}

drawTree(20);