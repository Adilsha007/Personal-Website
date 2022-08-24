
var emailError = document.getElementById('emailError');
  
  

function validateName(){
  var name=document.getElementById("name").value;
  var letters = /^[0-9a-zA-Z]+$/;
  
  if(name==""){

    nameMust.innerHTML="Please enter your name"
    nameValid.innerHTML=""
    return false
  }
  else if(!isNaN(name) || name.match(letters)){
    nameMust.innerHTML="Please enter a valid name"
    nameValid.innerHTML=""
    return false
  }
  else if(name.length<5){
    nameMust.innerHTML="Name should have atleast 5 letters"
    nameValid.innerHTML=""
    return false

  }else{
        nameValid.innerHTML="Valid"
        nameMust.innerHTML = "";
        return true;
    }
  }

  function validateSubject(){
    var subject = document.getElementById('subject').value;
    if(subject == ""){
        subjectError.innerHTML = "Subject must exists"
        return false;
    }
    else{
        subjectError.innerHTML = "";
        return true;
    }
}

function validateEmail(){
    var email = document.getElementById('email').value;
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email == ""){
        emailValid.innerHTML=""
        emailError.innerHTML = "Email is required"
        return false;
    }
    else if(!email.match(mail)){
        emailValid.innerHTML=""
        emailError.innerHTML = "Invalid Email Format"
        return false;
    }
    else{
        emailValid.innerHTML="Valid"
        emailError.innerHTML = "";
        return true;
    }
}

  $("#formSubmit").submit((e)=>{
    let valid_form= validateName() && validateEmail() && validateSubject();
    //alert(valid_form);
    e.preventDefault()
    if (valid_form){
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbyU9l5ZS5G6B8GXMWfKUadqiuY3Kx0qTLD9tPjpDHrAv-Hy86k/exec",
            data:$("#formSubmit").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    }
})




