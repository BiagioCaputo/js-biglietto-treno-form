console.log("JS OK");

//creo le mie variabili
const name = document.getElementById("name")
const kms = document.getElementById("kms");
const button = document.getElementById("button");
const finalprice = document.getElementById("priceticket");
const passengerName = document.getElementById("passenger-name");



//Attivo l'ascolto sul bottone 

button.addEventListener("click", function(){

    //recupero i dati dell'utente
    const userName = name.value;
    const userKms = parseInt(kms.value);
    const userAge = document.getElementById("age").value;
    const price = userKms * 0.21;

    passengerName.innerText = userName;

    console.log(userKms);
    console.log(userAge);

    if (userAge ==="maggiorenne"){
        finalprice.innerText = price.toFixed(2);
    }

    else if (userAge ==="minorenne"){
        const price20 = price - price * 20 / 100;
        finalprice.innerText =  price20.toFixed(2);       
    }

    else if (userAge ==="over65"){
        const price40 = price - price * 40 / 100;
        finalprice.innerText = price40.toFixed(2); 
    }

        

})

