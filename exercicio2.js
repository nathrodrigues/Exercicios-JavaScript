/***
* Crie uma função que recebe dois números como parâmetros.
* Confira se os números são iguais.
* Confira se a soma dos números é maior que 10 ou menor que 20.
* Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
 */

function comparaNumeros(num1, num2) {
    if(!num1 || !num2) return 'Defina dois números.'
    const primeiro = primeiraFuncao(num1, num2)
    const segundo = segundaFuncao(num1, num2)

    return `${primeiro} ${segundo}`
}

function primeiraFuncao(num1, num2) {
    let saoIguais = ''

    if(num1 !== num2) {
        saoIguais = 'não'
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function segundaFuncao(num1, num2) {
    const soma = num1 + num2

    let resultado10 = 'menor'
    let resultado20 = 'menor'

    const compara10 = soma > 10
    const compara20 = soma > 20

    if(compara10) {
        resultado10 = 'maior'
    }

    if(compara20) {
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma} que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(05, 01))