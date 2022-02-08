function MostrarDatosPersona(persona) {
    salida=`${persona.nombre} tiene una edad de ${persona.edad} y una altura de ${persona.estatura}`
    console.log(salida)
};
let persona1={
    nombre:'Matias',
    edad:25,
    estatura:1.75
};

let persona2={
    nombre:'Raul',
    edad:30,
    estatura:1.90
};


let persona3={
    nombre:'Maria',
    edad:25,
    estatura:1.60
};

let personas=[persona1,persona2,persona3];
for (let i = 0; i <personas.length; i++) {
   MostrarDatosPersona(personas[i]);
    
}


class Carro {
    constructor(marca,tipo,puertas){
        this.marca=marca;
        this.tipo=tipo;
        this.puertas=puertas;
        this.encendido=false;
        this.gasolina=100;
    }
    EncenderCarro(){
        if (this.encendido) {
            console.log('Vehiculo ya Encendido')
        }
        else{
            this.encendido=true;
            console.log('Encendiendo Vehiculo')
        }
    }

    ApagarCarro(){
        if (this.encendido) {
            console.log('Apagando Vehiculo')
            this.encendido=false
        }
        else{
            console.log('Venhiculo ya apagado')
        }
    }
    
    RealizarViaje(consumo){
        if (this.encendido && consumo<=this.gasolina) {
            this.gasolina=this.gasolina-consumo;
            return`Le queda: ${this.gasolina}`    
        }else{
            console.log('No se puede realizar el viaje')
            if(consumo>this.gasolina){
                console.log(`El consumo ${consumo} es mayor que la reserva ${this.reserva}`)
            }else{
                console.log('El vehiculo está apagado')
            }
        }
        
    }
}

let carro1=new Carro('Toyota','Sedan',3)
carro1.ApagarCarro()
carro1.EncenderCarro()
carro1.RealizarViaje(101)
carro1.ApagarCarro()