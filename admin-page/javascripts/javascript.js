var user_name = localStorage.getItem("userName");
var books_list = data.books_list
var new_arrivals = data.new_arrivals
var books_borrowed = data.booksborrowed

borrow_count = 0
for(i=0;i<Object.values(books_borrowed).length;i++){
    borrow_count = Object.values(books_borrowed)[i].length + borrow_count
}

document.getElementsByClassName("user-name")[0].innerHTML = localStorage.getItem("userName");
document.getElementById("new-arrivals").innerHTML = new_arrivals.length;
document.getElementById("books-available").innerHTML = books_list.length;
document.getElementById("books-borrowed").innerHTML = borrow_count;
document.getElementById("total-users").innerHTML = Object.keys(books_borrowed).length;


function dashboard() {

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    
    var tabsin = document.getElementsByClassName("tabslink")
    tabsin[0].className = tabsin[2].className.replace("tabslink", "tabslink active");

    document.getElementById("dashboard").style.display = "block";
    document.getElementById("availablebooks").style.display = "none";
    document.getElementById("newarrivals").style.display = "none";
    document.getElementById("booksborrowed").style.display = "none";
    document.getElementById("addbooks").style.display = "none";
    document.getElementById("bookspopup").style.display = "none";
    var x = window.matchMedia("(max-width: 700px)")
    if(x.matches) { 
    document.getElementById("side-bar").style.display = "none";
    }
}

function availablebooks() {

    str=""

    if (books_list.length>0){
        for (i = 0; i < books_list.length; i++) {
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
    document.getElementById("addbooks").style.display = "none";
    var x = window.matchMedia("(max-width: 700px)")
    if(x.matches) { 
    document.getElementById("side-bar").style.display = "none";
    }
}
function newarrivals() {

    str=""

    if (new_arrivals.length>0){
        for (i = 0; i < new_arrivals.length; i++) {
            str = str + "<li><a href='#'><img src = '"+ new_arrivals[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + new_arrivals[i].name + "</h1><p>" + new_arrivals[i].author +"</p><p>" + new_arrivals[i].cost + "</p><p>Books Available: " + new_arrivals[i].books_available + "</p><button>Remove</button></div></a></li>"
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
    document.getElementById("addbooks").style.display = "none";
    document.getElementById("bookspopup").style.display = "none";
    var x = window.matchMedia("(max-width: 700px)")
    if(x.matches) { 
    document.getElementById("side-bar").style.display = "none";
    }
}
function booksborrowed() {
    
    str = ""
    str3 = "<tr><td> S.No </td><td> User Name </td><td> Name of the Books</tr>"
    for(i=0;i<Object.keys(books_borrowed).length;i++){
        key = Object.keys(books_borrowed)[i]
        keys_value_length = books_borrowed[key].length
        k = i+1;
        str = "<tr><td>"+ k +"</td><td>" + key + "</td><td>"
        str1 = ""
        for(j=0;j<keys_value_length;j++){
         l = j+1
             str1 = str1 + "<p>" + books_borrowed[key][j].name + "</p>" 
        } 
        str2 = str + str1 + "</td></tr>"
        str3 = str3 + str2
    }
    
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    
    var tabsin = document.getElementsByClassName("tabslink")
    tabsin[3].className = tabsin[2].className.replace("tabslink", "tabslink active");

    document.getElementById("content3").innerHTML = str3 ;
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("availablebooks").style.display = "none";
    document.getElementById("newarrivals").style.display = "none";
    document.getElementById("booksborrowed").style.display = "block";
    document.getElementById("addbooks").style.display = "none";
    document.getElementById("bookspopup").style.display = "none";
    var x = window.matchMedia("(max-width: 700px)")
    if(x.matches) { 
    document.getElementById("side-bar").style.display = "none";
    }
}

function addbooks(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    
    var tabsin = document.getElementsByClassName("tabslink")
    tabsin[4].className = tabsin[2].className.replace("tabslink", "tabslink active");

    document.getElementById("dashboard").style.display = "none";
    document.getElementById("availablebooks").style.display = "none";
    document.getElementById("newarrivals").style.display = "none";
    document.getElementById("booksborrowed").style.display = "none";
    document.getElementById("addbooks").style.display = "block";
    document.getElementById("bookspopup").style.display = "none";
    var x = window.matchMedia("(max-width: 700px)")
    if(x.matches) { 
        document.getElementById("side-bar").style.display = "none";
    }
}

function popup(i){
    
    var x = window.matchMedia("(max-width: 700px)")
    if (x.matches) { 
          index = i+1
          params = "ul li:nth-child(" +  index  + ")"
    document.querySelectorAll(params)[0].style.height = "220px";
    document.querySelectorAll(params)[0].style.textAlign = "justify";
    
    str = "<img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>" + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><p>Category: " + books_list[i].category + "</p><p>Description: " + books_list[i].description + "</p><button>Remove</button><button class='close' onclick = 'span(" + index + ");'>Close</button></div>"
    document.querySelectorAll(params)[0].innerHTML = str;

    params_img = params + " img"
    params_details = params + " .details"
    params_button = params + " button"
    params_para = params + " p"
    params_header = params + " h1"
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
    
    str = "<img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>" + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><p>Category: " + books_list[i].category + "</p><p>Description: " + books_list[i].description + "</p><button>Remove</button><button class='close' onclick = 'span(" + index + ");'>Close</button></div>"
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

function closeSide(){
    var x = window.matchMedia("(max-width: 700px)")
    if(x.matches) { 
    document.getElementById("side-bar").style.display = "none";
    }
}
function myFunction() { 
    
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

function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    filename = filename?filename+'.xls':'excel_data.xls';
    
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        downloadLink.download = filename;
        
        downloadLink.click();
    }
}    
