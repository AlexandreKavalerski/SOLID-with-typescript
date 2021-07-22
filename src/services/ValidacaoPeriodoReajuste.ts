import Funcionario from "../classes/Funcionario";
import ValidacaoReajuste from "./ValidacaoReajuste";

export default class ValidacaoPercentualReajuste implements ValidacaoReajuste {
  reajustar(funcionario: Funcionario, aumento: number) {
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
  }
}
