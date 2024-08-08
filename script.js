const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Mitologia grega é o conjunto de histórias, lendas e mitos que pertenciam ao imaginário da civilização da Grécia Antiga, povoado por deuses, heróis lendários e criaturas fantásticas. Relacionada com a religião, a mitologia grega apresentava, além dos cultuados deuses, explicações para temas fundamentais, como o surgimento do Universo e da vida.",
        alternativas: [
            {
                texto: "Prosseguir",
                afirmacao: "Respostas:"
            },
        ]
    },
    {
        enunciado: "Questão 1:Quantos são os Deuses do Olimpo?",
        alternativas: [
            {
                texto: "11",
                afirmacao: "1°:Errada,"
            },
            {
                texto: "12",
                afirmacao: "1°:Correta,"
            },
            {
                texto: "13",
                afirmacao: "1°:Errada,"
            },
            {
                texto: "14",
                afirmacao: "1°:Errada,"
            },
        ]
    },
    {
        enunciado: "Questão 2:Quem é o rei dos deuses, governante do Monte Olimpo, deus do céu, raio, trovão?",
        alternativas: [
            {
                texto: "Atena",
                afirmacao: "2°:Errada,"
            },
            {
                texto: "Hades",
                afirmacao: "2°:Errada,"
            },
            {
                texto: "Zeus",
                afirmacao: "2°:Correta,"
            },
            {
                texto: "Hélios",
                afirmacao: "2°:Errada,"
            },
        ]
    },
    {
        enunciado: "Questão 3:Qual o Titã que, roubou o fogo de Zeus para o dar aos mortais, e para o punir, o deus dos deuses mandou acorrenta-lo a um rochedo e mandou-lhe uma águia para devorar o seu fígado?",
        alternativas: [
            {
                texto: "Cronos",
                afirmacao: "3°:Errada,"
            },
            {
                texto: "Prometheus",
                afirmacao: "3°:Correta,"
            },
            {
                texto: "Gaia",
                afirmacao: "3°:Errada,"
            },
            {
                texto: "Atlas",
                afirmacao: "3°:Errada,"
            },
        ],
    },
    {
        enunciado: "Questão 4:Quem foi o Deus que construiu a Caixa de Pandora?",
        alternativas: [
            {
                texto: "Hefesto",
                afirmacao: "4°:Correta,"
            },
            {
                texto: "Thânatos",
                afirmacao: "4°:Errada,"
            },
            {
                texto: "Hércules",
                afirmacao: "4°:Errada,"
            },
            {
                texto: "Deméter",
                afirmacao: "4°:Errada,"
            },
        ]
    },
    {
        enunciado: "Questão 5:Qual é o ser mitológico cujo o corpo é composto por patas e chifres de bode?",
        alternativas: [
            {
                texto: "Minotauro",
                afirmacao: "5°:Errada."
            },
            {
                texto: "Centáuro",
                afirmacao: "5°:Errada."
            },
            {
                texto: "Sátiros.",
                afirmacao: "5°:Correta."
            },
            {
                texto: "Quiméra",
                afirmacao: "5°:Errada."
            },
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado por responder";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
