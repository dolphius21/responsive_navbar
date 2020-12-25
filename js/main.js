const nav = document.querySelector('.nav');
const toggle = document.querySelector('#toggle-icon');

document.getElementById('toggle').onclick = () => {
   if (nav.classList.contains('show')) {
      nav.classList.remove('show');
      toggle.classList.remove('fa-times');
      toggle.classList.add('fa-bars');
   } else {
      nav.classList.add('show');
      toggle.classList.remove('fa-bars');
      toggle.classList.add('fa-times');
   }
};
