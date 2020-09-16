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
