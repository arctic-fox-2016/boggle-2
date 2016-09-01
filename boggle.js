var board = []
var huruf = []
var temp  = []
var dimension = 4;


function randomHuruf(){
  //65.100
  return String.fromCharCode(Math.floor((Math.random() * 26) + 65));

}


function shake(){
  console.log("board");
  var baris = document.getElementById("baris").value
  var kolom = document.getElementById("kolom").value
  board=[]
  huruf=[]
  var tabel = ""
  tabel = "<table>"
  for(var a = 1 ; a<=baris ; a++){
    tabel = tabel += "<tr>"
    for(var b=1 ; b<=kolom ; b++){
       temp.push(randomHuruf())
       huruf.push(temp[b-1])
       tabel += "<td>"+temp[b-1]+"</td>"
    }
    tabel += "</tr>"
    board.push(temp)
    temp = []
  }
  tabel += "</table>"
  document.getElementById("tabelDiv").innerHTML = tabel
  console.log(board);
  return board
}

function cariKataIni(){
  var hurufOri =[]
  for (var a = 0 ; a<huruf.length ; a++){
    hurufOri.push(huruf[a])
  }
  var poin = 0
  var isFound = false
  var kata = document.getElementById("cariKata").value
  var hurufKata = kata.split("")

  console.log(hurufKata)
  console.log(hurufOri)
  console.log(huruf)
  for (var i=0; i<=hurufKata.length-1;i++){
    for (var j=0; j<=huruf.length-1;j++){
      if (hurufKata[i]==hurufOri[j]){
        poin = poin + 1
        hurufOri[j] = " "
        hurufKata[i]=" "
      }
    }
  }
  if (poin >= hurufKata.length){
    console.log("benar")
    console.log(poin)
    document.getElementById("hasil").innerHTML="SELAMAT! Kata yang anda masukkan terdapat dalam komponen boggle"

  } else {
    console.log("salah")
    console.log(poin)
    document.getElementById("hasil").innerHTML="MAAF! Kata yang anda masukkan tidak terdapat dalam komponen boggle"

  }
}
