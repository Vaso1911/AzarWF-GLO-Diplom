import { removeAttrForm } from "./addAttr"

export const sendForm = () => {
  const forms = document.querySelectorAll('form')
  const thank = document.querySelector('.popup-thank')

  forms.forEach(form => {
    removeAttrForm(form)
    form.addEventListener('submit', async (e) => {
      e.preventDefault()

      const inputs = form.querySelectorAll('input[type="text"]')
      const inputsPhone = form.querySelectorAll('input[name="phone"]')
      const checkboxes = form.querySelectorAll('input[type="checkbox"]')
      const postData = {};
      let isValid = true



      inputsPhone.forEach(el => {
        const valueMask = el.inputmask.unmaskedvalue()
        if (valueMask.length !== 10) {
          isValid = false
        } else {
          postData[el.name] = valueMask;
        }
      })

      inputs.forEach(el => {
        if (el.value.trim() === '') {
          isValid = false
        } else {
          postData[el.name] = el.value.trim();
        }
      })

      checkboxes.forEach(el => {
        if (!el.checked) {
          isValid = false
        }  else {
          postData[el.name] = 'checked';
        }
      })

      if (isValid) {
        try {

          const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body:  JSON.stringify(postData),
            headers: {
              'Content-Type': 'application/json'
            }
          })

          if (response.ok) {
            const data = await response.json()
            console.log(data);
            thank.classList.add('vis')
            form.reset()
          } else {

            console.error('Произошла ошибка при отправке формы:', response.status)
          }
        } catch (error) {
          console.error('Произошла ошибка:', error)
        }
      } else {
        alert('Пожалуйста, заполните все поля и убедитесь, что вы согласны с политикой конфиденциальности.')
      }
    })
  })
}
