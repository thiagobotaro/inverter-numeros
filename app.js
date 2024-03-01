let array = [];

function adicionar(){
    let numero1 = document.getElementById('numero1');
    array.push(numero1.value);
    alert('Número adicionado');
    numero1.value = '';
}

function inverter(){
    tamanho = array.length - 1;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    while(tamanho >= 0){
    resultado.innerHTML += array[tamanho] + ', ';
    tamanho--;
    }

}