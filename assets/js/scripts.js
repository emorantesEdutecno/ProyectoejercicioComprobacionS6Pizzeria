var nombreBebida=["Martini", "Capuccino", "Latte", "Mojito"];
var costoBebida=[2.550, 1.370, 1.350, 2.290];
var arregloIdProductosAdquiridos=[];
var totalAPagar = 0;


function calcularTotalAPagar(){
    // se inicializa el total a pagar cada vez que se llame el método para que tenga en cuenta solamente los valores del arreglo
    totalAPagar = 0;
    for(let i=0; i<arregloIdProductosAdquiridos.length; i++){
        let idInformacionBebida = arregloIdProductosAdquiridos[i];
        /*
        console.log('iteracion: ', i);
        console.log('total de elementos: ',arregloIdProductosAdquiridos.length );
        console.log('idInformacionBebida: ',idInformacionBebida);
        console.log('costoBebida:', costoBebida[idInformacionBebida]);
        console.log('tipo costoBebida', typeof costoBebida[idInformacionBebida]);
        console.log('totalAPagar antes de la acumulacion', totalAPagar);
        */
        totalAPagar = totalAPagar + Number(costoBebida[idInformacionBebida]);
        // console.log('totalAPagar despues de la acumulacion', totalAPagar);
    
    }
    // console.log('________________________________________________');
    return totalAPagar;
}


function verificarCheck(elemento){
    // console.log(elemento);
    // alert(elemento.target.value);
        
    let laCuentaItem = document.getElementById('cuentaItem');
    let laCuentaPrecio = document.getElementById('cuentaPrecio');
    let laCajaTotalAPagar = document.getElementById('cajaTotalAPagar');

    if(elemento.target.checked){
        arregloIdProductosAdquiridos.push(elemento.target.value);
        // console.log(arregloIdProductosAdquiridos);

        // muestro en la cuenta el último elemento agregado en el arreglo arregloIdProductosAdquiridos
        let idLaBebidaSeleccionada = arregloIdProductosAdquiridos[arregloIdProductosAdquiridos.length -1];
        let nombreBebidaSeleccionada = nombreBebida[idLaBebidaSeleccionada];
        let costoBebidaSeleccionada = costoBebida[idLaBebidaSeleccionada];

        let elParrafoNombreNuevo = document.createElement('p');
        elParrafoNombreNuevo.innerText =  nombreBebidaSeleccionada;
        laCuentaItem.appendChild(elParrafoNombreNuevo);

        let elParrafoCostoNuevo = document.createElement('p');
        elParrafoCostoNuevo.innerText = costoBebidaSeleccionada;
        laCuentaPrecio.appendChild(elParrafoCostoNuevo);
        
    }
    else{
        // identificar el id del producto des-seleccionado
        let idProductoDeseleccionado = elemento.target.value;
        // identificamos el indice del elemento desseleccionado en el arreglo arregloIdProductosAdquiridos
        let indiceElementoDeseleccionado = arregloIdProductosAdquiridos.indexOf(idProductoDeseleccionado);
        // console.log(indiceElementoDeseleccionado);
        // Elimino el elemento desseleccionado del arreglo arregloIdProductosAdquiridos usando splice
        arregloIdProductosAdquiridos.splice(indiceElementoDeseleccionado,1);
        // console.log(arregloIdProductosAdquiridos);
        // Elimino de la sección de la cuenta el elemento desseleccionado
        laCuentaItem.removeChild(laCuentaItem.children[indiceElementoDeseleccionado]);
        laCuentaPrecio.removeChild(laCuentaPrecio.children[indiceElementoDeseleccionado]);

    }

    let elTotal = calcularTotalAPagar()
    laCajaTotalAPagar.innerText = elTotal.toFixed(2);


}



function asignarEventos(){
    let elCheckMartini = document.getElementById('martini');
    elCheckMartini.addEventListener('click', verificarCheck);

    let elCheckCapuccino = document.getElementById('capuccino');
    elCheckCapuccino.addEventListener('click', verificarCheck);

    let elCheckLatte = document.getElementById('latte');
    elCheckLatte.addEventListener('click', verificarCheck)

    let elCheckMojito = document.getElementById('mojito');
    elCheckMojito.addEventListener('click', verificarCheck)
}