export const modalPrivacy = () => {
  const popupPrivacy = document.querySelector('.popup-privacy')
  const linkPrivacy = document.querySelectorAll('span.link-privacy')

  linkPrivacy.forEach(el => {
    el.addEventListener('click', () => {
      popupPrivacy.classList.add('vis')
    })
  })
  popupPrivacy.addEventListener('click', (e) => {
    const popupPrivacyClose = e.target.closest('.close')
    const popupDialog = e.target.closest('.popup-dialog')

    if (popupPrivacyClose || !popupDialog) {
      popupPrivacy.classList.remove('vis')
    }
  })
}