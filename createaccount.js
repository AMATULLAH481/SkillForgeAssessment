function validateForm(){
    var name = document.getElementById("name").value;
    var phonenumber = document.getElementById("Phonenumber").value;
    var StateOfResidence = document.getElementById("State-of-residence").value;
    var password = document.getElementById("Password").value;
    var occupation = document.getElementById("Occupation").value;
    var bvn = document.getElementById("BVN").value;

    if (name===""){
        alert (  "Fill your name field !!!!!");
        return false;
    }
    else if ( phonenumber.length<11){
        alert ("Fill your phonenumber field, it should not be less than 11 digits !!!!");
        return false;
    }
    else if (StateOfResidence===""){
        alert ("Fill your State-of-residence field !!!");
        return false;
    }
    else if (password===""|| password <=8){
        alert ("Fill your phoneNumber field !!!");
        alert ("Your password should be longer than 8");
        return false;
    }
    else if (occupation===""){
        alert ("Fill your Occupation field !!!");
        return false;
    }

    else if (bvn===""){
            alert ("Fill your bvn field !!!");
            return false;
    }
       else
        {   
            errorMessage.innerHTML = " ";
            errorMessage.display.style = "none";
            document.getElementById("form").CreateAccount();
        }
    

}