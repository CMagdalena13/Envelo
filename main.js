const btn = document.querySelector("button");
const open = document.querySelector(".panel__open");
const form = document.querySelector("form");
const number = document.getElementById("numer");
const kod = document.getElementById("kod");
const errorElement = document.getElementById('error');
const newItem = document.querySelector('.newItem');
const btnEnd = document.querySelector('.newItem__end');
const btnNext = document.querySelector('.newItem__next');
const panelEnd = document.querySelector('.panel__end');



open.style.cssText = "display:none";

btn.addEventListener('click', (e) => {
    e.preventDefault()
    form.classList.add('show');
    btn.parentNode.replaceChild(open, btn)
    open.style.cssText = "display:block"
})

open.addEventListener('click', (e) => {
    e.preventDefault();
    if (number.value === "12" && kod.value === "12") {
        errorElement.innerHTML = '';
        number.value = ''
        kod.value = ''
        form.parentNode.replaceChild(newItem, form);
        newItem.classList.add("show");
        open.style.cssText = "display:none;"
    } else {
        errorElement.innerHTML = 'wprowadź poprawne dane'
        number.value = ''
        kod.value = ''
    }


})


btnEnd.addEventListener('click', (e) => {
    panelEnd.style.cssText = "display:block";
    newItem.style.cssText = "display:none";

})

btnNext.addEventListener('click', (e) => {
    newItem.parentNode.replaceChild(form, newItem);
    open.style.cssText = "display:block;"


})