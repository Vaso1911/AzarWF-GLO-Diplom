export const sendForm = () => {
const forms = document.querySelectorAll('form')
const thank = document.querySelector('.popup-thank')

forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputs = form.querySelectorAll('input[type="text"]');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    let isValid = true;

    inputs.forEach(input => {
      if (input.value.trim() === '') {
        isValid = false;
        // Возможно, вы хотите добавить какие-то стили или сообщения об ошибке для незаполненных полей
        input.classList.add('error'); // добавить класс 'error' для стилизации
      }
    });

    checkboxes.forEach(checkbox => {
      if (!checkbox.checked) {
        isValid = false;
        // Аналогично, здесь вы можете добавить стили или сообщения об ошибке для ненажатых чекбоксов
        checkbox.classList.add('error'); // добавить класс 'error' для стилизации
      }
    });

    if (!isValid) {
      console.log('Пожалуйста, заполните все поля и убедитесь, что все чекбоксы отмечены.');
    } else {
      thank.classList.add('vis')
    }
  });
});

}