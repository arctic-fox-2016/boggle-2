function shake()
{
  possible = "ABCDEFGH I JKLMNOPQRSTUVWXYZ";
  var i;
  var j;
  huruf = [];
  for (var i = 0; i < 16; i++) {
    huruf.push(possible.charAt(Math.floor(Math.random()*possible.length)))
    console.log(huruf[i]);
  }
  for (var j = 0; j < huruf.length; j++) {
    document.getElementsByClassName('number')[j].innerHTML= huruf[j];
  }

}
