const nav = document.querySelector('.nav');

document.getElementById('toggle').onclick = () => {
   (nav.classList.contains('show'))? nav.classList.remove('show')
   : nav.classList.add('show');
};
