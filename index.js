const numb = Array.from(document.querySelectorAll(".number span"));
const ope = Array.from(document.querySelectorAll(".operation span"));
const display = document.querySelector(".display h2");
const accessTrue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", ".", "=", "c", "Enter", "Backspace"];


numb.map(item => {
    item.addEventListener("click", function() {
        operation(this.dataset.numb);
    })
})

ope.map(item => {
    item.addEventListener("click", function() {
        operation(this.dataset.ope);
    })
})

window.addEventListener("keydown", function(e) {
    accessTrue.map(item => {
        operation( conditionsKey(e, item) );
    })

})

function conditionsKey(el, simbol) {
    if(el.key == simbol) {
        return simbol;
    }else {
        return "";
    }
}

function operation(el) {
    if(el == "=") {
        equal()
    }
    else if(el == "Enter") {
        equal()
    }
    else if(el == "Backspace") {
        backspace();
    }
    else if(el == "c") {
        display.innerHTML = "";
    }
    else {
        display.append(el);
    }
}

function equal() {
    let hasil = eval(display.innerHTML);
    display.innerHTML = hasil;
}

function backspace() {
    let teks = display.innerHTML;
    let newTeks = teks.split("");
    newTeks.pop();
    display.innerHTML = newTeks.join("");
}