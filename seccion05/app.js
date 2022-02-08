let Nombre='Matias Jaime'
function saludar(nombre) {
    console.log('Buenos dias '+nombre)
}
saludar(Nombre)
let nombre='Raul'
saludar(nombre)

let flores=['Rosa','Girasol','Lirio']
for (let i = 0; i < flores.length; i++) {
    console.log(flores[i])
    
}
function MostrarSalario(ArregloPersona,ArregloSalario) {
    for (let i = 0; i < ArregloPersona.length; i++) {
        const element = ArregloPersona[i];
        console.log('El salario de '+ArregloPersona[i] + 'es: '+ArregloSalario[i])
            }
}
let personas=['Matias','Raul','Jaime']
let salarios=[1000,2000,30000]
MostrarSalario(personas,salarios)