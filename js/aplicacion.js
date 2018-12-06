function buscarNegocio(codigo)
{
    localStorage.setItem("codigo",codigo);
    window.location = "detalles.html";
}

function pedirNegocio(codigo)
{
    document.getElementById('codigo').value = localStorage.getItem("codigo",codigo);
    toJSONString('test','res');
    localStorage.removeItem("codigo");
}

function verVacante(codigo)
{
    localStorage.setItem("codigoVacante",codigo);
    window.location = "vacante.html";
}

function pedirVacante(codigo)
{
    document.getElementById('codigo').value = localStorage.getItem("codigoVacante",codigo);
    toJSONString('test','res');
    localStorage.removeItem("codigoVacante");
}

function verPromocion(codigo)
{
    localStorage.setItem("codigoPromocion",codigo);
    window.location = "promocion.html";
}

function pedirPromocion(codigo)
{
    document.getElementById('codigo').value = localStorage.getItem("codigoPromocion",codigo);
    toJSONString('test','res');
    localStorage.removeItem("codigoPromocion");
}

function fnRedirigir(enlace)
{
    window.location = enlace;
}

//validamos usuario


function validarUsuario()
{
    var usuario = localStorage.getItem("codigoUsuario",codigo);
    
    var btnUsuario = document.getElementById('btnUsuario'),
        lnkUsuario = document.getElementById('lnkUsuario'),
        logout = document.getElementById('logout'),
        signup = document.getElementById('signup');
    if(usuario)
    {
        if(btnUsuario)
            {
                btnUsuario.innerHTML = '<div class="icon"><i class="fa fa-sign-in pomeg"></i></div>Mi Portal';
                btnUsuario.href="miportal.html";
                signup.style.display = 'none';
            }
        if(lnkUsuario)
            {
                lnkUsuario.innerHTML = '<i class="fa fa-sign-in belize"></i>Mi Portal</a>';
                lnkUsuario.href="miportal.html";
                logout.style.display = 'inline';
            }
    } 
    else
        {
           if(btnUsuario)
            {
                btnUsuario.innerHTML = '<div class="icon"><i class="fa fa-sign-in pomeg"></i></div>Iniciar Sesi&oacute;n';
                btnUsuario.href="sign-in.html";
            }
        if(lnkUsuario)
            {
                lnkUsuario.innerHTML = '<i class="fa fa-sign-in belize"></i>Iniciar Sesi&oacute;n</a>';
                lnkUsuario.href="sign-in.html";
                logout.style.display = 'none';
            } 
        }
}

function datosUsuario()
{
    document.getElementById('codigoUsuario').value = usuario;
    toJSONString('test','res');
}

function cerrarSesion()
{
    localStorage.removeItem("codigoUsuario");
    window.location="index.html";
}
