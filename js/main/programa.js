import { Paciente } from "../models/paciente.js";

const tituloPrincipal = document.getElementById('titulo-principal');
tituloPrincipal.textContent = "(Des)aparecida Nutricionista"

let paciente = new Paciente("Maria", "Da Silva", 90, 1.85)
console.log(paciente.nome)
console.log(paciente.sobrenome)
console.log(paciente.peso)
console.log(paciente.altura)
console.log(paciente.peso = paciente.peso - 10)
console.log(paciente)

