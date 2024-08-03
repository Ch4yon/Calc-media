const estudantes = [
    {
        nome: "João",
        nota1: 6,
        nota2: 8,
    },
    {
        nome: "Marcela",
        nota1: 7,
        nota2: 9,
    },
    {
        nome: "Pedro",
        nota1: 3,
        nota2: 5,
    },
    {
        nome: "Joana",
        nota1: 9,
        nota2: 10,
    }
]
for (const estudante of estudantes) {
  const media = (estudante.nota1 + estudante.nota2) / 2;
  alert(`O/A estudante ${estudante.nome} ficou com a média: ${media} e ${media >= 7 ?  "passou no concurso" : "não passou no concurso"}`);
}