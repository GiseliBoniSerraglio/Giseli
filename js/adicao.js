let matriz1 = new Array();
let matriz2 = new Array();
let linhas1, colunas1, linhas2, colunas2


// CRIAÇÃO DA PRIMEIRA MATRIZ

for (let i = 0; i < 1; i++) {
    linhas1 = parseInt(prompt("Digite o número de linhas da primeira matriz:"));

    while (linhas1 <= 0 || isNaN(linhas1)) {
        alert("Número Inválido")
        linhas1 = parseInt(prompt("Digite o número de linhas da primeira matriz:"))
    }
}

for (let i = 0; i < 1; i++) {
    colunas1 = parseInt(prompt("Digite o número de colunas da primeira matriz:"));

    while (isNaN(colunas1 || colunas1 <= 0)) {
        alert("Número Inválido")
        colunas1 = parseInt(prompt("Digite o número de colunas da primeira matriz:"))
    }
}

for (let i = 0; i < linhas1; i++) {
    matriz1[i] = [];
    for (let j = 0; j < colunas1; j++) {
        matriz1[i][j] = Math.floor(Math.random() * 90);
    }
}

// CRIAÇÃO DA SEGUNDA MATRIZ

for (let i = 0; i < 1; i++) {
    linhas2 = parseInt(prompt("Digite o número de colunas da segunda matriz:"));

    while (linhas2 <= 0 || isNaN(linhas2)) {
        alert("Número Inválido")
        linhas2 = parseInt(prompt("Digite o número de colunas da segunda matriz:"))
    }
}

for (let i = 0; i < 1; i++) {
    colunas2 = parseInt(prompt("Digite o número de colunas da segunda matriz:"));

    while (colunas2 <= 0 || isNaN(colunas2)) {
        alert("Número Inválido")
        colunas2 = parseInt(prompt("Digite o número de colunas da segunda matriz:"))
    }
}

for (let i = 0; i < linhas2; i++) {
    matriz2[i] = [];
    for (let j = 0; j < colunas2; j++) {
        matriz2[i][j] = Math.floor(Math.random() * 90);
    }
}

// IMPRIMINDO AS MATRIZES

document.write("<p>1° matriz de " + linhas1 + "x" + colunas1 + "</p>");
document.write("<table>")
for (let i = 0; i < matriz1.length; i++) {
    document.write("<tr>")
    for (let j = 0; j < matriz1[i].length; j++) {
        document.write("<td>" + matriz1[i][j] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>")

document.write("<p>2° matriz de " + linhas2 + "x" + colunas2 + "</p>");
document.write("<table>")
for (let i = 0; i < matriz2.length; i++) {
    document.write("<tr>")
    for (let j = 0; j < matriz2[i].length; j++) {
        document.write("<td>" + matriz2[i][j] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>")

// ADIÇÃO DE MATRIZES

let soma = new Array();

document.write("<p>Adição das matrizes</p>");
if (colunas1 === colunas2 && linhas1 === linhas2) { // === é usado comparar dois valores verificando se eles são iguais
    for (let i = 0; i < linhas1; i++) {
        soma[i] = []
        for (let j = 0; j < colunas1; j++) {
            soma[i][j] = matriz1[i][j] + matriz2[i][j]
        }
    }
    document.write("<table>")
    for (let i = 0; i < matriz1.length; i++) {
        document.write("<tr>")
        for (let j = 0; j < matriz1[i].length; j++) {
            document.write("<td>" + soma[i][j] + "</td>")
        }
        document.write("</tr>")
    }
    document.write("</table>")
    
} else {
    document.write("<p>Não é possível somar as matrizes: elas têm tamanhos diferentes.</p>")
}