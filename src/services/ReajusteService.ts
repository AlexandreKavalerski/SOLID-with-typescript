import Funcionario from "../classes/Funcionario";
import ValidacaoReajuste from "./ValidacaoReajuste";

export default class ReajusteService {
  private validacoes: ValidacaoReajuste[];

  constructor(validacoes: ValidacaoReajuste[]) {
    this.validacoes = validacoes;
  }

  reajustarSalarioDoFuncionario(funcionario: Funcionario, aumento: number) {
    this.validacoes.forEach((v) => v.validar(funcionario, aumento));

    const salarioReajustado = funcionario.getSalario() + aumento;
    funcionario.reajustarSalario(salarioReajustado);
  }
}
