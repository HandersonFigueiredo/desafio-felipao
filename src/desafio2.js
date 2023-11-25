/*# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/



function calculaNivel(wins, loses){
     let saldoVitoria = wins - loses;
     let nivel 

    if (saldoVitoria < 10) {
        nivel = "Ferro" 
    }if ((saldoVitoria > 10)&&(saldoVitoria <= 20)) {
        nivel = "Bronze"
    }if ((saldoVitoria > 20)&&(saldoVitoria <= 50)) {
        nivel = "Prata"
    }if ((saldoVitoria > 50)&&(saldoVitoria <= 80)) {
        nivel = "Ouro"
    }if ((saldoVitoria > 80)&&(saldoVitoria <= 90)) {
        nivel = "Diamante"
    }if ((saldoVitoria > 90)&&(saldoVitoria <= 100)) {
        nivel = "Lendário"
    }if (saldoVitoria > 100){ 
        nivel = "Imortal"
    }
    
    return `O Herói tem um saldo de ${saldoVitoria} está no nível de ${nivel}`
}

const resultado = calculaNivel(118,17)
console.log(resultado)