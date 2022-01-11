/* formalae
P = percentage / 100 
N = number of person
E = (Tip amount per person ) = ( bill * P ) / N
// TipOutput = (Math.floor(((billAmount * P) / N) * 100)) / 100;
TotalOutput = (total amount paid by each person) = ( bill / N ) + E
*/
const billAmount = document.querySelector('.input-1');
const numberOfPeople = document.querySelector('.input-3');
const inputPercentage = document.querySelector('.input-2');
const btn = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('.reset');
const errorField = document.querySelector('.NOP');

const tipOutput = document.querySelector('.tip-output');
const totalOutput = document.querySelector('.total-output');

let billAmountValue = 0, NOP = 0, P = 0, E, J;
// bill input setting
billAmount.addEventListener('input', () => {
    billAmountValue = parseFloat(billAmount.value);
    if (billAmountValue < 0 || billAmountValue === Infinity) {
        billAmountValue = 0;
        console.log('abe billAmountValue');
        return false;
    }
    else {
        errorField.classList.remove('error-field');
        calc();
    }
    calc();
});
// bill input setting

// percentage value setting P
inputPercentage.addEventListener('input', () => {
    P = parseFloat(inputPercentage.value);
    if (P < 0 || P === Infinity) {
        P = 0;
        console.log(`abe P`);
        return false;
    }
    else {
        calc();
    }
});

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        P = parseFloat(btn[i].value);
        inputPercentage.value = 'Custom';
        calc();
    });
}
// percentage value setting P

// number of person setting NOP
numberOfPeople.addEventListener('input', () => {
    NOP = parseInt(numberOfPeople.value);
    if (NOP < 0 || !NOP || NOP === Infinity) {
        errorField.classList.add('error-field');
        console.log('abe NOP');
        calc();
        return false;
    }
    else {
        errorField.classList.remove('error-field');
        calc();
    }
});
// number of person setting NOP

// reset button setting
resetBtn.addEventListener('click', () => {
    console.log(`call karo ji`);
    billAmount.value = 0;

    billAmountValue = 0;
    P = 'Custom';
    NOP = 0;
    inputPercentage.value = 'Custom';
    numberOfPeople.value = NOP;

    E = 0;
    tipOutput.value = (0).toFixed(2);
    tipOutput.innerText = tipOutput.value;
    console.log(tipOutput.value + 'ww');
    
    J = 0;
    totalOutput.value = (0).toFixed(2);
    totalOutput.innerText = totalOutput.value;
    console.log(totalOutput.value + 'tt');

    disabledBtn(1);
    console.log(`${billAmount.value}->BA ${NOP}->NOP ${P}->P ${tipOutput.value}->tip ${totalOutput.value}->total ${E}->E ${J}->J`);
});
// overall calc
function calc() {
    calcTip();
    calcTotal();
    console.log(`${billAmount.value}->BA ${NOP}->NOP ${P}->P ${tipOutput.value}->tip ${totalOutput.value}->total ${E}->E ${J}->J`);
}
// tip calculate setting
function calcTip() {
    E = parseFloat(((billAmountValue * (P / 100)) / NOP));
    if (E < 0 || !E || E === Infinity) {
        E = 0;
        tipOutput.value = E.toFixed(2);
        tipOutput.innerText = tipOutput.value;
       disabledBtn(1);
        return false;
    }
    else {
        disabledBtn(0);
        tipOutput.value = E.toFixed(2);
        tipOutput.innerText = parseFloat(tipOutput.value);
    }
}
// tip calculate setting

// total calculate setting
function calcTotal() {
    J = parseFloat((billAmountValue / NOP) + E);
    if (J < 0 || !J || J === Infinity) {
        J = 0;
        totalOutput.value = J.toFixed(2);
        totalOutput.innerText = totalOutput.value;
        disabledBtn(1);
        return false;
    }
    else {
        disabledBtn(0);
        totalOutput.value = J.toFixed(2);
        totalOutput.innerText = parseFloat(totalOutput.value);
    }
}
// total calculate setting

// disabled reset button setting
function disabledBtn(N) {
    if (N == 1) {
        resetBtn.classList.add('disabled');
        resetBtn.disabled = true;
        console.log('reset Btn disabled');
    }
    else {
        resetBtn.disabled = false;
        resetBtn.classList.remove('disabled');
        console.log(`reset btn enabled`);
    }
}
// disabled reset button setting
