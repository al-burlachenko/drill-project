const body = document.querySelector('body');
const submenuLink = document.querySelector('.header-submenu');
const menuBtn = document.querySelector('.menu-btn');
const headerNavigation = document.querySelector('.header__menu-layout');
const headerContact = document.querySelector('.header__contact');

const onClick = () => {
  submenuLink.style.display =
    submenuLink.style.display === 'none' || submenuLink.style.display === '' ? 'block' : 'none';
};

const onOpenMenu = () => {
  headerNavigation.classList.toggle('is-open');
  menuBtn.firstElementChild.classList.toggle('is-open');
  menuBtn.lastElementChild.classList.toggle('is-open');
  // headerContact.classList.toggle('is-open');

  body.style.overflow = headerNavigation.classList.contains('is-open') ? 'hidden' : '';
  // console.log(body.removeAttribute('style'));
};

submenuLink.previousElementSibling.addEventListener('click', onClick);
menuBtn.addEventListener('click', onOpenMenu);

// возможно, слушатель надо будет удалять
