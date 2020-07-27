calc.one.addEventListener('click', () => {
    calc.result.value += '1';
}, false)

calc.two.addEventListener('click', () => {
    calc.result.value += '2';
}, false)

calc.plus.addEventListener('click', () => {
    calc.result.value += '+';
}, false)

calc.equal.addEventListener('click', () => {
    calc.result.value = eval(calc.result.value);
}, false)