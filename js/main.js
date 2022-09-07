const idButtons = document.getElementById('buttons');
const allButtons = document.querySelectorAll('div.content__block');
const burgerMenu = document.querySelector('div.nav__burger');

idButtons.addEventListener('click', function(event) {
    let targetItem = event.target.id;
    str = targetItem.replace("b", "c");
    str = document.querySelector(`div.${str}`)

    if (event.target.closest('.nav__button')) {
        for (const i of allButtons) {
            i.classList.remove('active')
        }

        str.classList.toggle('active')
    }
})

burgerMenu.addEventListener('click', function(event) {
    idButtons.classList.toggle('active_inline')
})