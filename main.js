

// ROZWIĄZANIE PIERWSZE

// const button = document.querySelector(".panel__btn");
// const panel = document.querySelector(".panel");
// button.addEventListener("click", myFunction);
// function myFunction(){
//     const input = document.createElement('div.items');
//     input.className = 'input';
//     input.innerHTML = `<input type="text" maxlength="9" placeholder="numer telefonu"></input> <input maxlength="4" placeholder="kod odbioru"></input>`;
//     panel.appendChild(input);
//     input.style.cssText = `
//         padding-top: 30px;
//         width: 30%;
//         display: flex;
//         justify-content:space-between;
//     `  
//     if()
// }


// ROZWIĄZANIE DRUGIE


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

// newItem.classList.add(cointainer.show)
// const kontener = document.createElement('div');
// const form = document.querySelector("form");


open.style.cssText="display:none";


btn.addEventListener('click', (e)=>{
    e.preventDefault()
    form.classList.add('show');
    btn.parentNode.replaceChild(open,btn)
    open.style.cssText="display:block"
})

open.addEventListener('click', (e)=>{
    e.preventDefault();
    if (number.value == "12" && kod.value == "12" ){ 
        errorElement.innerHTML= '';
        number.value = ''
        kod.value = ''
        form.parentNode.replaceChild(newItem, form);
        newItem.classList.add("show");
        open.style.cssText="display:none;"
    }    
    else{
        // e.preventDefault()
        errorElement.innerHTML = 'wprowadź poprawne dane'
        number.value = ''
        kod.value = ''
    }

    // if (number.value == "123456789" && kod.value !== "1234" ){
    //     errorElement.innerHTML= 'błędny kod';
    //     kod.value = ''
    //     // e.preventDefault()
    // }

    // if (number.value !== "123456789" && kod.value == "1234" ){
    //     errorElement.innerHTML= 'błędny numer telefonu';
    //     number.value = ''
    // }
    // errorElement.innerHTML= '';
})

// btnEnd.addEventListener('click', (e)=>{
//     newItem.style.cssText="display:none";
//     panelEnd.style.cssText="display:block";

// })

btnEnd.addEventListener('click', (e)=>{
    panelEnd.style.cssText="display:block";
    newItem.style.cssText="display:none";
    // form.style.cssText="display:block";
    // panelEnd.style.cssText="display:block";
})

btnNext.addEventListener('click', (e)=>{
    // panelEnd.style.cssText="display:block";
    // newItem.style.cssText="display:none";
    // form.style.cssText="display:block";
    newItem.parentNode.replaceChild(form, newItem);
    open.style.cssText="display:block;"

    

    // panelEnd.style.cssText="display:block";
})
   
    

    
  








































































// var users = new Array("user1", "user2", "user3");
// var pass = new Array("kod1", "kod2", "kod3");
// function sprawdz_haslo(user, pass)
// {  
//   for(var i = 0; i < users.length; i++){
//     if((user == users[i]) && (pass == passwords[i]))
//       return true;
//   }
//   return false;
// }
// function check()
// {
//   var user = document.form1.user.value;
//   var pass = document.form1.pass.value;
//   if(!sprawdz_haslo(user, pass)){
//       alert('Niepoprawne hasło!');
//   }
//   else{
//     document.location.href = "wejdz.html";
//   }
// }







































// function myFunction() {
//     // Get the value of the input field with id="numb"
//     let x = document.getElementById("numb").value;
//     // If x is Not a Number or less than one or greater than 10
//     let text;
//     if (isNaN(x) || x < 1 || x > 10) {
//       text = "Input not valid";
//     } else {
//       text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }