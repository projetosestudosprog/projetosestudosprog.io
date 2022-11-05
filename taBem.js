// SEI QUE TE MUITO IF OU ALERT APENAS PARA PRATICAR MELHOR.
let nome = prompt("Qual seu nome?");
let mensagem1 = "Que bom que você está bem, " + nome;
let mensagem2 = "Eu sei que está dificil...";
let mensagem3 = "Mas confie em mim, tudo ficará bem...";
let mensagem4 = "Todos nós temos momentos dificeis...";
let mensagem5 = "Seja qual for o problema vai passar...";
let mensagem6 = "APENAS: Não desista dos seus sonhos!";

let sentindo = "";
let certeza = "";

if (nome) {
  alert("Oi, " + nome);

  sentindo = prompt("Como você está se sentindo hoje?");

  if (sentindo == "bem") {
    alert(mensagem1);
    certeza = prompt("Mas, você tem certeza que está bem?");

    if (certeza == "sim" || certeza == "s") {
      alert("tente novamente com outra resposta nao ou n.");
      alert("Atualize a página");
    } else if (certeza == "nao" || certeza == "nao sei" || certeza == "n") {
      alert(mensagem2);
      alert(mensagem3);
      alert(mensagem4);
      alert(mensagem5);
      alert(mensagem6);
    }
  } else if (
    sentindo == "mal" ||
    sentindo == "triste" ||
    sentindo == "quero morrer" ||
    sentindo == "nao sei" ||
    sentindo == "pessimo" ||
    sentindo == "pessima"
  ) {
    alert(mensagem2);
    alert(mensagem3);
    alert(mensagem4);
    alert(mensagem5);
    alert(mensagem6);
  }
} else {
  alert("ATUALIZE PÁGINA E TENTE NOVAMENTE.");
}
