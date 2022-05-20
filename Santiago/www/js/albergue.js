$(document).ready(function() {
    $.getJSON('usuarios.json', function(usuarios) {
        var output ="";
        $.each(usuarios.usuarios, function(key, val) {
            output += '<ul class="ul_user">';
            /*output += '<li>';
            output += '<a href=';
            output += '"' + val.url + '">';
            output += '<img src="';
            output += val.foto + '" class="clip-circle">';
            output += '</a>';
            output +='</li>';*/
            output += '<li><h2 class="nombre_usuario">' + val.name + '</h2></li>'; 
            output += '<li>' + val.shortname + '</li>'; 
            output += '<li>' + val.dir + '</li>'; 
            output += '<li>' + val.bio + '</li>'; 
            output +='</ul>'; 
            output +='</li>';
        });
        console.log(output);
        $('.flexComentario').append(output);
    });
});

/*let fotos =
[
    "img/albergue01.jpg",
    "img/mirador01.jpg",
    "img/albergue02.jpg",
    "img/albergue03.jpg",
    "img/mirador02.jpg"
]*/

function abrirCalendario()
{
    document.querySelector(".calendario").style.display = "block";
}

function cerrarCalendario()
{
    document.querySelector(".calendario").style.display = "none";
}