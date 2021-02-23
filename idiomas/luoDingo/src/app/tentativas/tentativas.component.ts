import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {Coracao} from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  @Input() public tentativas: number = 0

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() {console.log(this.coracoes) }

  ngOnChanges() {
    if(this.tentativas !== this.coracoes.length) {
      let i = this.coracoes.length - this.tentativas
      this.coracoes[i - 1].cheio = false
    }
  }

  ngOnInit(): void {}

}
