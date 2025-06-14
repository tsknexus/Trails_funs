
function getinput(){

var name = document.getElementById("Name");

var inputvalue = name.value;

document.body.innerHTML = `
<h1>Welcome la Punda🌸</h1>
<p id="vanakam"> </p>`

document.getElementById("vanakam").innerHTML = "Vaanga "+ inputvalue;

}