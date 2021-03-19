var login_credentials = data.login_credentials

var btn = document.getElementById("myBtn");

btn.onclick = function () {
    var form = document.getElementsByClassName("form-container")[0];
    var span = document.getElementsByClassName("close")[0];
    console.log(form);
    form.style.display = "block";

    span.onclick = function () {
        form.style.display = "none";
    }
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
    if (typeof (obj) == "undefined") {
        document.getElementById('username_error').innerHTML = 'Invalid Username!..';
    } else if ((userName != "" || password != "")) {
        if (userName == "admin" && password == "admin") {
            window.location = "https://gobikrishnas.github.io/library-management/admin-page/";
        } else if (obj.password == password) {
            window.location = "https://gobikrishnas.github.io/library-management/user-page/";
        } else {
            document.getElementById('username_error').innerHTML = '';
            document.getElementById('password_error').innerHTML = 'Invalid Password!';
        }
    }
    localStorage.setItem("userName", userName);
}

var btn1 = document.getElementById("myBtn1");

btn1.onclick = function () {
    var form = document.getElementsByClassName("form-container1")[0];
    form.style.top = "-80px";
    form.style.height = "450px";
    var span = document.getElementsByClassName("close")[1];
    console.log(form);
    form.style.display = "block";

    span.onclick = function () {
        form.style.display = "none";
    }
}

function validationForm1() {
    var userName = document.getElementsByName("User Name")[0].value;
    var mobileno = document.getElementsByName("Mobile Number")[0].value;
    var email = document.getElementsByName("Email ID")[0].value;
    var password = document.getElementsByName("Password1")[0].value;
    var cpassword = document.getElementsByName("CPassword")[0].value;

    var regx = /^[7-9]\d{9}$/
    if (!regx.test(mobileno)) {
        document.getElementById("mobileno_error").innerHTML = "Enter Valid Mobile Number..."
    } else {

        var regx1 = /^[a-zA-Z0-9.!#$%&'*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!regx1.test(email)) {
            document.getElementById("mobileno_error").innerHTML = ""
            document.getElementById("email_error").innerHTML = "Enter Valid Email id..."
        } else {
            var password = document.getElementsByName("Password1")[0].value;
            console.log(password)
            if (password == "") {
                console.log(password)
                document.getElementById("mobileno_error").innerHTML = ""
                document.getElementById("email_error").innerHTML = ""
                document.getElementById("password_error1").innerHTML = "Type in the password..."
            } else {
                var regx2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                if (!regx2.test(password)) {
                    document.getElementById("mobileno_error").innerHTML = ""
                    document.getElementById("email_error").innerHTML = ""
                    document.getElementById("password_error1").innerHTML = "Password must contain a Upper case, Lower Case, Special Charcter and more than 8 digit.."
                }else if (cpassword == "") {
                    document.getElementById("mobileno_error").innerHTML = ""
                    document.getElementById("email_error").innerHTML = ""
                    document.getElementById("password_error1").innerHTML = ""
                    document.getElementById("password_error2").innerHTML = "Type in Confirm Password..."
                } else if (password != cpassword) {
                    document.getElementById("mobileno_error").innerHTML = ""
                    document.getElementById("email_error").innerHTML = ""
                    document.getElementById("password_error1").innerHTML = ""
                    document.getElementById("password_error2").innerHTML = "Confirm Password doesnot match.."
                } else {
                    window.location = "https://gobikrishnas.github.io/library-management/";
                }

            }
        }
    }

}