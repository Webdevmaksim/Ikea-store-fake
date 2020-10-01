export const catalog = () => {
// Day1

const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const btnClose = document.querySelector('.btn-close');
const catalogList = document.querySelector('.catalog-list');
const subCatalog = document.querySelector('.subcatalog');
const body = document.querySelector('body');
const subcatalogHeader = document.querySelector('.subcatalog-header');
const btnReturn = document.querySelector('.btn-return');
// const catalogListItem = document.querySelector('.catalog-list__item');

//Generate overlay div to avoid access issue on generated pages.
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);


const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
    body.classList.add('lock');
};

const closeMenu = () => {
    closeSubMenu();
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    body.classList.remove('lock');

};
// Открытие под меню
const openSubMenu = (event) => {
    event.preventDefault();
    const itemList = event.target.closest('.catalog-list__item');

    if (itemList) {
        itemList.classList.toggle('active');
        subcatalogHeader.innerHTML = itemList.innerHTML;
        subCatalog.classList.add('subopen');
        //how to toggle active class for "this" instead of "itemList" variable ? Pls help,I am a new to JS world :)
    };
};
//Закрытие подменю
const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
};

//навесить событие на константу 
btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
catalogList.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);
// Закрытие по полю
overlay.addEventListener('click', closeMenu);
//Закрытие на клавишу ESC
document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape'){
        closeMenu();
    };
});
}