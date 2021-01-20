export class Coracao {
    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = '../../assets/coracao_cheio.png',
        public urlCoracaoVazio: string = '../../assets/coracao_vazio.png'
    ){}

    public exibeCoracao(): string {
        if(this.cheio) {
            return this.urlCoracaoCheio
        } 
        else {
            return this.urlCoracaoVazio
        }
    }

    public opacidade(): string {
        if (!this.cheio) {
            return 'opacity: 0.25'
        }
        else {
            return 'opacity: 1'
        }
    }
}