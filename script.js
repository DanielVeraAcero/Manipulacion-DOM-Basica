const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')

form.addEventListener('submit',sumar_input_value);

function sumar_input_value(event) {
    event.preventDefault();
    const suma_input = parseInt(input1.value) + parseInt(input2.value)
    pResult.innerText = "Resultado: " + suma_input
}
