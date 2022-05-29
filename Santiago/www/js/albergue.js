function abrirCalendario()
{
    document.querySelector(".calendario").style.display = "block";
}

function cerrarCalendario()
{
    document.querySelector(".calendario").style.display = "none";
}

let actual = 0;
let elector = document.getElementById("elector");
if(elector.textContent == "Albergue A costa")
{
    actual = "a1";
}
else if(elector.textContent == "Albergue do Cebreiro")
{
    actual = "a2";
}
else if(elector.textContent == "Albergue Carmen Ramos")
{
    actual = "a3";
}
else if(elector.textContent == "Mirador Praias do Mar")
{
    actual = "m1";
}
else if(elector.textContent == "Mirador Santiago Plaza")
{
    actual = "m2";
}
setCookie("actual", actual, 100);

function toogleFavorito()
{
    let favorito = document.getElementById("corazonFavorito");
    m1 = getCookie(actual);
    if(m1 == "0")
    {
        setCookie(actual, "1", 100);
        favorito.src = "img/corazonLleno.png";
    }
    else
    {
        setCookie(actual, "0", 100);
        favorito.src = "img/corazonVacio.png";
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