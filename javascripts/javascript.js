var login_credentials = [
    {username: "krishna", password: "123456"},
    {username: "abirami", password: "098765"},
    {username: "admin", password: "admin"}
];

var form = document.getElementById("form");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    form.style.display = "block";
}

span.onclick = function() {
    form.style.display = "none";
}

function validationForm() {
    var userName = document.getElementsByName("User Name")[0].value;
    var password = document.getElementsByName("Password")[0].value;
    
    if (userName == null || userName == "") {
        document.getElementById('username_error').innerHTML = 'User name must be filled out';
    }
    if (password == null || password == "") {
        document.getElementById('password_error').innerHTML = 'Password must be filled out';
    }
}

function directPage() {
    var userName = document.getElementsByName("User Name")[0].value;
    var password = document.getElementsByName("Password")[0].value;
    var obj = login_credentials.find(o => o.username === userName);
    if (typeof(obj)=="undefined"){
        document.getElementById('username_error').innerHTML = 'Invalid Username!..';
    }else if ((userName != "" || password != "")) {
        if (userName == "admin" && password == "admin") {
            window.location = "https://gobikrishnas.github.io/library/admin-page/";
        } else if(obj.password == password){
            window.location = "https://gobikrishnas.github.io/library/user-page/";
        }else {
            document.getElementById('username_error').innerHTML = '';
            document.getElementById('password_error').innerHTML = 'Invalid Password!';
        }
    }
    localStorage.setItem("userName", userName);
}
