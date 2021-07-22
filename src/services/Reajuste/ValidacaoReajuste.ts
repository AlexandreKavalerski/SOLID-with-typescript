import Funcionario from "../classes/Funcionario";

export default interface ValidacaoReajuste {
  validar(funcionario: Funcionario, aumento: number): void;
}
