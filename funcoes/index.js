function somar(numero1, numero2) {
    if(arguments.length < 2) {
        throw new Error('A função somar requer dois argumentos. Por favor, escolha dois números como argumentos.')
    }

    let soma = numero1 + numero2;
    return 'A soma dos dois números é ' + soma;
}

function subtrair(numero1, numero2) {
    if(arguments.length < 2) {
        throw new Error('A função subtrair requer dois argumentos. Por favor, escolha dois números como argumentos.')
    }

    let subtracao = numero1 - numero2;
    return 'A subtracao dos dois números é ' + subtracao;
}

function multiplicar(numero1, numero2) {
    if(arguments.length < 2) {
        throw new Error('A função multiplicar requer dois argumentos. Por favor, escolha dois números como argumentos.')
    }

    let multiplicacao = numero1 * numero2;
    return 'A multiplicação dos dois números é ' + multiplicacao;
}

function dividir(numerador, denominador) {
    if(arguments.length < 2) {
        throw new Error('A função dividir requer dois argumentos: numerador e denominador.');
    }

    if(denominador === 0) {
        throw new Error('Não é possível dividir por zero. Por favor, escolha um denominador diferente de zero.');
    }

    let resultadoDivisao = numerador / denominador;
    return 'A divisão dos dois números é ' + resultadoDivisao;
}

let resultadoSoma = somar(5, 7);
let resultadoSubtracao = subtrair(7, 3);
let resultadoMultiplicacao = multiplicar(3, 16);
let resultadoDivisao = dividir(5, 15);

console.log(resultadoSoma);
console.log(resultadoSubtracao);
console.log(resultadoMultiplicacao);
console.log(resultadoDivisao);