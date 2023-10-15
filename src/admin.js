const { formEnter } = require("./modules/admin/formEnter");
const { filter } = require("./modules/admin/filter");
const { UserService } = require("./modules/admin/userService");
const { addWork } = require("./modules/admin/addWork");
const { modal } = require("./modules/admin/modal");
const { render } = require("./modules/admin/render");
const { removeWork } = require("./modules/admin/removeWork");
const { editWork } = require("./modules/admin/editWork");
const { sortWorks } = require("./modules/admin/sortWorks");
const { searchWorks } = require("./modules/admin/searchWorks");
const indexHtml = document.querySelector('.body-auth')
window.userService = new UserService

if (indexHtml) {
  userService.getUsers().then(data => {
    data.forEach(el => {
      formEnter(el)
    });
  })
} else {
  userService.getWorks().then(data => {
    render(data)
  })

  addWork()
  removeWork()
  editWork()
  filter()
  modal()
  sortWorks()
searchWorks()
}


