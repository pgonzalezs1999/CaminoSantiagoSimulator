let a1 = getCookie("a1");
let a2 = getCookie("a2");
let a3 = getCookie("a3");
let m1 = getCookie("m1");
let m2 = getCookie("m2");
let res1 = getCookie("res1");
let res2 = getCookie("res2");
let res3 = getCookie("res3");

console.log("a1: " + a1);
console.log("a2: " + a2);
console.log("a3: " + a3);
console.log("m1: " + m1);
console.log("m2: " + m2);
console.log("res1: " + res1);
console.log("res2: " + res2);
console.log("res3: " + res3);

if(a1=="0" && a2=="0" && a3=="0" && m1=="0" && m2=="0")
{
    console.log("Entro a favs");
    document.getElementById("noFavoritos").textContent += "Ningún sitio marcado como favorito aún";
}
if(res1=="0" && res2=="0" && res3=="0")
{
    console.log("Entro a reser");
    document.getElementById("noReservas").textContent += "Ningún albergue reservado aún";
}

if(a1 == "1")
{
    anadirFavoritos("albergueInicio1.html", "img/albergue01.jpg", "Albergue A costa", "Ribadesella, Asturias");
}
if(a2 == "1")
{
    anadirFavoritos("albergueInicio2.html", "img/albergue02.jpg", "Albergue do Cebreiro", "Lugo, Galicia");
}
if(a3 == "1")
{
    anadirFavoritos("albergueInicio4.html", "img/albergue03.jpg", "Albergue Carmen Ramos", "Lugo, Galicia");
}
if(m1 == "1")
{
    anadirFavoritos("albergueInicio3.html", "img/mirador01.jpg", "Mirador Praias do Mar", "A Coruña, Galicia");
}
if(m2 == "1")
{
    anadirFavoritos("albergueInicio5.html", "img/mirador02.jpg", "Mirador Santiago Plaza", "Santiago, Galicia");
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
    $('#reservas').append(output);
}

function anadirFavoritos(ruta, imagen, nombre, ubicacion)
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
    $('#favoritos').append(output);
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