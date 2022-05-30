let p1 = document.getElementById("usern");
let p2 = document.getElementById("nombre");
let p3 = document.getElementById("edad");
let texto1 = document.createTextNode(getCookie("nuevoUsername"));
let texto2 = document.createTextNode(getCookie("nuevoNombre"));
let texto3 = document.createTextNode(getCookie("nuevaEdad"));
p1.appendChild(texto1);
p2.appendChild(texto2);
p3.appendChild(texto3);

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