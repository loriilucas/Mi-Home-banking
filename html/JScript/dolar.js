const cargarDolares = async()=>{
    //Se ejecuta una prueba
    try{
        const respuesta = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
        console.log(respuesta);
        const datos = await respuesta.json();
        console.log(datos);
    
        // Dolar oficial
        const box1=`<center class="titulo"> ${datos[0].casa.nombre}</center> <p> Compra: $${datos[0].casa.compra} <br>Venta: $${datos[0].casa.venta} </br>
        Variacion: ${datos[0].casa.variacion}% </p>`;
        document.getElementById('box1').innerHTML=box1;
        //Dolar blue
        const box2=`<center class="titulo"> ${datos[1].casa.nombre}</center> <p> Compra: $${datos[1].casa.compra} <br>Venta: $${datos[1].casa.venta} 
        <br>Variacion: ${datos[1].casa.variacion}% </p>`;
        document.getElementById('box2').innerHTML=box2;
        //Dolar con liquidacion
        const box3=` <center class="titulo"> ${datos[3].casa.nombre}</center> <p> Compra: $${datos[3].casa.compra} <br>Venta: $${datos[3].casa.venta}
        <br>Variacion: ${datos[3].casa.variacion}% </p>`;
        document.getElementById('box3').innerHTML=box3;
        //Dolar
        const box4=`<center class="titulo"> ${datos[7].casa.nombre}</center> <p> Compra: $${datos[7].casa.compra} <br>Venta: $${datos[7].casa.venta}
        <br>Variacion: ${datos[0].casa.variacion}% </p>`;
        document.getElementById('box4').innerHTML=box4; 
        //Dolar Bolsa
        const box5=`<center class="titulo"> ${datos[4].casa.nombre}</center> <p> Compra: $${datos[4].casa.compra} <br>Venta: $${datos[4].casa.venta}
        <br>Variacion: ${datos[4].casa.variacion}% </p>`;
        document.getElementById('box5').innerHTML=box5;
        //Dolar turista
        const box6=`<center class="titulo"> ${datos[6].casa.nombre}</center> <p>  Compra: ${datos[6].casa.compra} <br>Venta: $${datos[6].casa.venta}
        <br>Variacion: ${datos[6].casa.variacion}% </p>`;
        document.getElementById('box6').innerHTML=box6;

    }
    //Muestra si hay un error en la ejecucion y muestra cual es
    catch(error){
        console.log(error);
    }
}

cargarDolares();
