import { Paciente } from "../models/paciente.js";

export class PacienteController {
  #campoNome;
  #campoSobrenome;
  #campoPeso;
  #campoAltura;

  constructor() { 
    this.#campoNome = document.getElementById('nome');
    this.#campoSobrenome = document.getElementById('sobrenome');
    this.#campoPeso = document.getElementById('peso');
    this.#campoAltura = document.getElementById('altura');
  }

  criarPaciente() {
    let nome = this.#campoNome.value;
    let sobrenome = this.#campoSobrenome.value;
    let peso = this.#campoPeso.value;
    let altura = this.#campoAltura.value;
    let paciente = new Paciente(nome, sobrenome, peso, altura)
    console.log(paciente);
  }
}