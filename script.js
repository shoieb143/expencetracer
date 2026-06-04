const totalAmount = document.getElementById('total-amount');
const totalCount = document.getElementById('total-count');
const foodAmount = document.getElementById('food-amount');
const foodCount = document.getElementById('food-amount');
const travelAmount = document.getElementById('travel-amount');
const travelCount = document.getElementById('travel-count');
const shoppingAmount = document.getElementById('shopping-amount');
const shoppingCount = document.getElementById('shopping-count');
const billsAmount = document.getElementById('bills-amount');
const billsCount = document.getElementById('bills-count');

let expenses = [];
let currentFilter = 'all';

const CATEGORIES = {
    food: { label: "Food", color: '#4ade80'},
    travel: { label: "Travel", color: '#5999e7'},
    shopping: { label: "Shopping", color: '#f472b6'},
    bills: { label: "Bills", color: '#a78bfa'}
}


document.addEventListener('DOMContentLoaded', function(){
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;

    const options = {
        weeks: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const headerDate = document.getElementById('header-date');
    if(headerDate) {
        headerDate.textContent = new Date().toLocaleDateString('en-IN', options);
}

});


function addExpense(){
    const title = titleInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value;
    const date = dateInput.value;

    if(!title){
        alert("Please enter the title for the expense.");
        return;
    }
    if(title.length <2){
        alert("Title must be atleast two characters.");
        titleInput.focus();
        return;
    }
    if(!amount || amount <=0 || isNaN(amount)){
        alert("Please enter a valid amount and also the amount should be greater than zero.");
        amountInput.focus();
        return;
    }
    if(amount > 1000000){
        alert("Amount seems to be too large. Please enter a valid amount.");
        amountInput.focus();
        return;
    }
    if(!date){
        alert("Please select a specific date.");
        return;
    }
}

const expense = {
    id: Date.now(),
    title: title,
    amount: amount,
    category: category,
    date:date,
    createdAt: new Date().toISOString
};

expenses.push(expense);
console.log("New Expense Added: ", expense);
console.log("All expenses: ", expenses)


titleInput.value = '';
amountInput.value = '';
categoryInput.value = 'food';
dateInput.value = new Date().toISOString().split('T')[0];


function deleteExpense(id){
    expenses = expenses.filter(function(expense){
        return expense.id !== id;
    });
    console.log("Expense deleted. Remaining: ", expenses)
}