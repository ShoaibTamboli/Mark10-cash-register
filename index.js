var billamount=document.querySelector("#bill-amount");

var cashamountrecvd=document.querySelector(".cash-amount");

 var btncheck= document.querySelector("#btn-check");

 var message=document.querySelector(".error-msg")

 btncheck.addEventListener("click",function btnCheckClickListner(){
     message.style.display="block"
     if( billamount.value>cashamountrecvd.value || billamount.value===""){
         console.log("InValid")
         message.innerText="Enter Valid Amount"
     }
     else{
        message.style.display="none"
         console.log("valid")
        
         
     }
 })
