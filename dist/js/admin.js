/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { formEnter } = __webpack_require__(/*! ./modules/admin/formEnter */ \"./modules/admin/formEnter.js\");\nconst { filter } = __webpack_require__(/*! ./modules/admin/filter */ \"./modules/admin/filter.js\");\nconst { UserService } = __webpack_require__(/*! ./modules/admin/userService */ \"./modules/admin/userService.js\");\nconst { addWork } = __webpack_require__(/*! ./modules/admin/addWork */ \"./modules/admin/addWork.js\");\nconst { modal } = __webpack_require__(/*! ./modules/admin/modal */ \"./modules/admin/modal.js\");\nconst { render } = __webpack_require__(/*! ./modules/admin/render */ \"./modules/admin/render.js\");\nconst { removeWork } = __webpack_require__(/*! ./modules/admin/removeWork */ \"./modules/admin/removeWork.js\");\nconst { editWork } = __webpack_require__(/*! ./modules/admin/editWork */ \"./modules/admin/editWork.js\");\nconst indexHtml = document.querySelector('.body-auth')\nwindow.userService = new UserService\n\nif (indexHtml) {\n  userService.getUsers().then(data => {\n    data.forEach(el => {\n      formEnter(el)\n    });\n  })\n} else {\n  userService.getWorks().then(data => {\n    render(data)\n  })\n\n  addWork()\n  removeWork()\n  editWork()\n  filter()\n  modal()\n}\n\n\n\n\n//# sourceURL=webpack:///./admin.js?");

/***/ }),

/***/ "./modules/admin/addWork.js":
/*!**********************************!*\
  !*** ./modules/admin/addWork.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addWork: () => (/* binding */ addWork)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/admin/render.js\");\n\n\nconst addWork = () => {\n  const form = document.querySelector('form')\n  const typeInput = form.querySelector('#type')\n  const nameInput = form.querySelector('#name')\n  const unitsInput = form.querySelector('#units')\n  const costInput = form.querySelector('#cost')\n\n  form.addEventListener('submit', (e) => {\n    e.preventDefault()\n    if (!form.dataset.method) {\n      const work = {\n        type: typeInput.value,\n        name: nameInput.value,\n        units: unitsInput.value,\n        cost: costInput.value,\n      }\n\n      userService.addWork(work).then(() => {\n        userService.getUsers().then(works => {\n          ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(works)\n          form.reset()\n        })\n      })\n    }\n\n  })\n\n}\n\n//# sourceURL=webpack:///./modules/admin/addWork.js?");

/***/ }),

/***/ "./modules/admin/editWork.js":
/*!***********************************!*\
  !*** ./modules/admin/editWork.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editWork: () => (/* binding */ editWork)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/admin/render.js\");\n\n\nconst editWork = () => {\n  const tbody = document.getElementById('table')\n  const form = document.querySelector('form')\n  const typeInput = form.querySelector('#type')\n  const nameInput = form.querySelector('#name')\n  const unitsInput = form.querySelector('#units')\n  const costInput = form.querySelector('#cost')\n\n  tbody.addEventListener('click', (e) => {\n    if (e.target.closest('.action-change')) {\n      const tr = e.target.closest('tr')\n      const id = tr.dataset.key\n\n      userService.getWorks(id).then(works => {\n        works.forEach(work => {\n          typeInput.value = work.type\n          nameInput.value = work.name\n          unitsInput.value = work.units\n          costInput.value = work.cost\n        });\n        form.dataset.method = id\n      })\n    }\n\n    if (e.target.closest('.cancel-button')) {\n      form.reset()\n    }\n  })\n\n  form.addEventListener('submit', (e) => {\n    e.preventDefault()\n    if (form.dataset.method) {\n      const id = form.dataset.method\n      const work = {\n        type: typeInput.value,\n        name: nameInput.value,\n        units: unitsInput.value,\n        cost: costInput.value,\n      }\n\n      userService.editWork(id, work).then(() => {\n        userService.getWorks().then(works => {\n          ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(works)\n        })\n      })\n\n    }\n\n  })\n\n}\n\n//# sourceURL=webpack:///./modules/admin/editWork.js?");

/***/ }),

/***/ "./modules/admin/filter.js":
/*!*********************************!*\
  !*** ./modules/admin/filter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filter: () => (/* binding */ filter)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/admin/render.js\");\n\n\nconst filter = () => {\n  const typeSelect = document.getElementById('typeItem')\n  typeSelect.addEventListener('change', function () {\n    const selectedType = this.value;\n    if (selectedType === 'Все услуги') {\n      fetch('http://localhost:1001/works')\n        .then(response => response.json())\n        .then(data => {\n          (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(data)\n        })\n        .catch(error => {\n          console.error('Произошла ошибка при получении данных:', error);\n        });\n    } else {\n      fetch('http://localhost:1001/works')\n        .then(response => response.json())\n        .then(data => {\n          const filteredData = data.filter(work => work.type === selectedType);\n          (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(filteredData)\n        })\n        .catch(error => {\n          console.error('Произошла ошибка при получении данных:', error);\n        })\n    }\n  })\n}\n\n\n\n\n\n//# sourceURL=webpack:///./modules/admin/filter.js?");

/***/ }),

/***/ "./modules/admin/formEnter.js":
/*!************************************!*\
  !*** ./modules/admin/formEnter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formEnter: () => (/* binding */ formEnter)\n/* harmony export */ });\nconst formEnter = (data) => {\n  const form = document.getElementById('enter')\n  const inputName = document.getElementById('name')\n  const inputPassword = document.getElementById('type')\n  const spanNameError = inputName.nextElementSibling\n  const spanPasswordError = inputPassword.nextElementSibling\n\n  form.addEventListener('submit', async (e) => {\n    e.preventDefault()\n\n    const n = inputName.value\n    const p = inputPassword.value\n\n    const users = await fetch('http://localhost:1001/users').then(res => res.json())\n    const user = users.find(u => u.login === n && u.password === p)\n\n    if (user) {\n      spanNameError.classList.remove('visible')\n      spanPasswordError.classList.remove('visible')\n\n\n      document.cookie = `user=${encodeURIComponent(user.login)} expires=${new Date(Date.now() + 86400000).toUTCString()} path=/`\n      document.cookie = `password=${encodeURIComponent(user.password)} expires=${new Date(Date.now() + 86400000).toUTCString()} path=/`\n\n      window.location.href = 'table.html'\n    } else {\n      spanNameError.classList.add('visible')\n      spanPasswordError.classList.add('visible');\n    }\n\n    form.reset();\n  })\n\n};\n\n\n//# sourceURL=webpack:///./modules/admin/formEnter.js?");

/***/ }),

/***/ "./modules/admin/modal.js":
/*!********************************!*\
  !*** ./modules/admin/modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modal: () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\n  const body = document.querySelector('.body-table')\n  const modal = document.getElementById('modal')\n\n  body.addEventListener('click', (e) => {\n    const close = e.target.closest('.button__close')\n    const btnAdd = e.target.closest('.btn-addItem')\n    const btnEdit = e.target.closest('.action-change')\n\n\n    if (close) {\n      modal.style.display = 'none'\n    }    if (btnAdd || btnEdit) {\n      modal.style.display = 'flex'\n    }\n  })\n\n\n}\n\n//# sourceURL=webpack:///./modules/admin/modal.js?");

/***/ }),

/***/ "./modules/admin/removeWork.js":
/*!*************************************!*\
  !*** ./modules/admin/removeWork.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeWork: () => (/* binding */ removeWork)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/admin/render.js\");\n\n\nconst removeWork = () => {\n  const tbody = document.getElementById('table')\n\n  tbody.addEventListener('click', (e) => {\n    if (e.target.closest('.action-remove')) {\n      const tr = e.target.closest('tr')\n      const id = tr.dataset.key\n\n      userService.removeWork(id).then(res => {\n        userService.getWorks().then(works => {\n          ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(works)\n        })\n      })\n    }\n  })\n}\n\n//# sourceURL=webpack:///./modules/admin/removeWork.js?");

/***/ }),

/***/ "./modules/admin/render.js":
/*!*********************************!*\
  !*** ./modules/admin/render.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nconst render = (data) => {\n  const tableBody = document.getElementById('tbody')\n  tbody.innerHTML = ''\n  data.forEach(works => {\n    tableBody.insertAdjacentHTML ('beforeend', `\n    <tr class=\"table__row\" data-key=\"${works.id}\">\n      <td class=\"table__id table__cell\">${works.id}</td>\n      <td class=\"table-type table__cell\">${works.type}</td>\n      <td class=\"table-name table__cell\">${works.name}</td>\n      <td class=\"table-units table__cell\">${works.units}</td>\n      <td class=\"table-cost table__cell\">${works.cost} руб</td>\n      <td>\n        <div class=\"table__actions table__cell\">\n          <button class=\"button action-change\"><span class=\"svg_ui\"><svg class=\"action-icon_change\"><use xlink:href=\"./img/sprite.svg#change\"></use></svg></span><span>Изменить</span>\n          </button>\n          <button class=\"button action-remove\"><span class=\"svg_ui\"><svg class=\"action-icon_remove\"><use xlink:href=\"./img/sprite.svg#remove\"></use></svg></span><span>Удалить</span>\n          </button>\n        </div>\n      </td>\n    </tr>\n    `)\n  });\n}\n\n\n\n//# sourceURL=webpack:///./modules/admin/render.js?");

/***/ }),

/***/ "./modules/admin/userService.js":
/*!**************************************!*\
  !*** ./modules/admin/userService.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserService: () => (/* binding */ UserService)\n/* harmony export */ });\nclass UserService  {\n  async fetchData(url, options) {\n    try {\n      const res = await fetch(url, options);\n      if (!res.ok) {\n        throw new Error('Произошла ошибка при запросе к серверу.');\n      }\n      return res.json();\n    } catch (error) {\n      console.error(error);\n      throw new Error('Произошла ошибка, данных нет!');\n    }\n  }\n\n  async getUsers() {\n    return await this.fetchData('http://localhost:1001/users');\n  }\n\n  async getWorks() {\n    return await this.fetchData('http://localhost:1001/works');\n  }\n\n  async addWork(work) {\n    return await this.fetchData('http://localhost:1001/works', {\n      method: 'POST',\n      headers: {\n        \"Content-Type\": \"application/json\",\n      },\n      body: JSON.stringify(work),\n    });\n  }\n\n  async removeWork(id) {\n    return await this.fetchData(`http://localhost:1001/works/${id}`, {\n      method: 'DELETE',\n    });\n  }\n\n\n  async editWork(id, work) {\n    return await this.fetchData(`http://localhost:1001/works/${id}`, {\n      method: 'PATCH',\n      headers: {\n        \"Content-Type\": \"application/json\",\n      },\n      body: JSON.stringify(work),\n    });\n  }\n}\n\n//# sourceURL=webpack:///./modules/admin/userService.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./admin.js");
/******/ 	
/******/ })()
;