let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (event) => {
        if (event.target.innerHTML == '=') {
            string = eval(string);
        } else if(event.target.innerHTML == 'AC') {
            string = "";
        } else if(event.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length -1);
        } else {
            string += event.target.innerHTML;    
        }
        input.value = string;
    });
});