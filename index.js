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

