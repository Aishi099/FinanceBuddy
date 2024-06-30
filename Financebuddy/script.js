document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    addExpense(name, amount);
    updateTotalExpenses();
});

document.getElementById('budget-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('budget-amount').value);
    document.getElementById('total-budget').innerText = `$${amount.toFixed(2)}`;
});

document.getElementById('bill-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('bill-name').value;
    const date = document.getElementById('bill-date').value;
    addBillReminder(name, date);
});

document.getElementById('investment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('investment-name').value;
    const amount = parseFloat(document.getElementById('investment-amount').value);
    addInvestment(name, amount);
    updateTotalInvestments();
});

function addExpense(name, amount) {
    const expenseList = document.getElementById('expense-list');
    const listItem = document.createElement('li');
    listItem.innerText = `${name}: $${amount.toFixed(2)}`;
    expenseList.appendChild(listItem);
}

function updateTotalExpenses() {
    const expenseList = document.getElementById('expense-list').children;
    let total = 0;
    for (let item of expenseList) {
        const amount = parseFloat(item.innerText.split('$')[1]);
        total += amount;
    }
    document.getElementById('total-expenses').innerText = `$${total.toFixed(2)}`;
}

function addBillReminder(name, date) {
    const billList = document.getElementById('bill-list');
    const listItem = document.createElement('li');
    listItem.innerText = `${name}: ${date}`;
    billList.appendChild(listItem);
}

function addInvestment(name, amount) {
    const investmentList = document.getElementById('investment-list');
    const listItem = document.createElement('li');
    listItem.innerText = `${name}: $${amount.toFixed(2)}`;
    investmentList.appendChild(listItem);
}

function updateTotalInvestments() {
    const investmentList = document.getElementById('investment-list').children;
    let total = 0;
    for (let item of investmentList) {
        const amount = parseFloat(item.innerText.split('$')[1]);
        total += amount;
    }
    document.getElementById('investment-value').innerText = `$${total.toFixed(2)}`;
}
