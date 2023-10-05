export const smoothScroll = () => {
  const links = document.querySelectorAll('.menu-link')
  const footerLink = document.querySelector('.button-footer > a')

  const smoothScrollElem = (link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()

      const linkId = link.getAttribute('href').substring(1)
      const section = document.getElementById(linkId)

      if (section) {
        const topOffset = section.offsetTop

        window.scrollTo({
          top: topOffset,
          behavior: 'smooth'
        });
      }
    })
  }

  links.forEach(el => {
    smoothScrollElem(el)
  })

  smoothScrollElem(footerLink)

}