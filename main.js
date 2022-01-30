const pickupBtn = document.getElementById("pickup-btn");
const openBtn = document.getElementById("open-btn");
const form = document.querySelector("form");
const number = document.getElementById("numer");
const kod = document.getElementById("kod");
const errorElement = document.getElementById('error');
const newItem = document.querySelector('.newItem');
const btnEnd = document.querySelector('.newItem__end');
const btnNext = document.querySelector('.newItem__next');
const panelEnd = document.querySelector('.panel__end');
const thx = document.getElementById('thx');
const gigaChadBtn = document.getElementById('panel__gigachad-end');

let time = 0
let interval;

pickupBtn.addEventListener('click', (e) => {
    e.preventDefault()
    form.classList.replace('hide', 'show');
    openBtn.classList.replace('hide', 'show');
    pickupBtn.classList.replace('show', 'hide');
    time = 0;
    interval = setInterval(increment, 1000);
})

openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (validate(number.value, kod.value)) {
        errorElement.innerHTML = '';
        number.value = ''
        kod.value = ''
        form.classList.replace('show','hide');
        newItem.classList.replace('hide','show');
        openBtn.classList.replace("show", "hide");
    } else {
        errorElement.innerHTML = 'wprowadź poprawne dane'
        number.value = ''
        kod.value = ''
    }
})

btnEnd.addEventListener('click', (e) => {
    panelEnd.classList.replace('hide','show');
    thx.classList.replace('hide','show');
    newItem.classList.replace('show','hide');
    gigaChadBtn.classList.replace('hide', 'show');
    clearInterval(interval);
    thx.innerHTML = `Dziękujemy za skorzystanie z naszych usług! &nbsp;&nbsp;&nbsp;&nbsp;Odebrałeś przesyłkę w ${time} sekund.`;
})

btnNext.addEventListener('click', (e) => {
    openBtn.classList.replace('hide', 'show');
    form.classList.replace('hide','show');
    newItem.classList.replace('show','hide');
})

gigaChadBtn.addEventListener('click', (e)=>{
    pickupBtn.classList.replace('hide','show');
    form.classList.replace('show', 'hide');
    gigaChadBtn.classList.replace('show','hide');
    panelEnd.classList.replace('show','hide');
})

function increment() {
    time++;
}