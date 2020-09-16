//ALL_SCRIPTS
'use strict'
//PLUGINS_JS
//WEBP IMAGE IN WEBSITES
function testWebP(callback) {
   let webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});

;
//MODULES
//PLACEHOLDER for input, for textarea
function placeholders() {
   const input = document.querySelectorAll('.input'),
      textarea = document.querySelectorAll('.textarea');
   if (input) {
      input.forEach(item => {
         item.addEventListener('focus', function (e) {
            item.setAttribute('placeholder', '')
         });
         const place = item.placeholder;
         item.addEventListener('blur', function (e) {
            item.setAttribute('placeholder', place)
         });
      })
   } else return false;
   if (textarea) {
      textarea.forEach(item => {
         item.addEventListener('focus', function (e) {
            item.setAttribute('placeholder', '')
         });
         const place = item.placeholder;
         item.addEventListener('blur', function (e) {
            item.setAttribute('placeholder', place)
         });
      })
   } else return false;
}

const form = document.querySelectorAll('form'),
   inputForm = document.querySelectorAll('input');

function mask() {
   if (form) {
      form.forEach(i => {
         const inputMask = document.querySelectorAll('[name]');
         inputMask.forEach(item => {
            item.addEventListener('input', (e) => {
               let attr = item.getAttribute('name');
               if (attr === 'form[tel]') {
                  let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
               }
               if (attr === 'form[name]') {
                  e.target.value = e.target.value.replace(/[0-9]/g, '')
               }
               if (attr === 'form[email]') {
               }
               else return false;
            })
         })
      })
   } else return false;
}

const validate = () => {
   form.forEach(i => {
      i.addEventListener('submit', (e) => {
         if (e.target) {
            e.preventDefault();
            const formTarget = e.target;
            if (!e.target.classList.contains('error')) {
               const inputMask = document.querySelectorAll('[name]');
               inputMask.forEach((item, index, array) => {
                  if (item.value == '') {
                     formTarget.classList.add('error')
                     setTimeout(() => {
                        formTarget.classList.remove('error')
                     }, 4000);
                  }
                  const attr = item.getAttribute('name'),
                     invalid = () => {
                        item.insertAdjacentHTML('beforebegin', '<div class="invalid">Поле пустое</div>')
                        item.style.border = ""
                        setTimeout(() => {
                           item.previousSibling.remove();
                        }, 4000)
                     },
                     valid = item.style.border = "1px solid green";
                  if (attr === 'form[name]') {
                     if (item.value === '' || item.value === null) {
                        invalid()
                     } else {
                        valid
                     }
                  }
                  if (attr === 'form[tel]') {
                     if (item.value.length <= 9) {
                        invalid()
                     } else {
                        valid
                     }
                  }
                  if (attr === 'form[email]') {
                     if (item.value === '' || item.value === null) {
                        invalid()
                     } else {
                        valid
                     }
                  }
                  if (!formTarget.classList.contains('error') && array !== '') {
                     const formData = item.value
                     console.log(formData)
                  }
               })
            }
         }

      })
   })
}

//MODAL_WINDOW
function bindModal(triggerSelector, modalSelector, modalContentSelector) {
   const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      modalContent = document.querySelector(modalContentSelector),
      close = document.querySelectorAll('.modal__close-btn');
   trigger.forEach(i => {
      i.addEventListener('click', (e) => {
         if (e.target) {
            e.preventDefault();
         }
         modal.classList.add('active')
         modalContent.classList.add('active')
         document.body.style.overflow = 'hidden'
      })
   })
   close.forEach(i => {
      i.addEventListener('click', (e) => {
         e.preventDefault();
         modal.classList.remove('active')
         modalContent.classList.remove('active')
         document.body.style.overflow = ''
      })
   })
   modal.addEventListener('click', (e) => {
      if (e.target === modal) {
         modal.classList.remove('active')
         modalContent.classList.remove('active')
         document.body.style.overflow = ''
      }
   })
}
bindModal('.modal-btn--1', '.modal--1', '.modal__inner--1');
bindModal('.modal-btn--2', '.modal--2', '.modal__inner--2');
bindModal('.modal-btn--3', '.modal--3', '.modal__inner--3');

;

const moreContent = () => {
   const btnMore = document.querySelector('.project__btn-link'),
      moreContent = document.querySelector('.project__inner--more');
   btnMore.addEventListener('click', (e) => {
      e.preventDefault()
      e.target.parentNode.classList.add('active')
      setTimeout(() => {
         moreContent.classList.add('active')
      }, 200);
   })
}
window.addEventListener('DOMContentLoaded', () => {
   moreContent()
   placeholders();
   mask();
   validate();
})
