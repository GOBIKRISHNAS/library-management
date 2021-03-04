var user_name = localStorage.getItem("userName");
var books_list = data.books_list
var new_arrivals = data.new_arrivals
var books_borrowed = data.books_borrowed
var category = data.category

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
    document.getElementById("search-drop-down").style.display = "none";
    document.getElementById("drop-content-list").style.display = "none";
    var x = window.matchMedia("(max-width: 700px)")
    if(x.matches) { 
    document.getElementById("side-bar").style.display = "none";
    }
}

function availablebooks() {
    var input = document.getElementById("myInput");
    input.placeholder = "Search for books by name or author or category..."
    input.style.marginLeft = "20px";
    input.style.width = "77%";
    obj = document.getElementById('abooksbtn');
    var source   = document.getElementById('text-template').innerHTML;
    var template = Handlebars.compile(source);
    str=""
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
            html = html + "<li><a href='javascript:void(0)' onclick='popup(" + i + ");'><img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author + "</p><p>Books Available: " + books_list[i].books_available + "</p><p hidden>" + books_list[i].category + "</p></div></a></li>"
            index = i;
        }  
        $('#content1').append(html);  
        return index
    } 

    var current = document.querySelectorAll(".side-bar .options-list .active");
    current[0].classList.remove("active");
    
    obj.classList.add("active");
    
    document.getElementById("category-drop").style.display = "none";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("availablebooks").style.display = "block";
    document.getElementById("newarrivals").style.display = "none";
    document.getElementById("booksborrowed").style.display = "none";
    document.getElementById("bookspopup").style.display = "none";
    document.getElementById("search-drop-down").style.display = "none";
    document.getElementById("drop-content-list").style.display = "none";
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
    document.getElementById("search-drop-down").style.display = "none";
    document.getElementById("drop-content-list").style.display = "none";
    var x = window.matchMedia("(max-width: 700px)")
    if(x.matches) { 
    document.getElementById("side-bar").style.display = "none";
    }
}
function booksborrowed() {
    obj = document.getElementById('bbooksbtn');
    var source   = document.getElementById('text-template-2').innerHTML;
    var template = Handlebars.compile(source);
    str=""

    if (books_borrowed[user_name].length>0){
        for (i = 0; i < books_borrowed[user_name].length; i++) {
            func = "borrow_popup("+ i +");"
            var context = { function_call: func, img_url: books_borrowed[user_name][i].img_url, name:books_borrowed[user_name][i].name, author: books_borrowed[user_name][i].author};
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
    document.getElementById("search-drop-down").style.display = "none";
    document.getElementById("drop-content-list").style.display = "none";
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

function borrow_popup(i){
    document.getElementById("bookspopup").style.display = "block";
    var x = window.matchMedia("(max-width: 700px)")
    if (x.matches) { 
        index = i+1
        str = "<img src = '"+ books_borrowed[user_name][i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_borrowed[user_name][i].name + "</h1><p>" + books_borrowed[user_name][i].author +"</p><p>Cost: " + books_borrowed[user_name][i].cost + "</p><p>Borrowed Date: " + books_borrowed[user_name][i].date_of_borrow + "</p><p>Return Date: " + books_borrowed[user_name][i].date_of_return + "</p><button>Return</button></div>"
        document.getElementById("popup").innerHTML = str ;
        document.getElementById("side-bar").style.filter = "blur(2px)";
        document.getElementById("availablebooks").style.filter = "blur(2px)";
      } else  {
        index = i+1
        str = "<img src = '"+ books_borrowed[user_name][i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_borrowed[user_name][i].name + "</h1><p>" + books_borrowed[user_name][i].author +"</p><p>Cost: " + books_borrowed[user_name][i].cost + "</p><p>Borrowed Date: " + books_borrowed[user_name][i].date_of_borrow + "</p><p>Return Date: " + books_borrowed[user_name][i].date_of_return + "</p><button>Return</button></div>"
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
    tag_index = 0;
    var input = document.getElementById("myInput");
    if(input.placeholder == "Search for books by name or author or category..."){
        obj = "a";
    }else if(input.placeholder == "Search by Book Names..." ){
        obj = "h1"
    }else if(input.placeholder == "Search by Author Names..."){
        obj = "p"
    }else{
        obj = "p"
        tag_index = 2;
    }

    if(document.getElementById("myInput").value != ""){
    var str=""

    if (books_list.length>0){
        for (i = 0; i < books_list.length; i++) {
            str = str + "<li><a href='javascript:void(0)' onclick='popup(" + i + ");'><img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author + "</p><p>Books Available: " + books_list[i].books_available + "</p><p hidden>" + books_list[i].category + "</p></div></a></li>"
        } 
    }
    else{
        str = "NO Books Available"
    }
    document.getElementById("content1").innerHTML = str
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    ul = document.getElementById("content1");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName(obj)[tag_index];
        txtValue =  a.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}else{
    if(input.placeholder == "Search for books by name or author or category..."){
        availablebooks();
    }else if(input.placeholder == "Search by Book Names..." ){
        var nameSearch = document.getElementById("namesearch");
        nameSearch.click();
    }else if(input.placeholder == "Search by Author Names..."){
        var authorSearch =document.getElementById("authorsearch");
        authorSearch.click();
    }
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


function search(){
    obj = document.getElementById('searchbtn')
    var current = document.querySelectorAll(".side-bar .options-list .active");
    current[0].classList.remove("active");
    obj.classList.add("active");

    document.getElementById("search-drop-down").style.display = "block";
}

var elements = document.getElementsByClassName("tabslink1");

var enableItems = function() {
    availablebooks();
    document.getElementById("search-drop-down").style.display = "none";
    obj = document.getElementById('searchbtn')
    var current = document.querySelectorAll(".side-bar .options-list .active");
    current[0].classList.remove("active");
    obj.classList.add("active");
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', enableItems, false);
}

var nameSearch = document.getElementById("namesearch");
nameSearch.onclick = function(){
    var input = document.getElementById("myInput");
    input.placeholder = "Search by Book Names..." 
}

var authorSearch =document.getElementById("authorsearch");
authorSearch.onclick = function(){
    var input = document.getElementById("myInput");
    input.placeholder = "Search by Author Names..." 
}

var categorySearch =document.getElementById("categorysearch");
categorySearch.onclick = function(){
    var input = document.getElementById("myInput");
    input.placeholder = "Search by category...";
    str=""
    for(var list=0;list<category.length;list++){
        str = str+ "<li><a href='#'>" + category[list] + "</a></li>"
    }
    document.getElementById("drop-content-list").innerHTML = str;
    document.getElementById("drop-content-list").style.display = "block";
}

function filterFunction() {
    console.log("hello");
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    div = document.getElementById("drop-content-list");
    a = div.getElementsByTagName("li");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }