function validateForm(){
    var name = document.getElementById("name").value;
    var phonenumber = document.getElementById("Phonenumber").value;
    var password = document.getElementById("Password").value;
    var occupation = document.getElementById("Occupation").value;
    var BVN = document.getElementById("BVN").value;

    if (name===""){
        alert (  "Fill your name field !!!!!");
        return false;
    }
    else if ( phonenumber.length<11){
        alert ("Fill your phonenumber field, it should not be less than 11 digits !!!!");
        return false;
    }
    else if (password===""|| password.length <=8){
        alert ("Your password should be longer than 8");
        return false;
    }
    else if (occupation===""){
        alert ("Fill your Occupation field !!!");
        return false;
    }
    else if (BVN===""){
        alert ("Fill your Occupation field !!!");
        return false;
    }
       else
        {
           alert("Your account has been successfully deleted !! ");
           document.getElementById("form").ConfirmDeletion();
        }
    

}