const textarea = document.getElementById('txt')
const counter = document.getElementById('count')
const resetBtn = document.getElementById('resetBtn')
const MAX = 100

textarea.addEventListener('input', () => {
  const left = MAX - textarea.value.length
  counter.textContent = left + ' characters left'
  counter.classList.remove('yellow','red')
  if (left <= 0) counter.classList.add('red')
  else if (left <= 20) counter.classList.add('yellow')
})

textarea.addEventListener('keydown', (e) => {
  const allowed = ['Backspace','Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Tab']
  if (textarea.value.length >= MAX && !allowed.includes(e.key)) e.preventDefault()
})

resetBtn.addEventListener('click', () => {
  textarea.value = ''
  counter.textContent = MAX + ' characters left'
  counter.classList.remove('yellow','red')
})
