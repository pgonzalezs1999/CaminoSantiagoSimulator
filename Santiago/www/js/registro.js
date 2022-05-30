function validar()
{
  let username = document.getElementById("form1").value;
  let nombre = document.getElementById("form2").value;
  let correo = document.getElementById("form3").value;
  let edad = document.getElementById("form4").value;
  edad = esNumero(edad);
  let pass1 = document.getElementById("form5").value;
  let pass2 = document.getElementById("form6").value;
  
  if(username != "" && nombre != ""  && correo != ""  && edad != ""  && pass1 != ""  && pass2 != "")
  {
    if(username.indexOf(' ') == -1)
    {
      if(!contieneNumeros(nombre))
      {
        if(nombre.indexOf(' ') > -1)
        {
          if(correo.indexOf('@') > -1 && correo.indexOf('.') > -1 && correo.indexOf(' ') == -1)
          {
            if(edad != -1)
            {
              if(edad >= 18)
              {
                if(pass1 == pass2)
                {
                  document.getElementById("link").href = "registroCorrecto.html";
                  setCookie("nuevoUsername", username, 100);
                  setCookie("nuevoNombre", nombre, 100);
                  setCookie("nuevoCorreo", correo, 100);
                  setCookie("nuevaEdad", edad, 100);
                  setCookie("nuevoPassword", pass1, 100);
                }
                else { devolverError("La contraseña y la confirmación no coinciden"); }
              }
              else { devolverError("Debes ser mayor de edad para registrarte"); }
            }
            else { devolverError("La edad debe ser introducida como número"); }
          }
          else { devolverError("Formato de correo no válido"); }
        }
        else{ devolverError("Por favor, introduce tanto nombre como apellidos"); }
      }
      else{ devolverError("Los nombres no contienen números"); }
    }
    else{ devolverError("El nombre de usuario no puede tener espacios"); }
  }
  else{ devolverError("Deben rellenarse todos los campos"); }
}

function esNumero(nuevaEdad)
{
  if(isNaN(nuevaEdad) == false && nuevaEdad != "") { return nuevaEdad; }
  else { return -1; }
}

function contieneNumeros(frase)
{
  return !isNaN(parseFloat(frase)) && isFinite(frase);
}

function devolverError(mensaje)
{
  let p = document.getElementById("p");
  p.innerHTML = "";
  let texto = document.createTextNode(mensaje);
  p.appendChild(texto);
}

function setCookie(cname, cvalue, exdays)
{
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}