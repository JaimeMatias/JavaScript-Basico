function ConvertirLB(libras) {
    return  libras/2.220462
}
function ConvertirKm(km) {
    return km/0.62
    
}

function ObtenerAreaTriangulo(base,altura){
    return base*altura/2
}

function ObtenerMayor(numeros){
    mayor=0
    for (let i = 0; i < numeros.length; i++) {
        
        element = numeros[i]
        if (element>mayor){
            mayor=element
        }

    }
    return mayor
}


function ImprimirPares(numeros){
    
    for (let i = 0; i < numeros.length; i++) {
        
        element = numeros[i]%2
       
        if (element==1){
            console.log(`${numeros[i]} es un numero impar`)
        }
        else{
            console.log(`${numeros[i]} es un numero par`)
        }
    }
    
}
function ImprimirTabla(numero,longitud){
    for (let i = 1; i <=numero; i++) {
        let salida=''
        for (let j = 1; j <=longitud; j++) {
            salida=salida+i*j+' '
            
        }
        console.log(salida)
        
    }
}

function Max(num1,num2,num3){
    arreglo=[num1,num2,num3]
    return ObtenerMayor(arreglo)
}

function NombreLargo(arreglo){
    longitud=0
    nombre=''
    for (let i = 0; i < arreglo.length; i++) {
        element = arreglo[i].length;
        if (longitud<element){
            longitud=element
            nombre=arreglo[i]
        }
    }
    return nombre
}

function FiltrarPorLetra(arreglo,letra){
    nombres=''

    for (let i = 0; i < arreglo.length; i++) {
        element=arreglo[i]
        
        if (element[0]==letra) {
            nombres=nombres+element+' '
        }
        
    }

    return nombres
}


let lib=200
let conv= ConvertirLB(lib)
console.log(conv)
let km=15
let kd=100
let resultado=ConvertirKm(kd)
console.log(resultado)
let base=10
let altura=10
resultado=ObtenerAreaTriangulo(base,altura)
console.log(resultado)

let numeros=[1,6,8,4,2,7,10,3,5]
resultado=ObtenerMayor(numeros)
console.log(resultado)
ImprimirPares(numeros)
ImprimirTabla(5,5)
console.log(Max(5,2,3))
Nombre=['matias','marta','marcelo','juan']
let heroe=NombreLargo(Nombre)
console.log(heroe)
heroescon=FiltrarPorLetra(Nombre,'m')
console.log(heroescon)