

const listaNumeros = [4, 5, 7, 8, 2];
const listaOrdenada = listaNumeros.sort((a, b) => {
	if(a < b){
	   return -1;
	} else if(a > b){
		return 1;
	}
	return 0;
})
console.log(listaOrdenada)

/*.sort()
O .sort() serve para ordenar os elementos de Arrays fazendo com ele fique do menor para o maior número.

A função de ordenação sempre recebe dois elementos. Se o primeiro for menor, devemos retornar um número menor que 0. Se o primeiro for maior, devemos retornar um número maior do que 0. Se forem iguais, retornamos 0.

[2, 4, 5, 7, 8]

0 : 2
1 : 4
2 : 5
3 : 7
4 : 8

*/
