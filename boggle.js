var td = [].slice.call(document.querySelectorAll('td'))
function initialize(){
  var chars = [];
  for (var i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    var char = String.fromCharCode(i)
  //  console.log(char)
    chars.push(char)
  }
  var width = ~~document.getElementById("board-width").value
  var height = ~~document.getElementById("board-height").value
  var index = 0
  for (var i = 0; i < width; i++) {
    var row = document.getElementsByTagName('tr')[i]
    for (var j = 0; j < height; j++) {
      var idx = (~~(Math.random()*chars.length-1))+1
      var charb = chars[idx]
      td[index].innerHTML = charb
      console.log("idx "+(i+j)+"="+idx+"char ="+charb)
      index++
    }
  }
}
jQuery(document).ready(function(){
initialize()
var btn = document.getElementById("shake")
td.forEach(function addlistener(boogle) {
  boogle.addEventListener('click',function(){
    // console.log(this)
    if($(this).hasClass("clicked")){
      $(this).removeClass("clicked")
    } else{
      $(this).addClass("clicked")
    }
  })
});
btn.addEventListener('click',function(e){
  initialize()
  e.preventDefault()
})
});
