let avisado = false;
setCookie("a1", "0", 100);
setCookie("a2", "0", 100);
setCookie("a3", "0", 100);
setCookie("m1", "0", 100);
setCookie("m2", "0", 100);
setCookie("res1", "0", 100);
setCookie("res2", "0", 100);
setCookie("res3", "0", 100);

cookieUser = getCookie("nuevoUsername");
cookiePass = getCookie("nuevoPassword");
cookieEdad = getCookie("nuevaEdad");
console.log("User: " + cookieUser + ", Pass: " + cookiePass + ", Edad: " + cookieEdad);

function validar()
{
  var user = document.getElementById("fname").value;
  var pass = document.getElementById("lname").value;
  if(user == cookieUser && pass == cookiePass)
  {
    ruta = "principalBusqueda.html";
    document.getElementById("link").href = "principalBusqueda.html";
  }
  else
  {
    if(avisado == false)
    {
      let p = document.getElementById("p");
      let texto = document.createTextNode("Nombre de ususario o contraseña incorrectos");
      p.appendChild(texto);
      avisado = true;
    }
  }
}

function setCookie(cname, cvalue, exdays)
{
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname)
{
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++)
    {
        let c = ca[i];
        while (c.charAt(0) == ' ')
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0)
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}