let balance = 0;

// select the item opacity base on its type
function getListColor(type) {
    if (type === "income") {
        return "rgb(21, 255, 0, 0.6)";
    } 
    else if (type === "expense") {
        return "rgba(246, 0, 0, 0.5)"; 
    }
return "rgba(0, 0, 0, 0.5)";
}

function add() {

    let inputType = document.querySelector('#inputType').value;
    let inputValue = document.getElementById('amount').value;
    let inputNumber = Number(inputValue);

    // Check for valid input 
    if (isNaN(inputNumber) || inputNumber <= 0) {
        alert("SEGE Numberes!  :))");
        return;
    }

    // Add Date and its Format YYYY/MM/DD
    let now = new Date();
    let date = now.toISOString().slice(0, 10).replace(/-/g, '/'); 
    let time = now.toLocaleTimeString('en-GB', { hour12: false });

    // add new items to its corresponding list
    let newItem = document.createElement("div");
    newItem.innerHTML = `
        <span>${inputNumber} $</span>
        <div class="item-date">
                <span>${date}</span>
                <span class="item-time">${time}</span>
        </div>
        `;

    // add different opacity to the newly added items
    newItem.style.backgroundColor = getListColor(inputType);

    // Append these items to the correct list
    if (inputType == "income") {
        balance += inputNumber;
        document.getElementById('balance').innerHTML = balance;
        document.getElementById('incomes').appendChild(newItem);
    }
    else if (inputType == "expense") {
        balance -= inputNumber;
        document.getElementById('balance').innerHTML = balance;
        document.getElementById('expenses').appendChild(newItem);
    }

    // Clear the input field after each add
    document.getElementById('amount').value = "";
} // End add function

// delete current input, balance and lists
function reset() {
    balance = 0;
    document.getElementById('balance').innerText = balance;
    document.getElementById('amount').value = "";

    // clear the lists
    document.getElementById('incomes').innerHTML = '<p>Incomes</p>';
    document.getElementById('expenses').innerHTML = '<p>Expenses</p>';
}