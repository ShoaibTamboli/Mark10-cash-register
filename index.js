var billamount = document.querySelector("#bill-amount");

var cashamountrecvd = document.querySelector(".cash-amount");

var btncheck = document.querySelector("#btn-check");

var message = document.querySelector(".error-msg")

const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

btncheck.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billamount.value > 0) {
    
    if (cashamountrecvd.value >= billamount.value) {
     
      const amountToBeReturned = cashamountrecvd.value - billamount.value; 
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Do you wanna wash plates?");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {
  
  for (let i = 0; i < availableNotes.length; i++) {
   
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
   

    
    amountToBeReturned = amountToBeReturned % availableNotes[i];
   
    
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
