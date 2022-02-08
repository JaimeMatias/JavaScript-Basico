import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})


export class AppComponent {
  Letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  Palabra = 'CAMINO';
  PalabraOculta = '';
  Intentos=0
  gano=false
  perder=false
  constructor() {

    console.log('Se acaba de crear el App Component')
    //for (let i = 0; i < this.Palabra.length; i++) {
    //   this.PalabraOculta=this.PalabraOculta+'_ '
    this.PalabraOculta = '_ '.repeat(this.Palabra.length);
    //}
  }
  Comprobar(letra:string) {
    this.ExisteLetra(letra);
    const PalabraOcultaArr=this.PalabraOculta.split(' ')
    
    for (let i = 0; i < this.Palabra.length; i++) {
      if(this.Palabra[i]===letra){
        PalabraOcultaArr[i]=letra;
      }
    }

    this.PalabraOculta=PalabraOcultaArr.join(' ');
    this.verificaGane()
    this.verificaPerdio()
  }

  ExisteLetra(letra:string){
    if (this.Palabra.indexOf(letra)>=0){
    
    }else{
    
      this.Intentos++;
    }
  }

  verificaGane(){
    const PalabraArr=this.PalabraOculta.split(' ');
    const palabraEvaluar=PalabraArr.join('');
    

    if(palabraEvaluar === this.Palabra){
      this.gano=true;
    
    }
  }
  verificaPerdio(){
    if (this.Intentos>=9){
      this.perder=true
    
    }
  }
}
 