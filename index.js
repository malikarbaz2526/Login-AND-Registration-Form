
var sign_in=document.getElementById("navbar2")
    sign_in.style.display="block"
var sign_up = document.getElementById("navbar")
sign_up.style.display="none"



function func(){
   if(sign_in.style.display=="none"){
    sign_in.style.display="block"
    sign_up.style.display="none"
   } 
   else{
    sign_in.style.display="none"
    sign_up.style.display="block"
   }

}





var password=document.getElementById("password")
var show=document.getElementById("show")
// show.style.display="block"
var hide=document.getElementById("hide")
// hide.style.display="none"


function show_hide(){

    if(password.type=="password"){
        password.type="text"
        hide.style.display="none"
        show.style.display="block"

    }
    else{
        password.type="password"
        hide.style.display="block"
        show.style.display="none"
    }
}




var passwords=document.getElementById("passwords")
var shows=document.getElementById("shows")
// shows.style.display="block"
var hides=document.getElementById("hides")
// hides.style.display="none"

function show_hide1(){

    if(passwords.type=="password"){
        passwords.type="text"
        hides.style.display="none"
        shows.style.display="block"

    }
    else{
        passwords.type="password"
        hides.style.display="block"
        shows.style.display="none"
    }
}
var passwordss=document.getElementById("passwordss")
var showss=document.getElementById("showss")
// showss.style.display="block"
var hidess=document.getElementById("hidess")
// hidess.style.display="none"

function show_hide2(){

    if(passwordss.type=="password"){
        passwordss.type="text"
        hidess.style.display="none"
        showss.style.display="block"

    }
    else{
        passwordss.type="password"
        hidess.style.display="block"
        showss.style.display="none"
    }
}



   function obj(){

  var Password = document.getElementById("password").value
  var Email = document.getElementById("email").value
  if(Password=="" || Email==""){
    alert("Please Fill The Full Information")
    return false; 
  }
 
    var signIn_data = {
        "Email" : document.getElementById("email").value,
        "Password" : document.getElementById("password").value,
     }

 console.log(signIn_data)
   }

   function object1(){
   var names=document.getElementById("text")
   var emails=document.getElementById("emails")
    document.forms
   if(names.value ==""|| emails.value =="" || passwords.value =="" || passwordss.value==""){
    alert("Please Fill The Full Information")
    return false; 
   }
   

        var signUp_data = {
            "Username" : document.getElementById("text").value,
             "Email" : document.getElementById("emails").value,
             "Password": document.getElementById("passwords").value,
             
        }
        if(passwords.value.length<8){
          var  message1=document.getElementById("message")
          message1.style.color="red"
          message1.innerHTML="Password must be Eight Character"
          return false; 
        }
        else{
            var  message12=document.getElementById("message")
            message12.style.color="green"
            message12.innerHTML="Password is Correct"
        }
       
    if(passwords.value==passwordss.value){
        var message=  document.getElementById("msg")
        message.style.color="green"
        message.innerHTML = "Passwords are Matched"; 
      
    }
    else {  
        var  message1=document.getElementById("msg")
        message1.style.color="red"
        message1.innerHTML = "**Passwords are not Matched !";  
   return false;
     
      }  
        console.log(signUp_data)
   }