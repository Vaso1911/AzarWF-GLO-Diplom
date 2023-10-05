export const addPhone = () => {
  const wrapperChangePosition = document.querySelector('.header-contacts__phone-number-accord')
  const opacityPhone = document.querySelectorAll('.header-contacts__phone-number')[1]
  const headerContacts = document.querySelector('.header-contacts')

  wrapperChangePosition.style.top = '0px'
  opacityPhone.style.opacity = 0

  headerContacts.addEventListener('click', (e) => {
    const clickEvent = e.target.closest('.header-contacts__arrow')
    if (clickEvent) {
      wrapperChangePosition.style.top = wrapperChangePosition.style.top == '0px' ? '30px' : '0px';
      opacityPhone.style.opacity = opacityPhone.style.opacity == '0' ? '1' : '0'
    }


  })
}
