var boggle = $("#boggle");

var txt_x = $("#txt-x");
var txt_y = $("#txt-y");
var btn_process = $("#btn-process");
var boggle_table = $("#boggle-table");
var result_count = $("#result-count");
var result_table = $("#result-table");
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var def_x = def_y = 4;
var boogle_array = [];
var result_array = [];

var new_dictionary = [];


//var words = ["ABA","ABAD","ABADI","ABAH","ABAI"];
var words = ["ABA","ABAD","ZZZ"];

/*
function check_string(string){
  temp_string_1 = "";
  console.log("Word : " + string);
  for(var idx = 0; idx < string.length; idx++){
    temp_string_1 += string[idx];
    var flag_1 = false;
    console.log("Word char : " + temp_string_1);
    for(var idy = 0; idy < words.length; idy++){
      for(var idz = 0; idz < temp_string_1.length; idz++){
        var flag_2 = false;
        var temp_string_2 = "";
        for(var idw = 0; idw < temp_string_1.length; idw++){
          if(words[idy].length <= idw) break;
          temp_string_2 += words[idy][idw];
        }
        //if(temp_string_1 == temp_string_2) break;
        console.log("- " + temp_string_1 + " && " + temp_string_2);
        if(string.length == temp_string_2.length && string == words[idy]){
          //result_array[result_array.length] = string;
          return true; //break;
        }
        if(flag_2){flag_1 = true; break;}
      }
      if(flag_1){break;}
    }
  }
  return false;
}
*/

function check_string(full_string, current_string = null, array = []){
  console.log(full_string + " - " + current_string + "  " + array.length);

  if(!current_string) = full_string.charAt(0);
  var temp_array = array;
  var new_array = [];

  if(temp_array.length == 0) return true;

  // Function to minimize array - start
  for(var idx = 0; idx < temp_array.length; idx++){
    if(current_string[current_string.length-1] == temp_array[idx][current_string.length-1]){
      new_array[new_array.length] = temp_array[idx];
    }
  }
  // Function to minimize array - end

  // Function to add current_string - start
  var temp_current_string_length = current_string.length;
  if(temp_current_string_length < full_string.length){
    current_string += full_string.charAt(temp_current_string_length);
  }
  // Function to add current_string - end

  return check_string(full_string, current_string, new_array);
}

check_string("ABC", null, words);

/*
var test_text = "ABA";
for(var idx = 0; idx < test_text.length; idx++){
  check_string(test_text[idx]);
}
*/

function check(){
  var result_length = result_array.length;
  var result_length_text = result_length + " Word";

  if(result_length >= 2){
    result_length_text += "s";
  }
  result_count.html(result_length_text);

  for(var idx = 0; idx < boogle_array.length; idx++){
    for(var idy = 0; idy < boogle_array[idx].length; idy++){
      var temp_string = boogle_array[idx][idy];
      //if(check_string(temp_string))
    }
  }
}

//console.log(check_string("A"));
//console.log(result_array);

function init_table(){
  boggle_table.empty();
  for(var idx = 0; idx < def_x; idx++){
    boogle_array[idx] = [];
    boggle_table.append("<tr>");
    for(var idy = 0; idy < def_y; idy++){
      boogle_array[idx][idy] = alphabet[Math.floor(Math.random() * alphabet.length)];
      boggle_table.find("tr:last-child").append("<td>" + boogle_array[idx][idy] + "</td>");
    }
    boggle_table.append("</tr>");
  }
  setTimeout(function(){
    //check();
  }, 1000);
}

function init_process(){
  btn_process.unbind().on("click", function(event){
    event.preventDefault();
    var value_x = txt_x.val().trim();
    var value_y = txt_y.val().trim();

    def_x = value_x;
    def_y = value_y;
    init_table();
  });
}

$(function(){
  //init_table(); // function shake
  //init_process();
});
