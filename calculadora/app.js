let operator
document.querySelector('#suma').addEventListener('click', () => {
  operator = '+'
})
document.querySelector('#resta').addEventListener('click', () => {
  operator = '-'
})
document.querySelector('#multiplicacion').addEventListener('click', () => {
  operator = '*'
})
document.querySelector('#division').addEventListener('click', () => {
  operator = '/'
})
document.querySelector('#reset').addEventListener('click', () => {
  operator = 'reset'
})

function reset() {
  document.querySelector('#result').innerHTML = ''
  document.querySelector('#n1').value = ''
  document.querySelector('#n2').value = ''
}

document.querySelector('#calcular').addEventListener('click', () => {
  const n1 = +document.querySelector('#n1').value
  const n2 = +document.querySelector('#n2').value
  let result
  if (operator == '+') {
    result = n1 + n2
  } else if (operator == '-') {
    result = n1 - n2
  } else if (operator == '*') {
    result = n1 * n2
  } else if (operator == '/') {
    result = n1 / n2
  }
  document.querySelector('#result').innerHTML = result
})
