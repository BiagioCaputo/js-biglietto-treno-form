console.log("JS OK");

//creo le mie variabili
const name = document.getElementById("name")
const kms = document.getElementById("kms");
const button = document.getElementById("button");
const finalprice = document.getElementById("priceticket");
const passengerName = document.getElementById("passenger-name");
const ticketType = document.getElementById("ticket-type");
const randomCarriage =  document.getElementById("random-carriage");
const randomCp =  document.getElementById("random-cp");



//Attivo l'ascolto sul bottone 

button.addEventListener("click", function(){

    //recupero i dati dell'utente
    const userName = name.value;
    const userKms = parseInt(kms.value);
    const userAge = document.getElementById("age").value;
    const price = userKms * 0.21;
    const randomNumCar = Math.floor(Math.random() * (21 - 1 )+1);
    const randomNumCp = Math.floor(Math.random() * (99999 - 90000)+90000);

    passengerName.innerText = userName;

    randomCarriage.innerText = randomNumCar;

    randomCp.innerText = randomNumCp;

   

    if (userAge ==="maggiorenne"){
        finalprice.innerText = price.toFixed(2);
        ticketType.innerText = "Biglietto Standard"
    }

    else if (userAge ==="minorenne"){
        const price20 = price - price * 20 / 100;
        finalprice.innerText =  price20.toFixed(2);   
        ticketType.innerText = "Biglietto Ridotto"    
    }

    else if (userAge ==="over65"){
        const price40 = price - price * 40 / 100;
        finalprice.innerText = price40.toFixed(2);
        ticketType.innerText = "Biglietto Ridotto"    
    }

        

})

