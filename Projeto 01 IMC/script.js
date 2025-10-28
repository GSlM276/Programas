let n1 = document.getElementById('txt1'); 
let n2 = document.getElementById('txt2'); 
let res = document.getElementById('res'); 

function clicar() {

    let altura = Number(n1.value.replace(',', '.'));
    let peso = Number(n2.value.replace(',', '.'));

    // 2. Input Validation 🛑
    if (altura === 0 || peso === 0 || isNaN(altura) || isNaN(peso)) {
        res.innerHTML = '<span style="color: red;">🚨 Insira valores válidos para altura (m) e peso (kg).</span>';
        return;
    }


    let imc = peso / (altura * altura);
    let imcFormatado = imc.toFixed(2); 
    let classificacao = '';


    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc <= 24.9) { 
        // This covers IMCs from 18.5 up to 24.9
        classificacao = 'Peso normal (Risco menor)';
    } else if (imc <= 29.9) {
        classificacao = 'Sobrepeso (Pré-obesidade)';
    } else if (imc <= 34.9) {
        classificacao = 'Obesidade Grau I';
    } else if (imc <= 39.9) {
        classificacao = 'Obesidade Grau II (Severa)';
    } else {
        classificacao = 'Obesidade Grau III (Mórbida)';
    }


    res.innerHTML = `Seu IMC é ${imcFormatado}, classificado como: ${classificacao}.`;
}