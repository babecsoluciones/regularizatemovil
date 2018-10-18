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
