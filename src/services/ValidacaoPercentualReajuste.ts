import Funcionario from "../classes/Funcionario";

export default class ValidacaoPercentualReajuste {
  reajustar(funcionario: Funcionario, aumento: number) {
    const salarioAtual = funcionario.getSalario();
    const percentualReajuste = aumento / salarioAtual;

    if (percentualReajuste > 0.4) {
      throw new Error("O reajuste não pode ser maior que 40% do salário");
    }
  }
}
