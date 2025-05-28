const caixaUniQuiz = document.getElementById("caixaUniQuiz");
const perguntaUniQuiz = document.getElementById("questaoUniQuiz");
const opcoesRespostas = document.getElementById("opcoesRespostas"); 
const botaoProximo = document.getElementById("botaoProximo"); 
const resultadoQuiz = document.getElementById("resultadoUniQuiz");
const pontuacaoQuiz = document.getElementById("pontuacaoUniQuiz");

const questoes = [
    {
        questao: "Em que galáxia está o Sistema Solar?",
        opcoes: ["Andrômeda", "Via Láctea", "Galáxia do Triângulo", "Galáxia de Sombrero"],
        respostaCorreta: "Via Láctea"
    },
    {
        questao: " Qual é o nome da teoria mais aceita em que marca o início do universo?",
        opcoes: ["Big Crunch", "Buraco Branco", "Expansão Estelar", "Big Bang"],
        respostaCorreta: "Big Bang"
    },
    {
        questao: "Qual é o maior planeta do Sistema Solar?",
        opcoes: ["Marte", "Júpiter", "Urano", "Saturno"],
        respostaCorreta: "Júpiter"
    },
    {
        questao: "Por qual outro nome é conhecida a Nebulosa de Hélix?",
        opcoes: ["Olho de Deus", "Pilares da criação", "Andrômeda", "Nebulosa de Órion"],
        respostaCorreta: "Olho de Deus"
    },
    {
        questao: " Qual desses corpos celestes é um satélite natural da Terra?",
        opcoes: ["Sol", "Marte", "Lua", "Fobos"],
        respostaCorreta: "Lua"
    },
   {
        questao: "Qual o maior buraco negro já descoberto?",
        opcoes: ["TON 618", "1E1740.7-2942", " Phoenix A", "S5 0014+81: "],
        respostaCorreta: " Phoenix A"
    },
    {
        questao: "Quantos planetas existem atualmente no Sistema Solar (segundo a classificação da IAU)?",
        opcoes: ["10", "9", "7", "8: "],
        respostaCorreta: "8"
    },
    {
        questao: "Qual é o planeta mais próximo do Sol?",
        opcoes: ["Vênus", "Mercúrio ", "Marte", "Saturno: "],
        respostaCorreta: "Mercúrio "
    } 
];

let indiceQuestaoAtual = 0;
let pontuacao = 0;

function carregarQuestao() {
    resultadoQuiz.style.display = "none";
    caixaUniQuiz.style.display = "block"; 
    botaoProximo.style.display = "none";
    
    const questaoAtual = questoes[indiceQuestaoAtual];
    perguntaUniQuiz.textContent = questaoAtual.questao;
    opcoesRespostas.innerHTML = "";

    questaoAtual.opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.classList.add("answer-btn");
        botao.addEventListener("click", () => verificarResposta(opcao));
        opcoesRespostas.appendChild(botao);
    });
}

function verificarResposta(respostaSelecionada) {
    const questaoAtual = questoes[indiceQuestaoAtual];
    const botoesResposta = opcoesRespostas.querySelectorAll(".answer-btn"); 
    
    botoesResposta.forEach(botao => {
        if (botao.textContent === questaoAtual.respostaCorreta) {
            botao.classList.add("correct");
        }
        if (botao.textContent === respostaSelecionada && respostaSelecionada !== questaoAtual.respostaCorreta) {
            botao.classList.add("incorrect");
        }
        botao.disabled = true;
    });

    if (respostaSelecionada === questaoAtual.respostaCorreta) {
        pontuacao++;
    }

    botaoProximo.style.display = "block";
}

function proximaQuestao() {
    indiceQuestaoAtual++;
    if (indiceQuestaoAtual < questoes.length) {
        carregarQuestao();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    caixaUniQuiz.style.display = "none";
    resultadoQuiz.style.display = "block";
    pontuacaoQuiz.textContent = `${pontuacao} de ${questoes.length}`;
}

botaoProximo.addEventListener("click", proximaQuestao);
document.addEventListener("DOMContentLoaded", carregarQuestao);
