const livrosGeral = require('./database')

const input = require('readline-sync')

livrosGeral.sort((a, b) => a.paginas - b.paginas)


console.log('Olá, bem-vinde à Curadoria de Livros!')
console.log('Digite 1 ou 2  de acordo com as opções a seguir:')
const qualCategoriaListaTodos = input.question('Voce deseja encontrar livros por categoria (1) ou pela lista de recomendados e encomendados (2)?')


if(qualCategoriaListaTodos === '1') {
    
    console.log('Essas são as categorias disponíveis:')
    const listaCategorias = livrosGeral.map(i => i.categoria) 
    const categoriasUnicas = new Set(listaCategorias) 
    console.table(categoriasUnicas) 

    const qualCategoria = input.question('Qual categoria voce escolhe?') 

    const filtroCategoria = livrosGeral.filter(livroGeral => livroGeral.categoria === qualCategoria) 
    console.log(`Esses são os livros sobre ${qualCategoria.toLocaleLowerCase()}:`) 
    console.table(filtroCategoria) 
    console.log('Obrigade, volte sempre!')

    
} else if(qualCategoriaListaTodos === '2') {

    console.log('Digite 1 ou 2 de acordo com as opções a seguir:') 
    const qualLista = input.question('Voce deseja ver a lista de Livros Recomendados (1) ou a de Livros Encomendados (2)?')
    
    if(qualLista === '1'){ 

        const listaRecomendados = livrosGeral.filter(livroGeral => livroGeral.recomenda && livroGeral.leu)
        console.table(listaRecomendados)
        console.log('Obrigade, volte sempre!')

    } else if (qualLista === '2') {
        const listaEncomendados = livrosGeral.filter(livroGeral => livroGeral.recomenda === false && livroGeral.leu === false)
        console.table(listaEncomendados)
        console.log('Obrigade, volte sempre!')

    } else {
        console.log('Por favor, digite uma entrada válida.')
    }


} else {

    console.log('Esses são todos os livros disponíveis:')
    console.table(livrosGeral)
    console.log('Obrigade, volte sempre!')

}










