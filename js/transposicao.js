let matriz1 = new Array();
let linhas1, colunas1


// CRIAÇÃO DA MATRIZ

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

// IMPRIMINDO A MATRIZE

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

// MATRIZ TRANSPOSTA

let transposta1 = new Array();


for (let i = 0; i < matriz1[0].length; i++) {
    transposta1[i] = []
    for (let j = 0; j < matriz1.length; j++) {
        transposta1[i][j] = matriz1[j][i];
    }
}

document.write("<p>Matriz Transposta</p>");
document.write("<table>")
for (let i = 0; i < matriz1[0].length; i++) {
    document.write("<tr>");
    for (let j = 0; j < matriz1.length; j++) {
        document.write("<td>" + transposta1[i][j] + "</td>")
    }
    document.write("</tr>")
}
document.write("</table><br>")
