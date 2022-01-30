const pickupBtn = document.getElementById("pickup-btn");
const openBtn = document.getElementById("open-btn");
const form = document.querySelector("form");
const number = document.getElementById("numer");
const kod = document.getElementById("kod");
const errorElement = document.getElementById('error');
const newItem = document.querySelector('.newItem');
const btnEnd = document.querySelector('.newItem-end');
const btnNext = document.querySelector('.newItem-next');
const panelEnd = document.querySelector('.panel-end');
const thx = document.getElementById('thx');

let time = 0
let interval;

pickupBtn.addEventListener('click', (e) => {
    e.preventDefault()
    showEl(form);
    showEl(openBtn);
    hideEl(pickupBtn);
    time = 0;
    interval = setInterval(increment, 1000);
})

openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (validate(number.value, kod.value)) {
        errorElement.innerHTML = '';
        number.value = ''
        kod.value = ''
        hideEl(form);
        showEl(newItem);
        hideEl(openBtn);
        showEl(panelEnd);
        showEl(thx);
        clearInterval(interval);
        thx.innerHTML = `Zrobiłeś to w czasie ${time} sekund! <br> Czy możemy zrobić dla Ciebie coś jeszcze?`;
    } else {
        errorElement.innerHTML = 'wprowadź poprawne dane'
        number.value = ''
        kod.value = ''
    }
})

btnEnd.addEventListener('click', (e) => {
    hideEl(newItem);
    hideEl(panelEnd);
    hideEl(thx);
    showEl(pickupBtn)
})

btnNext.addEventListener('click', (e) => {
    showEl(openBtn);
    showEl(form);
    hideEl(newItem);
    hideEl(thx);
})


function increment() {
    time++;
}

function showEl(el){
    el.classList.replace('hide','show');
}

function hideEl(el){
    el.classList.replace('show','hide');
}