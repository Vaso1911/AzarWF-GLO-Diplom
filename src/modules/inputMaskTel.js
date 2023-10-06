import Inputmask from "inputmask"

export const inputMaskTel = () => {
  const inputTel = document?.querySelectorAll('input[name="phone"]')
  const inputMask = new Inputmask('+7 (999) 999-99-99')

  inputTel.forEach(el => {
    inputMask.mask(el)
  })
}