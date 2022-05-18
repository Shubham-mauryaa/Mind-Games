function validate(){
    let u = document.getElementById('username').value;
    let p = document.getElementById('password').value;
    if((u=="shubham")&&(p=="Sam@1729")){
        alert("Login successful");
        return false;
    }
    else{
        alert("wrong password or username");
    }
}