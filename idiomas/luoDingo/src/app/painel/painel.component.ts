import { Component, OnInit, Input } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Escreva em português:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase = new Frase(FRASES[0].fraseEng,FRASES[0].frasePtBr)
  public progresso: number = 0


  constructor() {
    this.atualizaRodada()
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value

  }
  public verificarResposta(): void {
    
    if(this.rodadaFrase.frasePtBr == this.resposta) {
      alert('CORRETO!')

      //trocar pergunta da rodada
      this.rodada++

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)

      //atualizar objeto rodada frase
      console.log(this.rodada)
      this.atualizaRodada()

    } else {
      alert('INCORRETO!')
    }
  }
  
  public atualizaRodada(): void {
    // define a frase da rodada
    this.rodadaFrase = this.frases[this.rodada]

    //limpar a resposta
    this.resposta = ''
  }
}
