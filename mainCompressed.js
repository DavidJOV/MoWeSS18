function loadDoc(){var e=new XMLHttpRequest;e.onreadystatechange=function(){4==this.readyState&&200==this.status&&(document.getElementById("witz").innerHTML=this.responseText)},e.open("GET","witz.json",!0),e.send()}function calculate(){x=document.getElementById("op1").value,y=document.getElementById("op2").value,z=+x+ +y,alert("Das Ergebnis lautet "+z)}