let res1 = getCookie("res1");
let res2 = getCookie("res2");
let res3 = getCookie("res3");

if(res1=="0" && res2=="0" && res3=="0")
{
    console.log("Entro a reser");
    document.getElementById("noReservas").textContent += "Ningún albergue reservado aún";
}

if(res1 == "1")
{
    anadirReservas("albergueInicio1.html", "img/albergue01.jpg", "Albergue A costa", "Ribadesella, Asturias");
}
if(res2 == "1")
{
    anadirReservas("albergueInicio2.html", "img/albergue02.jpg", "Albergue do Cebreiro", "Lugo, Galicia");
}
if(res3 == "1")
{
    anadirReservas("albergueInicio4.html", "img/albergue03.jpg", "Albergue Carmen Ramos", "Lugo, Galicia");
}

function anadirReservas(ruta, imagen, nombre, ubicacion)
{
    let output = '';
    output += '<a href="' + ruta + '" class="tarjetaSitio">';
    output += '<img class="imagenSitio" src="' + imagen + '" alt="Imagen del sitio">';
    output += '<div class="infoSitio">';
    output += '<p>' + nombre + '</p>';
    output += '<p>' + ubicacion + '</p>';
    output += '<p>Fecha de reserva: 17/08/2022</p>';
    output += '</div>';
    output += '</a>';
    $('body').append(output);
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