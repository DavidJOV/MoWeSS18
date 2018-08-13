//AJAX


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("witz").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "witz.json", true);
  xhttp.send();
}
/*
function ajax(){
    console.log(22)
    $.ajax({
        url: "http://localhost:3000/witz.json",
        
        success: function( result ) {
          $( "witz" ).html( "<strong>" + result + "</strong>" );
        }
      });
}*/

