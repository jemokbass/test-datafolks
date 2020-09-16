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
