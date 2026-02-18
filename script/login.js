document.getElementById('login-btn')
.addEventListener("click", function(){
    const loginButton = document.getElementById('login-btn')
    loginButton.style.background = 'red';
    // input number 
    const loginNumber = document.getElementById('login-number');
    const contactNumber = loginNumber.value;
    // input pin
    const loginPassword = document.getElementById('login-password');
    const password = loginPassword.value;
    //  use conditional for number and password
    if(contactNumber == "01924751896" && password == "1234"){
        alert("Login Successful");
        window.location.assign("./home.html");

    }
    else{
        alert("Login Failed")
        return;
    }

    
    
})