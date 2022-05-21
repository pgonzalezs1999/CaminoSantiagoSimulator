$(document).ready(function() {
    $.getJSON('usuarios.json', function(usuarios) {
        var output ="";
        $.each(usuarios.usuarios, function(key, val) {
            output += '<ul class="ul_user">';
            output += '<li>' + val.nombre + '</li>'; 
            output += '<li>' + val.pass + '</li>'; 
            output +='</ul>'; 
            output +='</li>';
        });
        console.log(output);
        $('body').append(output);
    });
});

function abrirCalendario()
{
    document.querySelector(".calendario").style.display = "block";
}

function cerrarCalendario()
{
    document.querySelector(".calendario").style.display = "none";
}