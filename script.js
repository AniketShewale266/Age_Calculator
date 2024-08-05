const submit = document.querySelector('#submit');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const error1 = document.querySelector('#error1');
const error2 = document.querySelector('#error2');
const error3 = document.querySelector('#error3');
const dayError = document.querySelector('#day-error');
const monthError = document.querySelector('#month-error');
const yearError = document.querySelector('#year-error');

const resultYears = document.querySelector('#resultYears');
const resultMonths = document.querySelector('#resultMonths');
const resultDays = document.querySelector('#resultDays');


const monthDay = [31,28,31,30,31,30,31,31,30,31,30,31];
// console.log(submit);
// console.log(error);
const today = new Date();

day.addEventListener('input',()=>{
    dayError.style.color = ''
    day.style.borderColor = ''
    error1.textContent = ''; 
})

month.addEventListener('input',()=>{
    monthError.style.color = ''
    month.style.borderColor = ''
    error2.textContent = '';
})


year.addEventListener('input',()=>{
    yearError.style.color = ''
    year.style.borderColor = ''
    error3.textContent = '';
})



function validateInputs() {    
    let isValid = true;

    if (day.value === '') {
        error1.textContent = 'This field is required';
        dayError.style.color = 'hsl(0, 100%, 67%)';
        day.style.borderColor = 'hsl(0, 100%, 67%)';
        isValid = false;
    }

    if(day.value > monthDay[month.value-1]){
        error1.textContent = 'Invalid Day';
        isValid = false;
    }

    if(day.value > 31){
        error1.textContent = 'Must be a valid day';
        isValid = false;
    }

    if (month.value === '') {
        error2.textContent = 'This field is required';
        monthError.style.color = 'hsl(0, 100%, 67%)';
        month.style.borderColor = 'hsl(0, 100%, 67%)';
        isValid = false;
    }

    if(month.value > 12){
        error2.textContent = 'Must be a valid month';
        isValid = false;
    }

    if (year.value === '') {
        error3.textContent = 'This field is required';
        yearError.style.color = 'hsl(0, 100%, 67%)';
        year.style.borderColor = 'hsl(0, 100%, 67%)';
        isValid = false;
    }

    if(year.value > today.getFullYear()){
        error3.textContent = 'Must be in the past';
        isValid = false;
    }

    return isValid;
}

const calculateAge = ()=>{
    const birthDate = new Date(year.value, month.value-1, day.value);

    const currentDate = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    let years = currentYear - birthDate.getFullYear();
    let months = currentMonth - (birthDate.getMonth() + 1);
    let days = currentDate - birthDate.getDate();

    if(days < 0){
        months--;
        const prevMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
        days += prevMonth;
    }

    if(months < 0){
        years--;
        months += 12;
    }

    return {years, months, days}
}

submit.addEventListener('click',()=>{
    if (!validateInputs()) {
        return;
    }

   
    let res = calculateAge();
    console.log(res);

    resultYears.textContent = res.years
    resultMonths.textContent = res.months
    resultDays.textContent = res.days
    

    // console.log("Calculation" , today);

    
})


