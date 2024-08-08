var giftMsg=document.getElementById("gift")
var noteligibleMsg=document.getElementById("not-eligible")
var alreadyreceivedMsg=document.getElementById("already-received")
var giftP=document.getElementById("gift-p")
var noteligibleP=document.getElementById("not-eligible-p")
var alreadyreceivedP=document.getElementById("already-received-p")
var validateBtn=document.getElementById("validate")
var validateP=document.getElementById("msg")

function gift(){
    var age=100;
    if (age===100){
        giftP.textContent="Congratulations! You have a birthday card."
        giftP.style.color="green"
        console.log("Gifted")
    }
   else if (age<100){
   giftP.textContent="Elligible for birthday card."
giftP.style.color="blue"
        console.log("NotElligible")
    }
   else if (age>100){
   giftP.textContent="Sorry! You have already received one."
    giftP.style.color="red"
        console.log("Already Received One")
    }
}

function notEligible(){
    var age=80;
    if (age===100){
        noteligibleP.textContent="Congratulations! You have a birthday card."
        noteligibleP.style.color="green"
        console.log("Gifted")
    }
   else if (age<100){
    noteligibleP.textContent="Elligible for birthday card."
noteligibleP.style.color="blue"
        console.log("NotElligible")
    }
   else if (age>100){
    noteligibleP.textContent="Sorry! You have already received one."
    noteligibleP.style.color="red"
        console.log("Already Received One")
    }
  
}

function alreadyReceived(){
    var age=101;
    if (age===100){
        alreadyreceivedP.textContent="Congratulations! You have a birthday card."
        alreadyreceivedP.style.color="green"
        console.log("Gifted")
    }
   else if (age<100){
    alreadyreceivedP.textContent="Elligible for birthday card."
alreadyreceivedP.style.color="blue"
        console.log("NotElligible")
    }
   else if (age>100){
    alreadyreceivedP.textContent="Sorry! You have already received one."
    alreadyreceivedP.style.color="red"
        console.log("Already Received One")
    }
}
   validateBtn.addEventListener("click",()=>{
    var age=100;
    if (age===age){
validateP.textContent="Happy Birthday!!"
validateP.style.color="pink"
        console.log("HappyBirthday")
    }
       else if (age!==age){
        validateP.textContent="Invalid Age!"
        validateP.style.color="pink"
    console.log("Invalid")
       }
       
   }) 