let Nombre='Matias Raul';
let Apellido='Jaime';
let NombreCompleto=Nombre+' '+Apellido;
console.log('El nombre completo es: '+NombreCompleto)
let activo='false';
let falso=false;
let combinacion=activo+falso
console.log('El valor combinado es:'+combinacion)

let NotaAlumno=40;
if (NotaAlumno>=60) {
    console.log('El alumno aprueba la materia con: '+NotaAlumno)
} else {
    if (NotaAlumno>40){console.log('El alumno desaprobó la materia con: '+NotaAlumno)}
    else{
        console.log('El alumno debe esforzarse mas')
    }
    
}

let dia=1
switch (dia) {
    case 0:
        console.log('Es domingo')
        break;
    case 1:
        console.log('Es Lunes')
        break;
    case 2:
        console.log('Es Martes')
        break;
    case 3:
        console.log('Es Miercoles')
        break;
    case 4:
       console.log('Es Jueves')
        break;
 case 5:
       console.log('Es Viernes')
        break;
    
        case 6:
       console.log('Es Sabado')
        break;
    default:
        console.log('Valor fuera de rango')
    
}

let gasolina=10;
while (gasolina>0) {
    
    console.log('Se consumió un litro de gasolina: '+gasolina);
    gasolina--;
}

let base=10
let limite=20
for (let i = 0; i<=limite;i++) {
    let valor= i*base
    console.log(base+' X '+i+' = '+valor)
}