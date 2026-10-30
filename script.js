/*
Name: Tahsim Anjam Shroddha
ID: 2331195
*/

function showWelcome() {
    var messageBox = document.getElementById("welcomeBox");
    var isWelcome = true;

    if (isWelcome) {
        messageBox.value = "Welcome to Forevermark Diamond Jewellery!";
    } else {
        messageBox.value = "Welcome back!";
    }
}

function showDiscountAlert() {
    var codeBox = document.getElementById("discountBox");
    var hasDiscount = true;

    if (hasDiscount) {
        codeBox.value = "Special Offer: Use code FOREVER2026 for 10% off!";
    } else {
        codeBox.value = "No discount available currently.";
    }
}

function addToCart() {
    var item = document.getElementById("itemBox").value;
    var cartStatus = document.getElementById("cartBox");

    if (item !== "") {
        cartStatus.value = item + " has been added to your cart!";
    } else {
        cartStatus.value = "Please select an item first.";
    }
}

function handleFormSubmit() {
    var nameField = document.getElementById("username").value;
    var statusBox = document.getElementById("statusBox");

    if (nameField !== "") {
        statusBox.value = "Thank you, " + nameField + "! Message received.";
    } else {
        statusBox.value = "Please enter your name before sending.";
    }
}

