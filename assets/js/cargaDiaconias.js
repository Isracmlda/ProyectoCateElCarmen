window.onload = specialsDomIncial;


function specialsDomIncial()
{
    callservice();  
    
}

var datos;
var urlapi="https://isracmlda.github.io/ProyectoCate/diaconias.json";
function callservice(){
$.ajax({
    url:urlapi,
    type: "get",
    datatype:"json",
    success: onSuccess,
    error: onError,
})

}

function onSuccess(data){
datos=data;
procesarDatos('Diaconia El Carmen');
}

function onError(jqXHR,tetStatus,errorThrow){
    alert("mensaje de error: "+errorThrow+"\nURL "+urlapi);
}

function procesarDatos(nombreDiaconia){

    let menuContainer=document.getElementById("info-diaconia-id");
    let htmlContainer="";


    datos.diaconias.forEach(diaconia => {
        if (diaconia.nombre==nombreDiaconia) {
            htmlContainer+= "<section id='about' class='notis'>";
            htmlContainer+= "<p class='tituloinside' data-aos='fade-up'>"+diaconia.nombre+" </p>";
            htmlContainer+= "<div id='demo' class='container-fluid carousel slide CarruselNivel text-center' data-aos='fade-up' data-bs-ride='carousel'>";
            htmlContainer+= "<div class='carousel-indicators'>";
            htmlContainer+= "<button type='button' data-bs-target='#demo' data-bs-slide-to='0' class='active'></button>";
            htmlContainer+= "<button type='button' data-bs-target='#demo' data-bs-slide-to='1'></button>";
            htmlContainer+= "<button type='button' data-bs-target='#demo' data-bs-slide-to='2'></button>";
            htmlContainer+= "</div>";
            htmlContainer+= "<div class='carousel-inner'>";
            htmlContainer+= "<div class='carousel-item active'>";
            htmlContainer+= "<img src="+ diaconia.imagen1+" alt='Imagen 1' class='d-block w-100' style='border-radius: 10px;'>";
            htmlContainer+= "</div>";
            htmlContainer+= "<div class='carousel-item'>";
            htmlContainer+= "<img src="+ diaconia.imagen2+" alt='Imagen 2' class='d-block w-100' style='border-radius: 10px;'>";
            htmlContainer+= "</div>";
            htmlContainer+= "<div class='carousel-item'>";
            htmlContainer+= "<img src="+ diaconia.imagen3+" alt='Imagen 3' class='d-block w-100' style='border-radius: 10px;'>";
            htmlContainer+= "</div>";
            htmlContainer+= "</div>";
            htmlContainer+= "<button class='carousel-control-prev' type='button' data-bs-target='#demo' data-bs-slide='prev'>";
            htmlContainer+= "<span class='carousel-control-prev-icon'></span>";
            htmlContainer+= "</button>";
            htmlContainer+= "<button class='carousel-control-next' type='button' data-bs-target='#demo' data-bs-slide='next'>";
            htmlContainer+= "<span class='carousel-control-next-icon'></span>";
            htmlContainer+= "</button>";
            htmlContainer+= "</div>";
            htmlContainer+= "</section>";
            htmlContainer+= "<section id='about' class='notis'>";
            htmlContainer+= "<div class='container ' data-aos='fade-up'>";
            htmlContainer+= "<p class='tituloinside'>Niveles que se imparten en esta diaconía</p>";
            htmlContainer+= "<div class='row gy-4'>";
            htmlContainer+= "<div class='d-flex align-items-middle' data-aos='fade-up' data-aos-delay='300'>";
            htmlContainer+= "<div class='content ps-0 ps-lg-5 formatoHover'>";
            htmlContainer+= "<ul>";
            if (diaconia.Primero!=undefined) {
                htmlContainer+= diaconia.Primero;  
            }
            if (diaconia.Segundo!=undefined) {
                htmlContainer+= diaconia.Segundo;  
            }
            if (diaconia.Tercero!=undefined) {
                htmlContainer+= diaconia.Tercero;  
            }
            if (diaconia.Cuarto!=undefined) {
                htmlContainer+= diaconia.Cuarto;  
            }
            if (diaconia.Quinto!=undefined) {
                htmlContainer+= diaconia.Quinto;  
            }
            if (diaconia.Sexto!=undefined) {
                htmlContainer+= diaconia.Sexto;  
            }
            if (diaconia.Confirma!=undefined) {
                htmlContainer+= diaconia.Confirma;  
            }
            htmlContainer+= "</ul>";
            htmlContainer+= "</div>";
            htmlContainer+= "</div>";
            htmlContainer+= "</div>";
            htmlContainer+= "</div>";
            htmlContainer+= "</section>";
            htmlContainer+= "<section id='about' class='notis'>";
            htmlContainer+= "<div class='container text-center' data-aos='fade-up'>";
            htmlContainer+= "<p class='tituloinside'>Ubicación en Google Maps</p>";
            htmlContainer+= diaconia.ubicacion;
            htmlContainer+= "</div>";
            htmlContainer+= "</section>";

        }
    });

    menuContainer.innerHTML = "";
    menuContainer.innerHTML = htmlContainer;
    console.log(htmlContainer);



    
}