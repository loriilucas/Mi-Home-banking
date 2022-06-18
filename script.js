const cargarDolares = async()=>{
    let dolares='';
    try{
        const respuesta = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
        console.log(respuesta);
        const datos = await respuesta.json();
        console.log(datos);
        let dolares='';
        datos.forEach(casa => {
            peliculas += `<h1>${casa.casa.nombre} compra: $${casa.casa.compra} venta: $${casa.casa.compra} variacion:${casa.casa.variacion}</h1>` ;



        });
    document.getElementById('contenedor').innerHTML=dolares;
        }
    
    

    catch(error){
        console.log(error);
    }
}



cargarDolares();
