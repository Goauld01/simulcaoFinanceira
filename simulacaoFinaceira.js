// Requisito 1: Simulação de Investimento

function simularInvestimento(valorInicial, taxaMensal, meses) {
  let resultado = valorInicial;

  for (let i = 1; i <= meses; i++) {
    resultado += resultado * (taxaMensal / 100);
  }
  return resultado.toFixed(2);
}

// console.log(simularInvestimento(investimentoInicial, taxaMensal, meses));

// Requisito 2: Gerenciamento de Despesas

function gerenciarDespesas(despesas) {
  let totalDespesas = 0;
  for (let categoria in despesas) {
    totalDespesas += despesas[categoria];
  }
  return totalDespesas;
}

// console.log(gerenciarDespesas(despesas));

// Requisito 3: Obtenção do Mês Atual

function obterMesAtual() {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  let hoje = new Date();
  mesAtual = meses[hoje.getMonth()];

  return mesAtual;
}

// console.log(obterMesAtual());

// Requisito 4: Geração de Relatório Financeiro
function gerarRelatorio(
  investimentoInicial,
  taxaMensal,
  meses,
  despesas,
  metaInvestimento,
  metaOrcamento
) {
  let mensagem1;
  let mensagem2;
  const mesAtual = obterMesAtual();
  const investimento = simularInvestimento(
    investimentoInicial,
    taxaMensal,
    meses
  );
  const totalDespesas = gerenciarDespesas(despesas);

  // Verifica o investimento
  if (investimento >= metaInvestimento) {
    mensagem1 = `A meta de investimento foi atingida e excedou em R$${investimento}.`;
  } else {
    mensagem1 = `A meta de investimento não foi atingida em R$${
      metaInvestimento - investimento
    }.`;
  }

  // Verifica o orçamento
  if (despesas >= metaOrcamento) {
    mensagem2 = `O orçamento excedeu em R$${(
      totalDespesas - metaOrcamento
    ).toFixed(2)}.`;
  } else {
    mensagem2 = `A economia foi de R$${(totalDespesas - metaOrcamento).toFixed(
      2
    )}.`;
  }

  // Gera as saídas do relatório
  console.log("=== Relatório Financeiro ===");
  console.log(`Mes corrente: ${mesAtual}`);
  console.log(`Saldo final do investimento: ${investimento}`);
  console.log(`Total de despesas: ${totalDespesas}`);
  console.log(mensagem1);
  console.log(mensagem2);
  console.log("=== Relatório Despesas ===");
  for (const categoria in despesas) {
    console.log(
      `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: R$ ${
        despesas[categoria]
      }`
    );
  }
}

// Requisito 5: Estrutura de Dados para Despesas

const despesas = {
  alimentacao: 500,
  transporte: 150,
  aluguel: 1200,
  lazer: 200,
  agua: 75,
  luz: 80,
  academia: 150,
};

// Requisito 6: Entradas e Configurações do Investimento

const investimentoInicial = 3000; // Valor inicial investido
const taxaMensal = 1.3; // Taxa de rendimento mensal em %
const meses = 12; // Duração do investimento
const metaInvestimento = 5000; // Meta para o saldo final do investimento
const metaOrcamento = 2000; // Meta de orçamento mensal

// Requisito 7: Execução do Relatório

gerarRelatorio(
  investimentoInicial,
  taxaMensal,
  meses,
  despesas,
  metaInvestimento,
  metaOrcamento
);
