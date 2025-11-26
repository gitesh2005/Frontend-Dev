const search = document.getElementById('search')
const tbody = document.querySelector('#studentTable tbody')
const nores = document.getElementById('nores')

search.addEventListener('input', () => {
  const q = search.value.trim().toLowerCase()
  let shown = 0
  Array.from(tbody.rows).forEach(row => {
    const txt = row.textContent.toLowerCase()
    if (txt.includes(q)) {
      row.style.display = ''
      shown++
    } else {
      row.style.display = 'none'
    }
  })
  nores.style.display = shown ? 'none' : ''
})
