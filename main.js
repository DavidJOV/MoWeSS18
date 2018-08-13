//AJAX
var $ = require("jquery");
var el = document.getElementById("clickMe");
if (el.addEventListener)
    el.addEventListener("click", ajax(), false);
else if (el.attachEvent)
    el.attachEvent('onclick', ajax());


function loadDoc() {
    console.log("HH")
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("witz").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "witz.json", true);
  xhttp.send();
}

function ajax(){
    console.log(22)
    $.ajax({
        url: "witz.json",
        
        success: function( result ) {
          $( "witz" ).html( "<strong>" + result + "</strong>" );
        }
      });
}

$.ajax({
  url: "witz.json",
  data: {
    zipcode: 97201
  },
  success: function( result ) {
    $( ".witz" ).html( "<strong>" + result + "</strong> degrees" );
  }
});