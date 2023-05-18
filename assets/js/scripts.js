var nombreBebida=["Martini", "Capuccino", "Latte", "Mojito"];
var costoBebida=[2.550, 1.370, 1.350, 2.290];
var arregloIdProductosAdquiridos=[];
var totalAPagar = 0;


var nombreComida=["Insalata de riso", "Insalata ai cipollotti", "Insalata caprese"];
var costoComida=[6.750, 5.990, 8.250];
var arregloIdProductosAdquiridosComida=[];
var totalAPagarComida = 0;


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


function calcularTotalAPagarComida(){
    // se inicializa el total a pagar cada vez que se llame el método para que tenga en cuenta solamente los valores del arreglo
    totalAPagarComida = 0;
    for(let i=0; i<arregloIdProductosAdquiridosComida.length; i++){
        let idInformacionComida = arregloIdProductosAdquiridosComida[i];
        /*
        console.log('iteracion: ', i);
        console.log('total de elementos: ',arregloIdProductosAdquiridos.length );
        console.log('idInformacionBebida: ',idInformacionBebida);
        console.log('costoBebida:', costoBebida[idInformacionBebida]);
        console.log('tipo costoBebida', typeof costoBebida[idInformacionBebida]);
        console.log('totalAPagar antes de la acumulacion', totalAPagar);
        */
        totalAPagarComida = totalAPagarComida + Number(costoComida[idInformacionComida]);
        // console.log('totalAPagar despues de la acumulacion', totalAPagar);
    
    }
    // console.log('________________________________________________');
    return totalAPagarComida;
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



function verificarCheckComida(elemento){
    // console.log(elemento);
    // alert(elemento.target.value);
        
    let laCuentaItemComida = document.getElementById('cuentaItemComida');
    let laCuentaPrecioComida = document.getElementById('cuentaPrecioComida');
    let laCajaTotalAPagarComida = document.getElementById('cajaTotalAPagarComida');

    if(elemento.target.checked){
        arregloIdProductosAdquiridosComida.push(elemento.target.value);
        // console.log(arregloIdProductosAdquiridos);

        // muestro en la cuenta el último elemento agregado en el arreglo arregloIdProductosAdquiridos
        let idLaComidaSeleccionada = arregloIdProductosAdquiridosComida[arregloIdProductosAdquiridosComida.length -1];
        let nombreComidaSeleccionada = nombreComida[idLaComidaSeleccionada];
        let costoComidaSeleccionada = costoComida[idLaComidaSeleccionada];

        let elParrafoNombreNuevoComida = document.createElement('p');
        elParrafoNombreNuevoComida.innerText =  nombreComidaSeleccionada;
        laCuentaItemComida.appendChild(elParrafoNombreNuevoComida);

        let elParrafoCostoNuevoComida = document.createElement('p');
        elParrafoCostoNuevoComida.innerText = costoComidaSeleccionada;
        laCuentaPrecioComida.appendChild(elParrafoCostoNuevoComida);
        
    }
    else{
        // identificar el id del producto des-seleccionado
        let idProductoDeseleccionadoComida = elemento.target.value;
        // identificamos el indice del elemento desseleccionado en el arreglo arregloIdProductosAdquiridos
        let indiceElementoDeseleccionadoComida = arregloIdProductosAdquiridosComida.indexOf(idProductoDeseleccionadoComida);
        // console.log(indiceElementoDeseleccionado);
        // Elimino el elemento desseleccionado del arreglo arregloIdProductosAdquiridos usando splice
        arregloIdProductosAdquiridosComida.splice(indiceElementoDeseleccionadoComida,1);
        // console.log(arregloIdProductosAdquiridos);
        // Elimino de la sección de la cuenta el elemento desseleccionado
        laCuentaItemComida.removeChild(laCuentaItemComida.children[indiceElementoDeseleccionadoComida]);
        laCuentaPrecioComida.removeChild(laCuentaPrecioComida.children[indiceElementoDeseleccionadoComida]);

    }

    let elTotalComida = calcularTotalAPagarComida();
    laCajaTotalAPagarComida.innerText = elTotalComida.toFixed(2);


}



function asignarEventos(){
    let elCheckMartini = document.getElementById('martini');
    elCheckMartini.addEventListener('click', verificarCheck);

    let elCheckCapuccino = document.getElementById('capuccino');
    elCheckCapuccino.addEventListener('click', verificarCheck);

    let elCheckLatte = document.getElementById('latte');
    elCheckLatte.addEventListener('click', verificarCheck);

    let elCheckMojito = document.getElementById('mojito');
    elCheckMojito.addEventListener('click', verificarCheck);

    let elCheckRiso = document.getElementById('riso');
    elCheckRiso.addEventListener('click', verificarCheckComida);

    let elCheckCipollotti = document.getElementById('cipollotti');
    elCheckCipollotti.addEventListener('click', verificarCheckComida);

    let elCheckCaprese = document.getElementById('caprese');
    elCheckCaprese.addEventListener('click', verificarCheckComida);
    
}