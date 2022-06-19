const cargarDolares = async()=>{
    let dolares='';
    //Se ejecuta una prueba
    try{
        const respuesta = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
        console.log(respuesta);
        const datos = await respuesta.json();
        console.log(datos);
    
        // Dolar oficial
        const box1=`<center class="titulo"> ${datos[0].casa.nombre}</center>  Compra: $${datos[0].casa.compra} <br>Venta: $${datos[0].casa.venta}<br>`;
        document.getElementById('box1').innerHTML=box1;
 
        const box2=`<center class="titulo"> ${datos[1].casa.nombre}</center>  Compra: $${datos[1].casa.compra} <br>Venta: $${datos[1].casa.venta}<br>`;
        document.getElementById('box2').innerHTML=box2;
        //Dolar 
        const box3=` <center class="titulo"> ${datos[3].casa.nombre}</center>  Compra: $${datos[3].casa.compra} <br>Venta: $${datos[3].casa.venta}<br>`;
        document.getElementById('box3').innerHTML=box3;
        //Dolar 
        const box4=`<center class="titulo"> ${datos[4].casa.nombre}</center>  Compra: $${datos[4].casa.compra} <br>Venta: $${datos[4].casa.venta}<br><`;
        document.getElementById('box4').innerHTML=box4;
        //Dolar 
        const box5=`<center class="titulo"> ${datos[6].casa.nombre}</center>  Compra: $${datos[6].casa.compra} <br>Venta: $${datos[6].casa.venta}<br>`;
        document.getElementById('box5').innerHTML=box5;
        //Dolar 
        const box6=`<center class="titulo"> ${datos[7].casa.nombre}</center>  Compra: $${datos[7].casa.compra} <br>Venta: $${datos[7].casa.venta}<br>`;
        document.getElementById('box6').innerHTML=box6;


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
