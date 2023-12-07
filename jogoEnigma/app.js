const enigmas = [
  {
    pergunta: "Meu planeta natal é onde dois sóis se encontram. Onde estou?",
    resposta: "Planeta Nascimento",
  },
  {
    pergunta: "Um pequeno mestre sábio, com oito séculos de idade, seu nome é?",
    resposta: "Yoda",
  },

  {
    pergunta: "Sou o Mestre que treinou o Luke, quem sou eu?",
    resposta: "Obi Wan Kenob",
  },
  {
    pergunta: "Sou arma que corta através de qualquer coisa",
    resposta: "Sabre de luz",
  },
  {
    pergunta: "Sou a batalha onde a Estrela da Morte foi destruída",
    resposta: "Batalha de Yavin",
  },
  {
    pergunta:
      "Nasci no planeta Mustafar, conhecido por seu clima quente e por ser o local de um duelo épico. Quem sou eu?",
    resposta: "Darth Vader",
  },
  {
    pergunta:
      "Eu sou o caçador de recompensas que congelou Han Solo em carbonita. Quem sou eu?",
    resposta: "Boba Fett",
  },

  {
    pergunta:
      "Um planeta deserto, onde o treinamento Jedi começou. Qual é o nome deste planeta?",
    resposta: "Tatooine",
  },

  {
    pergunta: "Os primeiros clones da República, de quem são cópias genéticas?",
    resposta: "Jango Fett",
  },

  {
    pergunta:
      "Kashyyyk é o planeta natal de qual membro da tripulação da Millennium Falcon?",
    resposta: "Chewbacca",
  },

  {
    pergunta:
      "Qual é o nome da estação espacial colossal capaz de destruir planetas?",
    resposta: "Estrela da Morte",
  },
];

let enigmaAtual = 0;

function exibirEnigma() {
  const enigmaElement = document.getElementById("enigma");
  enigmaElement.textContent = enigmas[enigmaAtual].pergunta;
}
function verificarResposta() {
  const respostaInput = document.getElementById("respostaInput");
  const respostaUsuario = respostaInput.value.toLowerCase();

  if (respostaUsuario === enigmas[enigmaAtual].resposta.toLowerCase()) {
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

  respostaInput.value = "";
}

exibirEnigma();
