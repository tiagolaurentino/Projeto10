let alunos = [
    {
        nome: 'Tiago',
        nota1: 7,
        nota2: 9,
    },
    {
        nome: 'Maria',
         nota1: 9,
        nota2: 3,
    },
    {
        nome: 'Pedro',
         nota1: 6,
        nota2: 2,
    },
    {
        nome: 'Patricia',
         nota1: 10,
        nota2: 7,
    },
 ]
 

 function mediaAluno(aluno) {
   let media = Number((aluno.nota1 + aluno.nota2 ) / 2)
   if(media >= 7) {
   return `Parabens, ${aluno.nome}! Você foi aprovado(a) no concurso! sua média foi: ${media}`
 }else {
   return ` Não foi dessa vez, ${aluno.nome}! Tente novamente! sua média foi: ${media}`
 } 
    
 }
 
  for(let aluno of alunos) {
    alert(mediaAluno(aluno))
 }