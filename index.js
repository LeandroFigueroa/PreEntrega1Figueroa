
/* 

let nombre = prompt("Hola bienvenido al calculador de impuestos del servicio de Netflix para Republica Argentina. Cual es su nombre?");
alert( `Hola ${nombre}, los valores estan estimados a fecha 29/11/2022`)

let servicio = prompt ( "Ingrese por favor su tipo de suscripcion: Base, Standard o Premium").toLowerCase();
let resultado = 0;
let base = 699;
let standard = 1299;
let premium = 1899;
let tax = 0.75; 

while (servicio != "esc") {
    switch (servicio) {
        case "base":
            resultado = base * tax + base;
            alert("El valor de la suscripcion base con impuesto es $" + resultado);
            break
        case "standard":
            resultado = standard * tax + standard;
            alert("El valor de la suscripcion standard con impuesto es $" + resultado);
            break
        case "premium":
            resultado = premium * tax + premium;
            alert("El valor de la suscripcion premium con impuesto es $" + resultado);
            break
        default:
            console.log ("por favor elija una suscripcion valida")

    }
    servicio = prompt ( "Ingrese por favor su tipo de suscripcion: Base, Standard o Premium").toLowerCase();


} */


let welcome = "Hola bienvenido al calculador de impuestos del servicio de Netflix para Republica Argentina. Cual es su nombre?"
let name = prompt(welcome);
alert(`Hola ${name}, los valores estan estimados a fecha 29/11/2022`)

let service = prompt("Seleccione por favor el numero correspondiente a su tipo de suscripcion:  1:Base 2:Standard o 3:Premium").toLowerCase();
let resultado = 0,
    base = 699,
    standard = 1299,
    premium = 1899,
    tax = 0.75;

let text = (typeService, res) => {
    return `El valor de la suscripcion ${typeService} con impuesto es $${res}`
}

while (service != "esc") {
    switch (service) {
        case "1":
            resultado = base * tax + base;
            alert(text("base", resultado))
            break
        case "2":
            resultado = standard * tax + standard;
            alert(text("standard", resultado))
            break
        case "3":
            resultado = premium * tax + premium;
            alert(text("premium", resultado))
            break
        default:
            alert("Error, vuelva a escribir su servicio")
            break
        
    }
    service = prompt("Ingrese por favor su tipo de suscripcion:  1:Base 2:Standard o 3:Premium").toLowerCase();
}

