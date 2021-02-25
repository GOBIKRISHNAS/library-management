var user_name = localStorage.getItem("userName");

var books_list = [
    {name: "Eating in the Age of Dieting", author: "Rujuta Diwekar", cost: "₹265.00", books_available: 2, img_url: "https://images-eu.ssl-images-amazon.com/images/I/31970VMFv5L._AC_SX184_.jpg"},
    {name: "Novels of Sherlock Holmes", author: "Arthur Conan Doyle", cost: "₹149", books_available: 4, img_url: "https://images-eu.ssl-images-amazon.com/images/I/41tT5SJp6+L._AC_SX184_.jpg"},
    {name: "The Secret Garden", author: "Frances Hodgson Burnett", cost: "₹124.00", books_available: 5, img_url: "https://images-eu.ssl-images-amazon.com/images/I/51V-OwTiNVL._AC_SX184_.jpg"},
    {name: "Black 13 (Scott Pearce)", author: "Adam Hamdy", cost: "₹333.00", books_available: 7, img_url: "https://images-eu.ssl-images-amazon.com/images/I/419Y6Jy1OUL._AC_SX184_.jpg"},
    {name: "Such a Fun Age", author: "Kiley Reid", cost: "₹388", books_available: 3,img_url: "https://images-eu.ssl-images-amazon.com/images/I/51TEBoy4lnL._AC_SX184_.jpg"},
    {name: "Joe Biden: American Dreamer", author: "Evan Osnos", cost: "₹559", books_available: 2,img_url: "https://images-eu.ssl-images-amazon.com/images/I/414+86apq9L._AC_SX184_.jpg"},
    {name: "Girl A: The Sunday Times", author: "Kiley Reid", cost: "₹388", books_available: 3,img_url: "https://images-eu.ssl-images-amazon.com/images/I/41+r9c1dkYL._AC_SX184_.jpg"},
    {name: "The Bengal Conundrum", author: "Kiley Reid", cost: "₹388", books_available: 4,img_url: "https://images-eu.ssl-images-amazon.com/images/I/41b7XHWxcnL._AC_SX184_.jpg"},
    {name: "The Presidential Years: 2012-2017", author: "Abigail Dean", cost: "₹388", books_available: 6,img_url: "https://images-eu.ssl-images-amazon.com/images/I/5163PKxRQAL._AC_SX184_.jpg"},
    {name: "1984 Nineteen Eighty-Four ", author: "Kiley Reid", cost: "₹388", books_available: 2,img_url: "https://images-eu.ssl-images-amazon.com/images/I/515DZG1Jd6L._AC_SX184_.jpg"},
    {name: "Superheavy: Making and Breaking", author: "Evan Osnos", cost: "₹388", books_available: 7,img_url: "https://images-eu.ssl-images-amazon.com/images/I/51myTw8aK8L._AC_SX184_.jpg"},
    {name: "Yes Man: The Untold Story", author: "Kiley Reid", cost: "₹388", books_available: 9,img_url: "https://images-eu.ssl-images-amazon.com/images/I/41zOkw9vLFL._AC_SX184_.jpg"},
    {name: "Dreamers and Unicorns", author: "Arthur Conan Doyle", cost: "₹388", books_available: 12,img_url: "https://images-eu.ssl-images-amazon.com/images/I/41eESmdS3IL._AC_SX184_.jpg"},
    {name: "Brand New Start: Fast-Start", author: "Kiley Reid", cost: "₹388", books_available: 6,img_url: "https://images-eu.ssl-images-amazon.com/images/I/51W70enRUdL._AC_SX184_.jpg"},
    {name: "Hidden in Plain Sight", author: "Arthur Conan Doyle", cost: "₹388", books_available: 8,img_url: "https://images-eu.ssl-images-amazon.com/images/I/512+dA1m+EL._AC_SX184_.jpg"},
]

var new_arrivals = [
    {name: "The Secret Garden", author: "Frances Hodgson Burnett", cost: "₹124.00", books_available: 5, img_url: "https://images-eu.ssl-images-amazon.com/images/I/51V-OwTiNVL._AC_SX184_.jpg"},
    {name: "Black 13 (Scott Pearce)", author: "Adam Hamdy", cost: "₹333.00", books_available: 7, img_url: "https://images-eu.ssl-images-amazon.com/images/I/419Y6Jy1OUL._AC_SX184_.jpg"}
]

var books_borrowed = {
    krishna: [
        {name: "Novels of Sherlock Holmes", author: "Arthur Conan Doyle", cost: "₹149", date_of_return: "01/03/2021", date_of_borrow: "15/02/2021", img_url: "https://images-eu.ssl-images-amazon.com/images/I/41tT5SJp6+L._AC_SX184_.jpg"}
    ],
    abirami: [
        {name: "Eating in the Age of Dieting", author: "Rujuta Diwekar", cost: "₹265.00",  date_of_return: "01/03/2021", date_of_borrow: "15/02/2021", img_url: "https://images-eu.ssl-images-amazon.com/images/I/31970VMFv5L._AC_SX184_.jpg"}
    ]
}

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
    document.getElementById("searchtab").style.display = "none";
}

function availablebooks() {

    str=""

    if (books_list.length>0){
        for (i = 0; i < books_list.length; i++) {
            str = str + "<li><a href='#'><img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>" + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><button>Remove</button></div></a></li>"
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
    document.getElementById("searchtab").style.display = "none";
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
    document.getElementById("searchtab").style.display = "none";
}
function booksborrowed() {
    
    str = ""
    str3 = "<tr><td> S.No </td><td> Student Name </td><td> Name of the Books</tr>"
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
    document.getElementById("searchtab").style.display = "none";
}

function addbooks(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    
    var tabsin = document.getElementsByClassName("tabslink")
    tabsin[4].className = tabsin[2].className.replace("tabslink", "tabslink active");
}
function myFunction() { 
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
