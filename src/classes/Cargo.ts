enum Cargo {
  ASSISTENTE,
  ANALISTA,
  ESPECIALISTA,
  GERENTE,
}

export function getProximoCargo(cargoAtual: number): Cargo {
  if (cargoAtual !== Cargo.GERENTE) {
    return cargoAtual + 1;
  }
  return cargoAtual;
}

export default Cargo;
