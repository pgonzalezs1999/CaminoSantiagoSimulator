
function validar(){
  var user = document.getElementById("fname").value;
  var pass = document.getElementById("lname").value;
  if(user == "miUser" && pass == "miPass"){
    alert("¡Bienvenido!");
    ruta = "principalBusqueda.html";
    document.getElementById("link").href = "principalBusqueda.html"
  }
  else{
    alert("Usuario o contraseña incorrectos");
  }
}