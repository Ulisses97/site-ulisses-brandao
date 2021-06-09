const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Scroll

const menuItems = document.querySelectorAll('#menu a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event){
  event.preventDefault();

  const element = event.target;
  const id = element.getAttribute('href');
  const section = document.querySelector(id)
  const to = section.offsetTop

  window.scroll({
    top: to-200,
    behavior: "smooth"
  })
}

// Maquina de Escrever
const refText = document.querySelector('[data-js="text-animado"]')

const mensagem = ['Back-end, Front-end, Mobile & UI/UX  ', 'NodeJs, React, React Native, Figma, Photoshop, illustrator, After Effects  ']

let messageIndex = 0;
let characterIndex = 0;
let currentMessage = '';
let currentCharacters = '';

const type = () =>{

  const digitePrimeiraMensagem = messageIndex === mensagem.length;

  if(digitePrimeiraMensagem){
    messageIndex = 0;
  }

  currentMessage = mensagem[messageIndex];
  currentCharacters = currentMessage.slice(0, characterIndex++);
  refText.textContent = currentCharacters;

  const digiteSegundaMensagem = currentCharacters.length === currentMessage.length;


  if(digiteSegundaMensagem){
    messageIndex++;
    characterIndex = 0;
  }
}
setInterval(type, 200)

// text-animado