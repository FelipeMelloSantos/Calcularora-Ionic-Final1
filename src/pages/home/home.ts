import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  texto = "0";
  textofinal = "0";


  get texto1() {

    return this.texto;

  }

  addAsw(){

    var resultado = this.textofinal

    

    if (this.texto != "0")
      this.texto = this.texto + resultado;

    if (this.texto == "0")
      this.texto = "" + resultado;


  }


  apagarUltimo() {

    var resultado = this.texto;

    if (resultado.length > 1) {
      this.texto = resultado.slice(0, resultado.length - 1)
    } else {
      this.texto = "0";
    }


  }

  igual() {

    var resultado = this.texto;

    if (resultado.endsWith("+") || resultado.endsWith("-") || resultado.endsWith("*") || resultado.endsWith("/")) {
      this.textofinal = "Erro";
    } else {
      this.textofinal = eval(this.texto);
      this.texto = "0";
    }

  }

  addnumero0() {

    if (this.texto != "0")
      this.texto = this.texto + "0";

    if (this.texto == "0")
      this.texto = "0";

  }

  addnumero1() {

    if (this.texto != "0")
      this.texto = this.texto + "1";

    if (this.texto == "0")
      this.texto = "1";

  }

  addnumero2() {

    if (this.texto != "0")
      this.texto = this.texto + "2";

    if (this.texto == "0")
      this.texto = "2";

  }

  addnumero3() {

    if (this.texto != "0")
      this.texto = this.texto + "3";

    if (this.texto == "0")
      this.texto = "3";

  }

  addnumero4() {

    if (this.texto != "0")
      this.texto = this.texto + "4";

    if (this.texto == "0")
      this.texto = "4";

  }

  addnumero5() {

    if (this.texto != "0")
      this.texto = this.texto + "5";

    if (this.texto == "0")
      this.texto = "5";

  }

  addnumero6() {

    if (this.texto != "0")
      this.texto = this.texto + "6";

    if (this.texto == "0")
      this.texto = "6";

  }

  addnumero7() {

    if (this.texto != "0")
      this.texto = this.texto + "7";

    if (this.texto == "0")
      this.texto = "7";

  }

  addnumero8() {

    if (this.texto != "0")
      this.texto = this.texto + "8";

    if (this.texto == "0")
      this.texto = "8";

  }

  addnumero9() {

    if (this.texto != "0")
      this.texto = this.texto + "9";

    if (this.texto == "0")
      this.texto = "9";

  }

  cls() {

    this.texto = "0";

  }

  soma() {

    var resultado = this.texto;

    if (resultado != "0" && resultado.endsWith("+")==false)
      this.texto = this.texto + "+";

    if(resultado.endsWith("-") || resultado.endsWith("*") || resultado.endsWith("/"))
      this.texto = resultado.slice(0, resultado.length-1) + "+";



  }

  subtracao() {

  var resultado = this.texto;

    if (resultado != "0" && resultado.endsWith("-")==false)
      this.texto = this.texto + "-";

    if(resultado.endsWith("+") || resultado.endsWith("*") || resultado.endsWith("/"))
      this.texto = resultado.slice(0, resultado.length-1) + "-";



  }

  multiplicacao() {

    var resultado = this.texto;

    if (resultado != "0" && resultado.endsWith("*")==false)
      this.texto = this.texto + "*";

    if(resultado.endsWith("-") || resultado.endsWith("+") || resultado.endsWith("/"))
      this.texto = resultado.slice(0, resultado.length-1) + "*";



  }

  divisao() {

    var resultado = this.texto;

    if (resultado != "0" && resultado.endsWith("/")==false)
      this.texto = this.texto + "/";

    if(resultado.endsWith("-") || resultado.endsWith("*") || resultado.endsWith("+"))
      this.texto = resultado.slice(0, resultado.length-1) + "/";



  }


}
