const NUMERO_ALUNO = Number(prompt("Quantos alunos sao:")); // Numero de alunos
const alunos = [] // Lista de Alunos


const Media = (nota1, nota2) => (nota1 + nota2) / 2; // funcao para calcular a media de cada aluno 

const IsPassed = (media, nome) => media >= 7 ? 
`Parabéns, ${nome}! você foi aprovado para o concurso` : 
`Não foi desta vez, ${nome}! Tente novamente!` // Verifica se foi aprovado ou nao

for (let i = 1; i <= NUMERO_ALUNO; i++) {
  const aluno = new Object();
  aluno.nome = prompt("nome do aluno:");
  aluno.nota1 = Number(prompt("Introduza a nota 1:"));
  aluno.nota2 = Number(prompt("Introduza a nota 2:"));
  aluno.media = Media(aluno.nota1, aluno.nota2);

  alunos.push(aluno);// adiciona na lista de alunos
  /*i + 1*/
} // Criacao de alunos

//Mostar alunos
for(let i = 0; i < alunos.length; i++){
  alert(`A média do(a) aluno(a) ${alunos[i].nome} é: ${alunos[i].media}\n${IsPassed(alunos[i].media, alunos[i].nome)}`);
}


