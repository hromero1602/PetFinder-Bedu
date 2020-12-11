// Variables
const resultados = document.querySelector ('#resultados');



//Eventos
document.addEventListener('DOMContentLoaded',()=> {
    mostrarMascotas();
})
//Funciones
function mostrarMascotas(){
mascotas.forEach ( mascota => {

    const {tipo, raza, tamaño, color, zona, nombre} = mascota;
    const mascotaHTML = document.createElement('p');

    mascotaHTML.textContent= `${tipo} - ${raza} - ${color} - ${nombre} - ${tamaño} - ${zona} 
    `;
    //Insertar en el HTML 

coincidencias.appendChild(mascotaHTML)

})
}
