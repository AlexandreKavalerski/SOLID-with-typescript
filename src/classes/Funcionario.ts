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

  reajustarSalario(aumento: number) {
    const percentualReajuste = aumento / this.salario;
    if (percentualReajuste > 0.4) {
      throw new Error("O reajuste não pode ser maior que 40% do salário");
    }
    this.salario += aumento;
    this.dataUltimoReajuste = new Date();
  }

  getSalario() {
    return this.salario;
  }
}
