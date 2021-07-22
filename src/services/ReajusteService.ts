import Funcionario from "../classes/Funcionario";

export default class ReajusteService {
  reajustarSalarioDoFuncionario(funcionario: Funcionario, aumento: number) {
    const salarioAtual = funcionario.getSalario();

    const percentualReajuste = aumento / salarioAtual;
    if (percentualReajuste > 0.4) {
      throw new Error("O reajuste não pode ser maior que 40% do salário");
    }
    const dataUltimoReajuste: Date = funcionario.getDataUltimoReajuste();
    const dataAtual: Date = new Date();

    const mesesDesdeUltimoReajuste: number =
      dataUltimoReajuste.getMonth() -
      dataAtual.getMonth() +
      12 * (dataUltimoReajuste.getFullYear() - dataAtual.getFullYear());
    if (mesesDesdeUltimoReajuste < 6) {
      throw new Error(
        "O reajuste não pode acontecer em um intervalo menor que 6 meses"
      );
    }

    const salarioReajustado = salarioAtual + aumento;

    funcionario.reajustarSalario(salarioReajustado);
  }
}
