/*
    1. Створити квадрат і розмістити його по центру body.

    2. При натисканні на стрілки квадрат зміщується у відповідному напрямку на 10px.
       Квадрат не повинен виходити за межі body.
        a. При кожному "врізанні" в body - квадрат відстрибує на 10px * 2 (20px) у протилежному напрямку.
        b. При кожному відстрибуванні – по центру квадрату з'являється напис "БЕМС", який зникає через 2 секунди.

    3. При натисканні на пробіл – квадрат підстрибує на 10px вгору і повертається на початкове місце.
       Для плавності анімації можна використовувати transition.

    4. При натисканні на CTRL – квадрат присідає: зменшуємо його висоту на 40% і збільшуємо ширину на 25%.
       Для плавності анімації можна використовувати transition.
*/

const divRef = document.querySelector('div');

// 1, 2
window.addEventListener('keydown', function (event) {

    // left
    if (event.keyCode === 37) {
        let goLeft = divRef.offsetLeft;

        if (goLeft >= 43) {
            divRef.style.left = goLeft - 10 + 'px';
        }
        if (goLeft === 43) {
            divRef.style.left = goLeft + 20 + 'px';
            divRef.textContent = 'БЕМС';
        }
        else {
            setTimeout(() => {
                divRef.textContent = '';
            }, 2000);
        }
    }
    // top
    if (event.keyCode === 38) {
        let goTop = divRef.offsetTop;

        if (goTop > 46) {
            divRef.style.top = goTop - 10 + 'px';
        }
        if (goTop === 46) {
            divRef.style.top = goTop + 20 + 'px';
            divRef.textContent = 'БЕМС';
        }
        else {
            setTimeout(() => {
                divRef.textContent = '';
            }, 2000);
        }
    }
    // right
    if (event.keyCode === 39) {
        let goRight = divRef.offsetLeft;

        if (goRight < window.innerWidth - 52) {
            divRef.style.left = goRight + 10 + 'px';
        }
        if (goRight === window.innerWidth - 43) {
            divRef.style.left = goRight - 20 + 'px';
            divRef.textContent = 'БЕМС';
        }
        else {
            setTimeout(() => {
                divRef.textContent = '';
            }, 2000);
        }
    }
    // bottom
    if (event.keyCode === 40) {
        let goBottom = divRef.offsetTop;

        if (goBottom < window.innerHeight - 53) {
            divRef.style.top = goBottom + 10 + 'px';
        }
        if (goBottom === window.innerHeight - 45) {
            divRef.style.top = goBottom - 20 + 'px';
            divRef.textContent = 'БЕМС';
        }
        else {
            setTimeout(() => {
                divRef.textContent = '';
            }, 2000);
        }
    }
});

// 3
window.addEventListener('keydown', function (event) {
    if (event.keyCode === 32) {
        let space = divRef.offsetTop;

        divRef.style.top = space - 10 + 'px';
        divRef.style.transition = 'all 0.5s';

        setTimeout(() => {
            divRef.style.top = space + 10 + 'px';
            divRef.style.transition = 'all 0.5s';
        }, 500);
    }
    else {
        divRef.style.transition = 'none';
    }
});

// 4)
window.addEventListener('keydown', function (event) {
    if (event.keyCode === 17) {
        let ctrlWidth = divRef.offsetWidth;
        let ctrlHeight = divRef.offsetHeight;

        divRef.style.width = ctrlWidth + (ctrlWidth * 0.25) + 'px';
        divRef.style.height = ctrlHeight - (ctrlHeight * 0.40) + 'px';
        divRef.style.transition = 'all 0.5s';

        setTimeout(() => {
            divRef.style.width = ctrlWidth + 0 + 'px';
            divRef.style.height = ctrlHeight + 0 + 'px';
            divRef.style.transition = 'all 0.5s';
        }, 500);
    }
});