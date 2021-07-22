import Cargo from "./Cargo";

export default class Funcionario {
  private nome: String;
  private cpf: String;
  private cargo: Cargo;
  private salario: number;
  private dataUltimoReajuste: Date;

  constructor(nome: String, cpf: String, cargo: Cargo, salario: number) {
    this.nome = nome;
    this.cpf = cpf;
    this.cargo = cargo;
    this.salario = salario;
  }

  getNome() {
    return this.nome;
  }

  reajustarSalario(novoSalario: number) {
    this.salario = novoSalario;
    this.dataUltimoReajuste = new Date();
  }

  getSalario() {
    return this.salario;
  }

  getDataUltimoReajuste() {
    return this.dataUltimoReajuste;
  }

  getCpf() {
    return this.cpf;
  }

  getCargo() {
    return this.cargo;
  }

  promover(novoCargo: Cargo) {
    this.cargo = novoCargo;
  }
}
