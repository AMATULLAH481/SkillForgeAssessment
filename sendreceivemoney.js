function validateForm(){
    var bankName = document.getElementById("bank").value;
    var account= document.getElementById("account").value;
    var amount= document.getElementById("amount").value;

    if (bankName===""){
        alert (  "Fill in the bank name !!!!!");
        return false;
    }
    else if (account===""|| account.length <=8){
        alert (" Your account digits should be 8 or greater !!!");
        return false;
    }

    else if (amount===""){
            alert ("Input a valid amount !!!");
            return false;
    }
       else
        {   
            alert("You have successfully sent money to :" + bankName);
            document.getElementById("form").sendmoney();
        }
    

}