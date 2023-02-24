export class Paciente{
  #nome;
  #sobrenome;
  #peso;
  #altura;
  constructor(nome, sobrenome, peso, altura) {
    this.#nome = nome;
    this.#sobrenome = sobrenome;
    this.#peso = peso;
    this.#altura = altura;
  }

  get nome() {
    return this.#nome;
  }

  get sobrenome() { 
    return this.#sobrenome; 
  }

  get peso() {
    return this.#peso;
  }

  set peso(novoPeso) {
    this.#peso = novoPeso;
  }

  get altura () { 
    return this.#altura;
  }
}