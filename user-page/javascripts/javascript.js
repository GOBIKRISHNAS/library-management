import * as  object from "../../constant.js"
var user_name = localStorage.getItem("userName");
var books_list = object.data.books_list
var new_arrivals = object.data.new_arrivals
var books_borrowed = object.data.books_borrowed


document.getElementsByClassName("user-name")[0].innerHTML = localStorage.getItem("userName");
document.getElementById("new-arrivals").innerHTML = new_arrivals.length;
document.getElementById("books-available").innerHTML = books_list.length;
document.getElementById("books-borrowed").innerHTML = books_borrowed[user_name].length;
document.getElementById("credit-score").innerHTML = books_borrowed[user_name].length;


window.dashboard = function dashboard() {

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    
    var tabsin = document.getElementsByClassName("tabslink")
    tabsin[0].className = tabsin[2].className.replace("tabslink", "tabslink active");

    document.getElementById("dashboard").style.display = "block";
    document.getElementById("availablebooks").style.display = "none";
    document.getElementById("newarrivals").style.display = "none";
    document.getElementById("booksborrowed").style.display = "none";
    document.getElementById("bookspopup").style.display = "none";
    var x = window.matchMedia("(max-width: 700px)")
    if(x.matches) { 
    document.getElementById("side-bar").style.display = "none";
    }
}

window.availablebooks = function availablebooks() {

    var str=""

    if (books_list.length>0){
        for(var i = 0; i < books_list.length; i++) {
            str = str + "<li><a href='javascript:void(0)' onclick='popup(" + i + ");'><img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>" + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><p hidden>" + books_list[i].category + "</p></div></a></li>"
        } 
    }
    else{
        str = "NO Books Available"
    }
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    
    var tabsin = document.getElementsByClassName("tabslink")
    tabsin[1].className = tabsin[2].className.replace("tabslink", "tabslink active");
    
    document.getElementById("content1").innerHTML = str
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("availablebooks").style.display = "block";
    document.getElementById("newarrivals").style.display = "none";
    document.getElementById("booksborrowed").style.display = "none";
    document.getElementById("bookspopup").style.display = "none";
    var x = window.matchMedia("(max-width: 700px)")
    if(x.matches) { 
    document.getElementById("side-bar").style.display = "none";
    }
}
window.newarrivals = function newarrivals() {

    var str=""

    if (new_arrivals.length>0){
        for (var i = 0; i < new_arrivals.length; i++) {
            str = str + "<li><a href='#'><img src = '"+ new_arrivals[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + new_arrivals[i].name + "</h1><p>" + new_arrivals[i].author +"</p><p>" + new_arrivals[i].cost + "</p><p>Books Available: " + new_arrivals[i].books_available + "</p><button>Borrow</button></div></a></li>"
        } 
    }
    else{
        str = "NO Books Available"
    }
   
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    
    var tabsin = document.getElementsByClassName("tabslink")
    tabsin[2].className = tabsin[2].className.replace("tabslink", "tabslink active");
    document.getElementById("content2").innerHTML = str
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("availablebooks").style.display = "none";
    document.getElementById("newarrivals").style.display = "block";
    document.getElementById("booksborrowed").style.display = "none";
    document.getElementById("bookspopup").style.display = "none";
    var x = window.matchMedia("(max-width: 700px)")
    if(x.matches) { 
    document.getElementById("side-bar").style.display = "none";
    }
}
window.booksborrowed = function booksborrowed() {
    
    var str=""

    if (books_borrowed[user_name].length>0){
        for (var i = 0; i < books_borrowed[user_name].length; i++) {
            str = str + "<li><img src = '"+ books_borrowed[user_name][i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_borrowed[user_name][i].name + "</h1><p>" + books_borrowed[user_name][i].author +"</p><p>" + books_borrowed[user_name][i].cost + "</p><p>Due Date: " + books_borrowed[user_name][i].date_of_return + "</p><button>Return</button></div></li>"
        } 
    }
    else{
        str = "No Books Available"
    }

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    
    var tabsin = document.getElementsByClassName("tabslink")
    tabsin[3].className = tabsin[2].className.replace("tabslink", "tabslink active");

    document.getElementById("content3").innerHTML = str;
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("availablebooks").style.display = "none";
    document.getElementById("newarrivals").style.display = "none";
    document.getElementById("booksborrowed").style.display = "block";
    document.getElementById("bookspopup").style.display = "none";
    var x = window.matchMedia("(max-width: 700px)")
    if(x.matches) { 
    document.getElementById("side-bar").style.display = "none";
    }
}

window.popup = function popup(i){
    
    var x = window.matchMedia("(max-width: 700px)")
    if (x.matches) { 
          var index = i+1
          var params = "ul li:nth-child(" +  index  + ")"
    document.querySelectorAll(params)[0].style.height = "220px";
    document.querySelectorAll(params)[0].style.textAlign = "justify";
    
    var str = "<img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>" + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><p>Category: " + books_list[i].category + "</p><p>Description: " + books_list[i].description + "</p><button>Borrow</button><button class='close' onclick = 'span(" + index + ");'>Close</button></div>"
    document.querySelectorAll(params)[0].innerHTML = str;

    var params_img = params + " img"
    var params_details = params + " .details"
    var params_button = params + " button"
    var params_para = params + " p"
    var params_header = params + " h1"
    document.querySelectorAll(params_img)[0].style.width = "70px";
    document.querySelectorAll(params_img)[0].style.height = "80px";
    document.querySelectorAll(params_details)[0].style.fontSize = "6px";
    document.querySelectorAll(params_details)[0].style.position = "absolute";
    document.querySelectorAll(params_details)[0].style.marginRight = "10px";
    document.querySelectorAll(params_details)[0].style.marginLeft = "5px";
    document.querySelectorAll(params_button)[0].style.marginTop = "auto";
    document.querySelectorAll(params_button)[0].style.marginLeft = "5px";
    document.querySelectorAll(params_para)[0].style.marginTop = "10px";
    document.querySelectorAll(params_header)[0].style.marginTop = "100px";
      } else {
       index = i+1
    params = "ul li:nth-child(" +  index  + ")"
    document.querySelectorAll(params)[0].style.width =  "695px";
    document.querySelectorAll(params)[0].style.height = "240px";
    document.querySelectorAll(params)[0].style.textAlign = "justify";
    
    var str = "<img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>" + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><p>Category: " + books_list[i].category + "</p><p>Description: " + books_list[i].description + "</p><button>Borrow</button><button class='close' onclick = 'span(" + index + ");'>Close</button></div>"
    document.querySelectorAll(params)[0].innerHTML = str;

    params_img = params + " img"
    params_details = params + " .details"
    params_button = params + " button"
    params_para = params + " p"
    params_header = params + " h1"
    document.querySelectorAll(params_img)[0].style.width = "120px";
    document.querySelectorAll(params_img)[0].style.height = "230px";
    document.querySelectorAll(params_details)[0].style.fontSize = "13px";
    document.querySelectorAll(params_details)[0].style.marginRight = "20px";
    document.querySelectorAll(params_button)[0].style.marginTop = "auto";
    document.querySelectorAll(params_button)[0].style.marginLeft = "5px";
    document.querySelectorAll(params_para)[0].style.marginTop = "10px";
    document.querySelectorAll(params_header)[0].style.marginTop = "5px";
      }
}

window.span = function span(i){
    var x = window.matchMedia("(max-width: 700px)")
    if(x.matches) { 
        var params = "ul li:nth-child(" +  i  + ")"
        var i = i-1;
        var str = "<a href='javascript:void(0)' onclick='popup(" + i + ");'><img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>" + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><p hidden>" + books_list[i].category + "</p></div></a>";
        document.querySelectorAll(params)[0].innerHTML = str;
        document.querySelectorAll(params)[0].style.width =  "90%";
        document.querySelectorAll(params)[0].style.height = "auto";
    }else{
        var params = "ul li:nth-child(" +  i  + ")"
        var i = i-1;
        var str = "<a href='javascript:void(0)' onclick='popup(" + i + ");'><img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>" + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><p hidden>" + books_list[i].category + "</p></div></a>";
        document.querySelectorAll(params)[0].innerHTML = str;
        document.querySelectorAll(params)[0].style.width =  "25%";
        document.querySelectorAll(params)[0].style.height = "auto";
    }
}

window.menuClick = function menuClick(){
    document.getElementById("side-bar").style.display = "block";
}

window.myFunction = function myFunction() { 
   
    document.getElementById("bookspopup").style.display = "none";
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("content1");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

window.closeSide = function closeSide(){
    var x = window.matchMedia("(max-width: 700px)")
    if(x.matches) { 
    document.getElementById("side-bar").style.display = "none";
    }
}