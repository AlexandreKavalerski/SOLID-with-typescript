import Funcionario from "../classes/Funcionario";

export default interface ValidacaoReajuste {
  reajustar(funcionario: Funcionario, aumento: number): void;
}
