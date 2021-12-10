$( document ).ready(function() {
    console.log( "Estas en el perfil ADMIN" );
    init();
});
function init()
{
    var d_user = JSON.parse(sessionStorage.getItem('miUser'));
    console.log("Nombre usuario "+d_user.name);
    $(".miNombreUsuario").html(d_user.name);
}