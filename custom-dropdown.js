const dd = document.getElementById('myDropdown')
const btn = document.getElementById('ddBtn')
const list = document.getElementById('ddList')

btn.addEventListener('click', (e) => {
  e.stopPropagation()
  list.style.display = list.style.display === 'block' ? 'none' : 'block'
})

list.addEventListener('click', (e) => {
  const opt = e.target.closest('.option')
  if (!opt) return
  btn.textContent = opt.textContent
  list.style.display = 'none'
})

document.addEventListener('click', (e) => {
  if (!dd.contains(e.target)) list.style.display = 'none'
}, true)
