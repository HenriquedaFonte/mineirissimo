window.addEventListener('scroll', onScroll);

onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  //innerHeigth = altura visivel da pagina
  //tergetLine sera a linha no meio da pagina para definir
  //se as secoes da pagina passam pela metade da pagina.
  const targetLine = scrollY + innerHeight / 2;

  //verificar se o topo secao passou da linha.

  //offset = deslocamento da pagina, no caso abaixo,
  //o deslocamento do topo da pagina.
  // home é o id da minha div home.
  const sectionTop = section.offsetTop;

  const sectionHeight = section.offsetHeight;
  //o nome da const ja indica o que ela é:
  // o topo da seção chegou/alcançou ou passou da targetLine?
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  // console.log(sectionTopReachOrPassedTargetLine);

  //verficar se a base da secao passou da linha

  // const indica o fim da secao
  const sectionEndsAt = sectionTop + sectionHeight;

  // const retorna se o final da secao passou da linha alvo
  const sectionEndsPassedTargetLine = sectionEndsAt <= targetLine;
  // console.log(sectionEndsPassedTargetLine);


  //(sectionBoundaries)limite a secao
  // && indica que ambas as afirmacoes tem que ser verdaderas para
  // que o valor retornado seja verdadeiro.
  // a exclamacao (!) pode ser usado para negar a espressao. 
  //const sectionBoundaries sera verdadeiro se o sectionEndsPassedTargetLine
  //for verdadeiro e se o sectionEndsPassedTargetLine for falso.
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndsPassedTargetLine;
  // console.log(sectionBoundaries);

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove('active');

  if (sectionBoundaries) {
    menuElement.classList.add('active');
  }
}

function showNavOnScroll() {
  if (scrollY == 0) {
    navigation.classList.remove('scroll');
  } else {
    navigation.classList.add('scroll');
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY < 415) {
    backToTopButton.classList.remove('show');
  } else {
    backToTopButton.classList.add('show');
  }
}

function openMenu() {
  /*uma segunda opcao de chamar a classe:
  document.body.classList.add("menuExpanded")*/
  menuExpanded.classList.add('menuExpanded');
}

function closeMenu() {
  menuExpanded.classList.remove('menuExpanded');
}

// criando objeto no JavaScript:
// Referenciamos o objeto com um VAR e entre {}
// colocamos os seus valores,
// ex. var teste = {
//     nome:"testeNome"
//     color:testeColor
// }
ScrollReveal({
  origin: 'bottom',
  distance: '30px',
  duration: 700, 
  reset: true
}).reveal(`
#home, 
#home .number,
#services,
#services header,
#services .card
#about,
#about header,
#about .content`);
© 2022 GitHub, Inc.
Term
