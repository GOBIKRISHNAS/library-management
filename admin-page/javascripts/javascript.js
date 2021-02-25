var user_name = localStorage.getItem("userName");

var books_list = [
    {name: "Eating in the Age of Dieting", author: "Rujuta Diwekar", cost: "₹265.00", books_available: 2, img_url: "https://images-eu.ssl-images-amazon.com/images/I/31970VMFv5L._AC_SX184_.jpg", category: "Health, Family & Personal Development", description: "Rujuta Diwekar is amongst the most followed nutritionists globally, and a leading health advocate. Over the past decade, her writings have decisively shifted food conversations across the country away from fads and towards eating local, seasonal and traditional. Her mantra, ‘eat local, think global’, blends the wisdom of our grandmothers with the latest advances in nutrition science for sustainable good health for all."},
    {name: "Novels of Sherlock Holmes", author: "Arthur Conan Doyle", cost: "₹149", books_available: 4, img_url: "https://images-eu.ssl-images-amazon.com/images/I/41tT5SJp6+L._AC_SX184_.jpg", category: "Arts, Film & Photography", description: "There’s the scarlet thread of murder running through the colourless skein of life and our duty is to unravel it and isolate it and expose every inch of it.”Sherlock Holmes Consulting Detective 221B Baker Street London. This is where begins a historical partnership between Dr. Watson—the archetypal gentleman from the Victorian era—and the eccentric, legendary sleuth, Sherlock Holmes"},
    {name: "The Secret Garden", author: "Frances Hodgson Burnett", cost: "₹124.00", books_available: 5, img_url: "https://images-eu.ssl-images-amazon.com/images/I/51V-OwTiNVL._AC_SX184_.jpg", category: "Crafts, Hobbies & Practical Interests", description: "I am sure there is Magic in everything, only we have not sense enough to get hold of it and make it do things for us.” When Mary Lennox, the unloved, contrary and spoiled ten-year-old, is found alone in the deserted house after her parents’ death, she is sent to live with an uncle whom she has never known."},
    {name: "Black 13 (Scott Pearce)", author: "Adam Hamdy", cost: "₹333.00", books_available: 7, img_url: "https://images-eu.ssl-images-amazon.com/images/I/419Y6Jy1OUL._AC_SX184_.jpg", category: "Literature & Fiction", description: "Black 13 is the brilliant first novel in the Scott Pearce series from Sunday Times bestselling author Adam Hamdy. In this addictive and fast-paced thriller, ex-MI6 officer Pearce is about to show us that in a world where there is no loyalty to the nation state, it’s time to burn the espionage rule book."},
    {name: "Such a Fun Age", author: "Kiley Reid", cost: "₹388", books_available: 3,img_url: "https://images-eu.ssl-images-amazon.com/images/I/51TEBoy4lnL._AC_SX184_.jpg", category: "Literature & Fiction", description: "A striking and surprising debut novel from an exhilarating new voice, Such a Fun Age is a page-turning and big-hearted story about race and privilege, set around a young black babysitter, her well-intentioned employer, and a surprising connection that threatens to undo them both."},
    {name: "Joe Biden: American Dreamer", author: "Evan Osnos", cost: "₹559", books_available: 2,img_url: "https://images-eu.ssl-images-amazon.com/images/I/414+86apq9L._AC_SX184_.jpg", category: "Region & Countries", description: "'Biden has overcome unimaginable tribulation, multiple presidential primary humiliations, a potentially crippling speech impediment and his own mediocrity. Now he carries the hopes of billions upon his shoulders' Sunday Times The new biography of President-elect Joe Biden by National Book Award winner and New Yorker staff writer Evan Osnos President-elect Joseph R. Biden Jr. has been called both the luckiest man and the unluckiest"},
    {name: "Girl A: The Sunday Times", author: "Kiley Reid", cost: "₹388", books_available: 3,img_url: "https://images-eu.ssl-images-amazon.com/images/I/41+r9c1dkYL._AC_SX184_.jpg", category: "Biographies, Diaries & True Accounts", description: "Lex Gracie doesn’t want to think about her family. She doesn’t want to think about growing up in her parents’ House of Horrors. And she doesn’t want to think about her identity as Girl A: the girl who escaped. When her mother dies in prison and leaves Lex and her siblings the family home, she can’t run from her past any longer."},
    {name: "The Bengal Conundrum", author: "Kiley Reid", cost: "₹388", books_available: 4,img_url: "https://images-eu.ssl-images-amazon.com/images/I/41b7XHWxcnL._AC_SX184_.jpg", category: "Politics", description: "The 2019 Lok Sabha election was a decisive moment and a turning point in West Bengal's recent political history. It may not be the 2011 watershed moment when Trinamool chief Mamata Banerjee brought the Left's three-decade-long uninterrupted rule to an end. However, the two moments are most definitely comparable."},
    {name: "The Presidential Years: 2012-2017", author: "Abigail Dean", cost: "₹388", books_available: 6,img_url: "https://images-eu.ssl-images-amazon.com/images/I/5163PKxRQAL._AC_SX184_.jpg", category: "Biographies, Diaries & True Accounts", description: "The presidential years gives a fascinating account of how one of the country most respected veteran politicians reshaped the functioning of Rashtrapati Bhavan and responded to tumultuous events as the country first citizen, leaving behind a legacy that will be hard to match. "},
    {name: "1984 Nineteen Eighty-Four ", author: "Kiley Reid", cost: "₹388", books_available: 2,img_url: "https://images-eu.ssl-images-amazon.com/images/I/515DZG1Jd6L._AC_SX184_.jpg", category: "Literature & Fiction", description: "Ravaged by years of war and civil conflict, Britain has changed its name to Airstrip One and become part of Oceania - one of the three totalitarian blocks dominating the world - ruled by a mysterious leader called Big Brother who keeps the population in thrall through strict surveillance and brutal police repression."},
    {name: "Superheavy: Making and Breaking", author: "Evan Osnos", cost: "₹388", books_available: 7,img_url: "https://images-eu.ssl-images-amazon.com/images/I/51myTw8aK8L._AC_SX184_.jpg", category: "Higher Education Textbooks", description: "The science of element discovery is a truly fascinating field, and is constantly rewriting the laws of chemistry and physics as we know them. Superheavy is the first book to take an in-depth look at how synthetic elements are discovered, why they matter and where they will take us."},
    {name: "Yes Man: The Untold Story", author: "Kiley Reid", cost: "₹388", books_available: 9,img_url: "https://images-eu.ssl-images-amazon.com/images/I/41zOkw9vLFL._AC_SX184_.jpg", category: "Business & Economics", description: "The year was 2004, India's economy was booming and 'India Shining' seemed like a true slogan. Around the same time, a non-banking financial company applied for and received a licence to operate as a private bank. Yes Bank was born. Its rise was phenomenal and it soon became the fourth-largest private bank in the country, with approved permissions to operate in Singapore, London and Dubai."},
    {name: "Dreamers and Unicorns", author: "Arthur Conan Doyle", cost: "₹388", books_available: 12,img_url: "https://images-eu.ssl-images-amazon.com/images/I/41eESmdS3IL._AC_SX184_.jpg", category: "Business & Finance", description: "Packed with ideas and innovations, this powerhouse of a book by best-selling author and talent management specialist Abhijit Bhaduri explains why leadership, talent and culture are the new drivers of growth whether you are a Dreamer, a Unicorn, a Market Shaper or an Incumbent."},
    {name: "Brand New Start: Fast-Start", author: "Kiley Reid", cost: "₹388", books_available: 6,img_url: "https://images-eu.ssl-images-amazon.com/images/I/51W70enRUdL._AC_SX184_.jpg", category: "Medicine & Health Sciences", description: "Combining the wisdom and experience of a CEO gained over two and a half decades in the corporate world with the accessible and engaging storytelling of a bestselling novelist, Brand New Start is a unique book. It will make you reflect, smile, rethink some things you've taken for granted, and ultimately equip you with practical advice on how to build a more authentic, more compelling and more differentiated personal brand as a cornerstone of your career success."},
    {name: "Hidden in Plain Sight", author: "Arthur Conan Doyle", cost: "₹388", books_available: 8,img_url: "https://images-eu.ssl-images-amazon.com/images/I/512+dA1m+EL._AC_SX184_.jpg", category: "Literature & Fiction", description: "Hidden in Plain Sight is the second brilliant and captivating novel featuring William Warwick by the master storyteller and bestselling author of the Clifton Chronicles, Jeffrey Archer."},
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
    document.getElementById("addbooks").style.display = "none";
    document.getElementById("bookspopup").style.display = "none";
}

function availablebooks() {

    str=""

    if (books_list.length>0){
        for (i = 0; i < books_list.length; i++) {
            str = str + "<li><a href='#' onclick='popup(" + i + ");'><img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>" + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><p hidden>" + books_list[i].category + "</p></div></a></li>"
        } 
    }
    else{
        str = "NO Books Available"
    }
    
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    
    var tabsin = document.getElementsByClassName("tabslink")
    tabsin[1].className = tabsin[2].className.replace("tabslink", "tabslink active");
    document.getElementById("content1").style.marginTop = "0px";
    document.getElementById("content1").innerHTML = str
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("availablebooks").style.display = "block";
    document.getElementById("newarrivals").style.display = "none";
    document.getElementById("booksborrowed").style.display = "none";
    document.getElementById("addbooks").style.display = "none";
    document.getElementById("bookspopup").style.display = "none";
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
}

function popup(i){
    
    str = "<img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>" + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><p>Category: " + books_list[i].category + "</p><p>Description: " + books_list[i].description + "</p><button>Remove</button></div>"
    
    document.getElementById("content1").style.marginTop = "320px";
    document.getElementById("content4").innerHTML = str
    document.getElementById("bookspopup").style.display = "block";
}

function myFunction() { 
    document.getElementById("content1").style.marginTop = "0";
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
