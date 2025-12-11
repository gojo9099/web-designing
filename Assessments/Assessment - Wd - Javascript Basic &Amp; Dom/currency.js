var rates = {
    USD: { USD: 1, INR: 83.04, EUR: 0.92 },
    INR: { USD: 0.012, INR: 1, EUR: 0.011 },
    EUR: { USD: 1.08, INR: 90.12, EUR: 1 }
};

document.getElementById("convert").addEventListener("click", function () {
    var amount = document.getElementById("amount").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var resultBox = document.getElementById("result");

    if (!amount || amount <= 0) {
        resultBox.innerText = "Enter valid amount";
        return;
    }

    var total = amount * rates[from][to];
    resultBox.innerText = amount + " " + from + " = " + total.toFixed(2) + " " + to;
});
