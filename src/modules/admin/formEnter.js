export const formEnter = (data) => {
  const form = document.getElementById('enter')
  const inputName = document.getElementById('name')
  const inputPassword = document.getElementById('type')
  const spanNameError = inputName.nextElementSibling
  const spanPasswordError = inputPassword.nextElementSibling

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const n = inputName.value
    const p = inputPassword.value

    const users = await fetch('http://localhost:1001/users').then(res => res.json())
    const user = users.find(u => u.login === n && u.password === p)

    if (user) {
      spanNameError.classList.remove('visible')
      spanPasswordError.classList.remove('visible')


      document.cookie = `user=${encodeURIComponent(user.login)} expires=${new Date(Date.now() + 86400000).toUTCString()} path=/`
      document.cookie = `password=${encodeURIComponent(user.password)} expires=${new Date(Date.now() + 86400000).toUTCString()} path=/`

      window.location.href = 'table.html'
    } else {
      spanNameError.classList.add('visible')
      spanPasswordError.classList.add('visible');
    }

    form.reset();
  })

};
