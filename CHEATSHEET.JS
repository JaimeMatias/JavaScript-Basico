//VARIABLES
//La forma de definir las variables es con la palabra reservada Let
    //let f=90;
//No se puede definir 2 veces la misma variable, eso da error
    //let nombre='Matias'
    //let nombre='Jaime'
    //Esto genera error
// NO puede iniciarse el nombre de una variable con un NUMERO
//NO puede contener caracteres especiales( salvo _ y $)
// Usar CamelCase: NombreCompleto
// LowerCamelCasas: nombreCompleto

//TIPOS
//Number:
    //Let salario=1500;
    //Para incrementar en 1 unidad una variable o disminuir en una unidad 1 variable se utiliza la sintaxis= ++  o --
    //var++; incrementa en 1
// Strings:
    //Let nombre= "Fernando Herrera",
    // Para concatenar Strings se utiliza el signo +
// Booleans:
    //Let activo=true; (Que las variables boleanas sean definidas en positivo)


//Operacion con String
//Para concatenerar strings se utiliza el singo +
    //Nombre1='Matias' Apellido='Jaime'
    //Salida= Nombre1+Apellido
// Si se suma un string y un booleano, el booleano cambia su valor por un string
    //let activo='false';falso=false;
    //salida= activo+falso='falsefalse'

//Operacion con Booleanos
//Cuan se realiza la suma de variables booleanas, si hay qu tenga valor true, el resultado es 1(independiente de cuantos true existan), si no hay ninguno devuelve 0
    //var1=true var2=false var3=true
    //salida=var1+var2+var3=1

//Operacion con Areglos
//Let arreglo=[var1,var2,var3]
//Comienza en el indice 0

//-----------------------------------------------------------------------------------------------
//Estructura de Control:
//Formato de estructura del condicional
    //if (condition) {
    //    
    //} else {
    //    
    //}
// Existe el elif:
    // else if



//Condicional Switch
//switch (key) {
//    case value:
//        
//       break; El break es fundamental para, ya que le indica al flujo que deje de analizar lo que está abajo y termine el condicional
//
//    default: El default se utiliza para cualquier valor fuera de los aceptados
//        break;
//}

//Ciclos de Control
//while (condition) {
    
//}

//FOR
//for (let i = 0;i<= 10;i++) {

//}

//----------------------------------------------
//FUNCIONES
    //function saludar(arg1,arg2,){ Los argumentos se separan por coma

    //return algo   Se utiliza la palabra reservada return para devolver los valores
    //}


//-----------------------------------------------------------------
//OBJETOS
// lo que define a un objeto son los corchetes {}
// si se define una variable con corchetes, significa que es un objeto
//let carro={
    //atributos
        //carro:'blanco', No utiliza el = para realizar la asignación, sino los 2 puntos:
        
//}

// CLASES
// La sintaxis para crear clases es con la palabra reservada class
    //class Galleta{
        //Constructor(variables){
            //this.var1=variable1;
            //this.var2=variable2;
        //}
    //}

// La forma de instanciar una clase es con la palabra resrvada 
// let galleta1= new Galleta()


//COMILLA INVERTIDA
//La comilla invertida me permite en la cadena añadir variables
//${variable}no es transformado a una cadena, sino que nos devuelve el valor de la varialbe
// `Esta es una  cadela ${variable}`