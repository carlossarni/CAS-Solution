const dolar = 255
//definir los descuento
let descuentoSeguidor;

descuentoSeguidor = 0.30;


//variables con las que vamos a trabajar

let formulario, nombre, apellido, correo, seguidor, cantidad, categoria, total_p, btnBorrar, btnResumen;

//elementos para calcular

formulario = document.querySelector('#formulario');
seguidor = document.querySelector('#seguidor');
cantidad = document.querySelector('#cantidad');
categoria = document.querySelector('#categoria');
total_p = document.querySelector('#totalAPagar');
total_pesos = document.querySelector('#totalAPagarenpesos');
btnResumen = document.querySelector('#resumen');
btnBorrar = document.querySelector('#borrar');

function calcularPago() {
    let total = 0 ;

    let totalbaja = 1960;
    let totalmedia = 3000;
    let totalpremium = 5000;
    //condicionar por descuento
    switch (categoria.value) {
        case "gamabaja":
            if(seguidor.value == "si" || seguidor.value == "SI" || seguidor.value == "Si" ){
                total = totalbaja - (totalbaja * descuentoSeguidor)
            }else{
            total = totalbaja
            }
            break;
        case "gamamedia":
            if(seguidor.value == "si" || seguidor.value == "SI" || seguidor.value == "Si"){
                total = totalmedia - (totalmedia * descuentoSeguidor)
            }else{
            total = totalmedia
            }
            break;
        case "gamapremium":
            if(seguidor.value == "si" || seguidor.value == "SI" || seguidor.value == "Si"){
                total = totalpremium - (totalpremium * descuentoSeguidor)
            }else{
            total = totalpremium
            }
            break;
    }


    total_p.innerHTML = `Total a Pagar:  ${total} U$S`;
    total_pesos.innerHTML = `Total a Pagar en Pesos: $ ${total * dolar}`;

}

//botones
btnResumen.addEventListener('click', (event) => {
    event.preventDefault();
    comprobacion();
    calcularPago();
})

btnBorrar.addEventListener('click', () => formulario.reset());

//comprobar ingresos

function comprobacion() {
    nombre = document.querySelector('input[placeholder="Nombre"]').value;
    apellido = document.querySelector('input[placeholder="Apellido"]').value;
    correo = document.querySelector('input[placeholder="Correo"]').value;

    if (nombre == '' && apellido == '' && correo == '') {
        alert('COMPLETA LOS CAMPOS');
        return
    }
    else if ( nombre == ''){
        alert('ingresa tu nombre')
        return
    }
    else if(apellido == ''){
        alert('ingresa tu apellido')
        return
    }
    else if(correo == ''){
        alert('ingresa tu correo')
        return
    }
    

}

