const box = document.getElementById('box')
const coords = document.getElementById('coords')

box.addEventListener('mousemove', (e) => {
  const r = box.getBoundingClientRect()
  const x = Math.round(e.clientX - r.left)
  const y = Math.round(e.clientY - r.top)
  coords.textContent = `x: ${x} , y: ${y}`
})

box.addEventListener('dblclick', (e) => {
  const r = box.getBoundingClientRect()
  const x = e.clientX - r.left
  const y = e.clientY - r.top
  const dot = document.createElement('div')
  dot.className = 'dot'
  dot.style.left = x + 'px'
  dot.style.top = y + 'px'
  box.appendChild(dot)
})
