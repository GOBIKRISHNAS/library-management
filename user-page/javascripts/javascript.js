var user_name = localStorage.getItem("userName");
var books_list = data.books_list
var new_arrivals = data.new_arrivals
var books_borrowed = data.books_borrowed


document.getElementsByClassName("user-name")[0].innerHTML = localStorage.getItem("userName");
document.getElementById("new-arrivals").innerHTML = new_arrivals.length;
document.getElementById("books-available").innerHTML = books_list.length;
document.getElementById("books-borrowed").innerHTML = books_borrowed[user_name].length;
document.getElementById("credit-score").innerHTML = books_borrowed[user_name].length;


function dashboard() {
    obj = document.getElementById('dashbtn')
    var current = document.querySelectorAll(".side-bar .options-list .active");
    current[0].classList.remove("active");
    
    obj.classList.add("active");

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

function availablebooks() {
    obj = document.getElementById('abooksbtn');
    var source   = document.getElementById('text-template').innerHTML;
    var template = Handlebars.compile(source);
    str=""

    if (books_list.length>0){
        for (i = 0; i < books_list.length && i<21; i++) {
            func = "popup("+ i +");"
            var context = {function_call: func, img_url: books_list[i].img_url, name: books_list[i].name, author: books_list[i].author, books_available: books_list[i].books_available};
            var html    = template(context);
            str = str + html
        } 
    }
    else{
        str = "NO Books Available"
    }

    var index;
    var counter = 20;
    document.getElementById("content1").innerHTML = str
    $(window).scroll(function () {  
        if ($(window).scrollTop() == $(document).height() - $(window).height()) { 
            if(counter<books_list.length){ 
                counter = appendData(counter);  
            } 
        }  
    });  
    function appendData(counter) {  
        var html = '';  
        for (i = counter+1; i < books_list.length && i< counter+20; i++) { 
            html = html + "<li><a href='javascript:void(0)' onclick='popup(" + i + ");'><img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>" + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><p hidden>" + books_list[i].category + "</p></div></a></li>"
            index = i;
        }  
        $('#content1').append(html);  
        return index
    } 

    var current = document.querySelectorAll(".side-bar .options-list .active");
    current[0].classList.remove("active");
    
    obj.classList.add("active");
    
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
function newarrivals() {
    obj = document.getElementById('nbooksbtn');
    var source   = document.getElementById('text-template-1').innerHTML;
    var template = Handlebars.compile(source);
    str=""

    if (new_arrivals.length>0){
        for (i = 0; i < new_arrivals.length; i++) {
            func = "popup("+ i +");"
            var context = {
                img_url: new_arrivals[i].img_url, 
                name: new_arrivals[i].name, 
                author: new_arrivals[i].author, 
                cost: new_arrivals[i].cost, 
                books_available: new_arrivals[i].books_available};
            var html    = template(context);
            str = str + html
        } 
    }
    else{
        str = "NO Books Available"
    }
   
    var current = document.querySelectorAll(".side-bar .options-list .active");
    current[0].classList.remove("active");
    
    obj.classList.add("active");

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
function booksborrowed() {
    obj = document.getElementById('bbooksbtn');
    var source   = document.getElementById('text-template-1').innerHTML;
    var template = Handlebars.compile(source);
    str=""

    if (books_borrowed[user_name].length>0){
        for (i = 0; i < books_borrowed[user_name].length; i++) {
            func = "popup("+ i +");"
            var context = { img_url: new_arrivals[i].img_url, name: new_arrivals[i].name, author: new_arrivals[i].author, cost: new_arrivals[i].cost, books_available: new_arrivals[i].books_available};
            var html    = template(context);
            str = str + html
        } 
    }
    else{
        str = "No Books Available"
    }

    var current = document.querySelectorAll(".side-bar .options-list .active");
    current[0].classList.remove("active");
    // current[0].className = current[0].className.substr(0,8);
    
    obj.classList.add("active");
    // tabsin[3].className = tabsin[2].className.concat(" active");

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

function popup(i){
    document.getElementById("bookspopup").style.display = "block";
    var x = window.matchMedia("(max-width: 700px)")
    if (x.matches) { 
        index = i+1
        str = "<img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>Cost: " + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><p>Category: " + books_list[i].category + "</p><p>Description: " + books_list[i].description + "</p><button>Remove</button></div>"
        document.getElementById("popup").innerHTML = str ;
        document.getElementById("side-bar").style.filter = "blur(2px)";
        document.getElementById("availablebooks").style.filter = "blur(2px)";
      } else  {
        index = i+1
        str = "<img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>Cost: " + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><p>Category: " + books_list[i].category + "</p><p>Description: " + books_list[i].description + "</p><button>Borrow</button></div>"
        document.getElementById("popup").innerHTML = str ;
        document.getElementById("side-bar").style.filter = "blur(2px)";
        document.getElementById("availablebooks").style.filter = "blur(2px)";
     }
}

function span(i){
    var x = window.matchMedia("(max-width: 700px)")
    if(x.matches) { 
        params = "ul li:nth-child(" +  i  + ")"
        i = i-1;
        console.log(books_list[i].img_url)
        str = "<a href='javascript:void(0)' onclick='popup(" + i + ");'><img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>" + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><p hidden>" + books_list[i].category + "</p></div></a>";
        document.querySelectorAll(params)[0].innerHTML = str;
        document.querySelectorAll(params)[0].style.width =  "90%";
        document.querySelectorAll(params)[0].style.height = "auto";
    }else{
        params = "ul li:nth-child(" +  i  + ")"
        i = i-1;
        console.log(books_list[i].img_url)
        str = "<a href='javascript:void(0)' onclick='popup(" + i + ");'><img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>" + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><p hidden>" + books_list[i].category + "</p></div></a>";
        document.querySelectorAll(params)[0].innerHTML = str;
        document.querySelectorAll(params)[0].style.width =  "25%";
        document.querySelectorAll(params)[0].style.height = "auto";
    }
}

function menuClick(){
    document.getElementById("side-bar").style.display = "block";
}

function myFunction() { 
   
    if(document.getElementById("myInput").value != ""){
    var str=""

    if (books_list.length>0){
        for (i = 0; i < books_list.length; i++) {
            str = str + "<li><a href='javascript:void(0)' onclick='popup(" + i + ");'><img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>" + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><p hidden>" + books_list[i].category + "</p></div></a></li>"
        } 
    }
    else{
        str = "NO Books Available"
    }
    document.getElementById("content1").innerHTML = str
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
}else{
    availablebooks();
}

}

function closeSide(){
    var x = window.matchMedia("(max-width: 700px)")
    if(x.matches) { 
    document.getElementById("side-bar").style.display = "none";
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    document.getElementById("bookspopup").style.display = "none";
    document.getElementById("side-bar").style.filter = "none";
    document.getElementById("availablebooks").style.filter = "none";
}