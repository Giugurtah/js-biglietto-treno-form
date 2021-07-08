// Puntatori elementi dela sezione form
var passengerName = document.getElementById("passenger_name");
var passengerKms = document.getElementById("passenger_kms");
var passengerAge = document.getElementById("passenger_age");
var generateTicket = document.getElementById("generate_ticket");
var reset = document.getElementById("reset");

// Puntatori elementi della sezione di stampa
var printTicket = document.getElementById("print_ticket");
var passengerNamePrinted = document.getElementById("passenger_name_printed");
var passengerDiscountPrinted = document.getElementById("passenger_discount_printed");
var carNumber = document.getElementById("car_number");
var trainCode = document.getElementById("train_code");
var finalPrice = document.getElementById("final_price");

// Codice di generazione e stampa biglietto
generateTicket.addEventListener("click", function(){
    // Calcolo prezzo finale 
    var price = passengerKms.value * 0.21;
    if (passengerAge.value === "under18") {
        price *= 0.8;
    } else if (passengerAge.value === "over65") {
        price *= 0.6;
    }

    // Calcolo numero random per il numero della carrozza
    var carRadNum = Math.floor(Math.random()*12 + 1);

    // Stampa dei risultati del form 
    passengerNamePrinted.innerText = passengerName.value;
    passengerDiscountPrinted.innerText = passengerAge.value;
    carNumber.innerText = carRadNum;
    trainCode.innerText = "58109";
    finalPrice.innerText = "Euro " + price.toFixed(2);

    // Rimozione classe hidden in modo da rendere la stampa visibile
    printTicket.classList.remove("hidden");
})

// Codice di reset stampa biglietto
reset.addEventListener("click", function(){
    // Aggiunta classe hidden in modo da rendere la stammpa non visibile
    printTicket.classList.add("hidden");

    // Reset dei valori del form al loro stato inziiale
    passengerName.value = "";
    passengerAge.value = "10";
    passengerAge.value = "over18";
})
