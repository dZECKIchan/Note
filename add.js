let description = document.getElementById("description");
let main = document.getElementById('main');
let submit = document.querySelector("button");

let counter;

if(localStorage.getItem('counter') === null){
    localStorage.setItem('counter', '0');
}

submit.addEventListener('click', function(){

    if(main.value === "" || description.value === ""){
        window.alert("Заповніть усі поля!")
    }

    else{
        counter = Number(localStorage.getItem('counter'))

        localStorage.setItem(`main${Number(localStorage.getItem('counter')) + 1}`, main.value);
        localStorage.setItem(`description${Number(localStorage.getItem('counter')) + 1}`, description.value);
        counter++;

        localStorage.setItem(`counter`, counter);

        window.location.href = 'index.html';
    }
})

