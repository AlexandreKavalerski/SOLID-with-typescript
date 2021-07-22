import Cargo, { getProximoCargo } from "../../classes/Cargo";
import Funcionario from "../../classes/Funcionario";

export default class PromocaoService {
  promover(funcionario: Funcionario, metaBatida: boolean) {
    const cargoAtual: Cargo = funcionario.getCargo();

    if (cargoAtual == Cargo.GERENTE) {
      throw new Error("Gerente não pode ser promovido");
    }

    if (metaBatida) {
      const novoCargo = getProximoCargo(cargoAtual);
      funcionario.promover(novoCargo);
    } else {
      throw new Error("Funcionário não bateu a meta");
    }
  }
}
