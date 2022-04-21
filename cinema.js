const catalogo = require("./database/catalogo.json")

let cinehouse = "Cinema"

const catalogo = [
  {
  codigo: 1,
   titulo: "Harry Potter e a Ordem da Fênix",
   duracao: 2,
   atores: ["Daniel Radcliffe", "Emma Watson" , "Rupert Grint"],
    anoDeLancamento: 2007,
    emCartaz: false,
  },
  {
    codigo: 2,
    titulo: "O Massacre da Serra Elétrica",
    duracao: 1.5,
    atores: ["Cassio Oliveira", "Jessica Castro"],
    anoDeLancamento: 2022,
    emCartaz: true,
  }
 ]

catalogo.push(filme)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const filmeQueVouAdicionar = {
  codigo: 3,
  titulo: "Jumanji",
  duracao: 1,
  atores: ["Ator1", "Ator2", "Ator3"],
  anoDeLancamento: 2020,
  emCartaz: false
}
adicionarFilme(filmeQueVouAdicionar)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function buscarFilme(identificador) {
  const filme = catalogo.find((filme) => filme.codigo === identificador)
  return filme
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function buscarFilme (codigo){
  let filmeEncontrado

  for(i=0; i<catalogo.length; i++){
    if(catalogo[i].codigo === codigo) {
      filmeEncontrado = catalogo[i]
    }
  }
  return filmeEncontrado
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function alterarEmCartaz(codigo, callback){  
  const filmeEncontrado = callback(codigo)
  filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz
  return filmeEncontrado
}

alterarEmCartaz(1, buscarFilme)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function listarTodosOsFilmes(){
  for(let index=0; index < catalogo.length; index++)
  console.log(catalogo[index])
}

listarTodosOsFilmes();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function listarFilmesEmCartaz(){
  for(let index = 0; index <catalogo.lenght; index++){
    if (!catalogo[index].emCartaz) {
      listarFilmesEmCartaz.push(catalogo[index])
  }
}
return filmesEmCartaz 
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function adicionarFilme(filme) {
  catalogo.push(filme)
}