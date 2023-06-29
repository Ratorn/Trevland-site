let headBurger = document.querySelector('.header_burger');
let headBurgerLineOne = document.querySelector('.header_burger_line_one');
let headBurgerLineTwo = document.querySelector('.header_burger_line_two');
let headBurgerLineThree = document.querySelector('.header_burger_line_three');
let headBurgerContent = document.querySelector('.head_burger_content');

let footArrowDown = document.querySelector('.footer_arrow_down');
let footContainer = document.querySelector('.footer_arrow_down_content');

headBurger.addEventListener('click', () => {
    if (headBurgerLineOne.className === 'header_burger_line_one') {
        headBurgerLineOne.classList.add('head_active');
    } else {
        headBurgerLineOne.classList.remove('head_active');
    };

    if (headBurgerLineTwo.className === 'header_burger_line_two') {
        headBurgerLineTwo.classList.add('head_active_two');
    } else {
        headBurgerLineTwo.classList.remove('head_active_two');
    };

    if (headBurgerLineThree.className === 'header_burger_line_three') {
        headBurgerLineThree.classList.add('head_active_three');
    } else {
        headBurgerLineThree.classList.remove('head_active_three');
    };

    if (headBurgerContent.className === 'head_burger_content') {
        headBurgerContent.classList.add('head_active_four');
    } else {
        headBurgerContent.classList.remove('head_active_four');
    };
});



footArrowDown.addEventListener('click', () => {
    if (footArrowDown.className === 'footer_arrow_down') {
        footArrowDown.classList.add('foot_active');
    } else {
        footArrowDown.classList.remove('foot_active');
    };

    if (footContainer.className === 'footer_arrow_down_content') {
        footContainer.classList.add('foot_active_two');
    } else {
        footContainer.classList.remove('foot_active_two');
    };
});