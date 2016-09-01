function randomize(){
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var i;
    var j;
    var huruf = [];

    for(i=0; i<16; i++){
      huruf.push(possible.charAt(Math.floor(Math.random() * possible.length)));
      console.log(huruf[i])
    }

    for(j=0; j<huruf.length; j++){
      document.getElementsByClassName("kotak")[j].innerHTML = huruf[j];
    }
}
