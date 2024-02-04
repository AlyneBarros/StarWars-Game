const enigmas = [
  {
    pergunta: "Meu planeta natal é onde dois sóis se encontram. Onde estou?",
    resposta: "Planeta Nascimento",
    opcoes: ["Tatooine", "Planeta Nascimento", "Coruscant"]
  },
  {
    pergunta: "Um pequeno mestre sábio, com oito séculos de idade, seu nome é?",
    resposta: "Yoda",
    opcoes: ["Plo Koon", "Yoda", "Mace Windu"]
  },

  {
    pergunta: "Sou o Mestre que treinou o Luke, quem sou eu?",
    resposta: "Obi Wan Kenob",
    opcoes: ["Anakin", "Obi Wan Kenob", "Qui-Gon Jinn"]
  },
  {
    pergunta: "Sou arma que corta através de qualquer coisa",
    resposta: "Sabre de luz",
    opcoes: ["Sabre de luz", "Estrela da Morte", "Armada Sith"]
  },
  {
    pergunta: "Sou a batalha onde a Estrela da Morte foi destruída",
    resposta: "Batalha de Yavin",
    opcoes: ["Batalha de Hoth", "Cinturão de asteroides", "Batalha de Yavin"]
  },
  {
    pergunta:
      "Nasci no planeta Mustafar, conhecido por seu clima quente e por ser o local de um duelo épico. Quem sou eu?",
    resposta: "Darth Vader",
    opcoes: ["Mace Windu", "Darth Vader", "Qui-Gon Jinn"]
  },
  {
    pergunta:
      "Eu sou o caçador de recompensas que congelou Han Solo em carbonita. Quem sou eu?",
    resposta: "Boba Fett",
    opcoes: ["Boba Fett", "Obi Wan Kenob", "Plo Koon"]
  },

  {
    pergunta:
      "Um planeta deserto, onde o treinamento Jedi começou. Qual é o nome deste planeta?",
    resposta: "Tatooine",
    opcoes: ["Tatooine", "Endor", "Geonosis"]

  },

  {
    pergunta: "Os primeiros clones da República, de quem são cópias genéticas?",
    resposta: "Jango Fett",
    opcoes: ["Jango Fett", "Kaminoanos", "Sheev Palpatine"]
  },

  {
    pergunta:
      "Kashyyyk é o planeta natal de qual membro da tripulação da Millennium Falcon?",
    resposta: "Chewbacca",
    opcoes: ["Luke Skywalker", "Han Solo", "Chewbacca"]
  },

  {
    pergunta:
      "Qual é o nome da estação espacial colossal capaz de destruir planetas?",
    resposta: "Estrela da Morte",
    opcoes: ["Estrela da Morte", "Glavis Ringworld", "Cidadela de Rur"]
  },
];

let enigmaAtual = 0;
function exibirEnigma() {
  const enigmaElement = document.getElementById("enigma");
  enigmaElement.textContent = enigmas[enigmaAtual].pergunta;

  const opcoesResposta = document.querySelectorAll(".container__botao");
  enigmas[enigmaAtual].opcoes.forEach((opcao, index) => {
      opcoesResposta[index].textContent = opcao;
  });
}

function selecionarResposta(index) {
  const opcaoSelecionada = enigmas[enigmaAtual].opcoes[index].toLowerCase();
  const respostaCorreta = enigmas[enigmaAtual].resposta.toLowerCase();

  if (opcaoSelecionada === respostaCorreta) {
      enigmaAtual++;

      if (enigmaAtual < enigmas.length) {
          exibirEnigma();
      } else {
          alert("Você concluiu todos os enigmas de Star Wars!");

          window.location.href =
              "https://www.telltalesonline.com/wp-content/uploads/2017/01/darth-vader-meme.jpg?_t=1493899359";
      }
  } else {
      alert("Resposta incorreta. Tente novamente.");
  }
}

exibirEnigma();
