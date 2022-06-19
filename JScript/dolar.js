const cargarDolares = async()=>{
    let dolares='';
    //Se ejecuta una prueba
    try{
        const respuesta = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
        console.log(respuesta);
        const datos = await respuesta.json();
        console.log(datos);
        // Dolar oficial
        box1=`<div class="box1 dolares"> <center class="titulo"> ${datos[0].casa.nombre}</center>  Compra: $${datos[0].casa.compra} <br>Venta: $${datos[0].casa.venta}<br><div>`;
        document.getElementById('contenedor').innerHTML=box1;
        //Dolar 
        //Dolar 
        //Dolar 
        //Dolar 
        





        /*
        let dolares='';
        datos.forEach(casa => {
            dolares += `<h1>${casa.casa.nombre}</h1>`;



        });
    document.getElementById('contenedor').innerHTML=dolares;
        */}
    
    //Muestra si hay un error en la ejecucion y muestra cual es
    catch(error){
        console.log(error);
    }
}



cargarDolares();
