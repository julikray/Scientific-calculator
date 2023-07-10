console.log("Scientific calculator");
let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (e.target.innerHTML == 'pi'){
            input.value = Math.PI;
        }
        else if (e.target.innerHTML == 'sin') {
            input.value = Math.sin(input.value);
        }
        else if (e.target.innerHTML == 'cos') {
            input.value = Math.cos(input.value);
        }
        else if (e.target.innerHTML == 'tan') {
            input.value = Math.tan(input.value);
        }
        else if (e.target.innerHTML === '1/x') {
            input.value = 1 / input.value;
        }
        else if (e.target.innerHTML === 'e') {
            input.value = Math.E;
        }
        else if (e.target.innerHTML === 'x!') {
            input.value = factorial(input.value);
        }
        else if (e.target.innerHTML === 'x²') {
            input.value = Math.pow(input.value,2);
        }
        else if (e.target.innerHTML === 'x³') {
            input.value = Math.pow(input.value,3);
        }
        else if (e.target.innerHTML === '√') {
            
            input.value = Math.sqrt(input.value);
        }
        else if (e.target.innerHTML === '∛') {
            
            input.value = Math.cbrt(input.value);
        }
        else if (e.target.innerHTML == 'ln') {
            input.value = Math.log(input.value);

        }
        else if (e.target.innerHTML == 'ln10') {
            input.value = Math.log10(input.value);

        }
        else if (e.target.innerHTML == 'ln2') {
            input.value = Math.log2(input.value);

        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

