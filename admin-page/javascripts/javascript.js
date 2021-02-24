var user_name = localStorage.getItem("userName");

var books_list = [
    {name: "Eating in the Age of Dieting", author: "Rujuta Diwekar", cost: "₹265.00", books_available: 2, img_url: "https://images-eu.ssl-images-amazon.com/images/I/31970VMFv5L._AC_SX184_.jpg"},
    {name: "The Complete Novels of Sherlock Holmes", author: "Arthur Conan Doyle", cost: "₹149", books_available: 4, img_url: "https://images-eu.ssl-images-amazon.com/images/I/41tT5SJp6+L._AC_SX184_.jpg"},
    {name: "The Secret Garden", author: "Frances Hodgson Burnett", cost: "₹124.00", books_available: 5, img_url: "https://images-eu.ssl-images-amazon.com/images/I/51V-OwTiNVL._AC_SX184_.jpg"},
    {name: "Black 13 (Scott Pearce)", author: "Adam Hamdy", cost: "₹333.00", books_available: 7, img_url: "https://images-eu.ssl-images-amazon.com/images/I/419Y6Jy1OUL._AC_SX184_.jpg"}
]

var new_arrivals = [
    {name: "The Secret Garden", author: "Frances Hodgson Burnett", cost: "₹124.00", books_available: 5, img_url: "https://images-eu.ssl-images-amazon.com/images/I/51V-OwTiNVL._AC_SX184_.jpg"},
    {name: "Black 13 (Scott Pearce)", author: "Adam Hamdy", cost: "₹333.00", books_available: 7, img_url: "https://images-eu.ssl-images-amazon.com/images/I/419Y6Jy1OUL._AC_SX184_.jpg"}
]

var books_borrowed = {
    krishna: [
        {name: "The Complete Novels of Sherlock Holmes", author: "Arthur Conan Doyle", cost: "₹149", date_of_return: "01/03/2021", date_of_borrow: "15/02/2021", img_url: "https://images-eu.ssl-images-amazon.com/images/I/41tT5SJp6+L._AC_SX184_.jpg"},
        {name: "Eating in the Age of Dieting", author: "Rujuta Diwekar", cost: "₹265.00",  date_of_return: "01/03/2021", date_of_borrow: "15/02/2021", img_url: "https://images-eu.ssl-images-amazon.com/images/I/31970VMFv5L._AC_SX184_.jpg"}
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
            str = str + "<li><img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>" + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><input type='button' value='Remove'></div></li>"
        } 
    }
    else{
        str = "NO Books Available"
    }

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
            str = str + "<li><img src = '"+ new_arrivals[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + new_arrivals[i].name + "</h1><p>" + new_arrivals[i].author +"</p><p>" + new_arrivals[i].cost + "</p><p>Books Available: " + new_arrivals[i].books_available + "</p><input type='button' value='Remove'></div></li>"
        } 
    }
    else{
        str = "NO Books Available"
    }

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

    document.getElementById("content3").innerHTML = str3 ;
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("availablebooks").style.display = "none";
    document.getElementById("newarrivals").style.display = "none";
    document.getElementById("booksborrowed").style.display = "block";
    document.getElementById("searchtab").style.display = "none";
}

function search() {
    var search_variable = document.getElementsByName("search")[0].value;

    str = ''
    if (books_list.length>0){
        for (i = 0; i < books_list.length; i++) {
            string = (books_list[i].name).toLowerCase()
            author_string = (books_list[i].author).toLowerCase()
            if(string.includes(search_variable) == true || author_string.includes(search_variable) == true){
                str = str + "<li><img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>" + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><input type='button' value='Borrow Now'></div></li>"
            }
        }
    } else{
        str = "No Books Available"
    }
    
    document.getElementById("content4").innerHTML = str
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("availablebooks").style.display = "none";
    document.getElementById("newarrivals").style.display = "none";
    document.getElementById("booksborrowed").style.display = "none";
    document.getElementById("searchtab").style.display = "block";

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
