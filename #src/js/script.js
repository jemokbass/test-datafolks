//ALL_SCRIPTS
'use strict'
@@include("plugins.js");
@@include("modules.js");

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
