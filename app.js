//main body elements
const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");

//hamburger menu elements
const menuBtn = document.querySelector(".menu_icon");
const menu = document.createElement("div");
const menuOptions = document.createElement("div");
const option1 = document.createElement("h3");
const option2 = document.createElement("h3");
const arrowUp = document.createElement("i");

//form elements
const formModal = document.querySelector(".form_container");
const bookPlaceholder = document.querySelector(".book_title_placeholder");
const inputBoxs = document.querySelectorAll(".input_box");
const addBookBtn = document.querySelector(".add_btn");

//grid elements
const bookContainer = document.querySelector(".book_container");
const addBookCard = document.querySelector(".add_book");
const addBookText = document.querySelector(".add_book_text");
const plusCircle = document.querySelector(".plus_circle");
const closeBtn = document.querySelector(".close");





//variables
let selectedInput = "";
let selectedLabel;






//BRING MENU
menuBtn.addEventListener("click", () => {
    menu.classList.add("menu");
    menu.classList.add("animate_menu_down");
    menuOptions.classList.add("menu_options");      
    option1.classList.add("menu_option");  
    option2.classList.add("menu_option");      
    arrowUp.classList.add("fas");
    arrowUp.classList.add("fa-arrow-up");                        
    
    option1.textContent = "CLOUD";
    option2.textContent = "LOCAL";
                                 

    body.removeChild(header);
    body.removeChild(main);

    body.appendChild(menu);
    menu.appendChild(arrowUp);
    menu.appendChild(menuOptions);
    menuOptions.appendChild(option1);
    menuOptions.appendChild(option2);
});


//REMOVE MENU
arrowUp.addEventListener("click", () => {
    menu.classList.add("animate_menu_up");
    body.appendChild(header);
    body.appendChild(main);


    setTimeout(function(){
        menu.classList.remove("animate_menu_up");

        body.removeChild(menu);
    }, 250);

});



//A LITTLE HOVER ANIMATION ON ADD A BOOK CARD


addBookCard.addEventListener("mouseover", () => {
    addBookText.style.color = "#2b2b2b";
    plusCircle.style.color = "#2b2b2b";
    addBookCard.style.border = "4px dashed #807f7f";
});

addBookCard.addEventListener("mouseout", () => {
    addBookText.style.color = "#969696";
    plusCircle.style.color = "#969696";
    addBookCard.style.border = "4px dashed #C2C2C2";
});




//ONFOCUS AND ONBLUR FUNCTIONS FOR THE INPUTs
function inputFocus(){

    selectedInput = document.activeElement;
    selectedLabel = document.querySelector(`.${selectedInput.getAttribute("name")}`);

        if(selectedLabel.classList.contains("inactive")){
            selectedLabel.classList.remove("inactive");
            selectedLabel.classList.add("active");
        }else{
        selectedLabel.classList.add("active");

        }

}

function inputBlur(){
    
    if(!selectedInput.value){
        selectedLabel.classList.remove("active");
        selectedLabel.classList.add("inactive");
        selectedInput.style.borderBottom = "4px rgb(207, 207, 207) solid";
        
    }else{
        selectedInput.style.borderBottom = "4px rgb(60, 207, 226) solid";
    }
    selectedInput.setSelectionRange(0, 0);

}







addBookCard.addEventListener("click", ()=>{
    formModal.style.display = "inline-block";

});

closeBtn.addEventListener("click", ()=>{
    formModal.style.display = "none";

});

addBookBtn.addEventListener("click", ()=> { 
    const emptyBookIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ1OS4zMTlweCIgaGVpZ2h0PSI0NTkuMzE5cHgiIHZpZXdCb3g9IjAgMCA0NTkuMzE5IDQ1OS4zMTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1OS4zMTkgNDU5LjMxOTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTk0LjkyNCwzNjYuNjc0aDMxMi44NzRjMC45NTgsMCwxLjg4Ni0wLjEzNiwyLjc3OC0wLjM0OWMwLjA3MSwwLDAuMTMsMC4wMTIsMC4yMDEsMC4wMTINCgkJYzYuNjc5LDAsMTIuMTA1LTUuNDIsMTIuMTA1LTEyLjEwNFYxMi4xMDVDNDIyLjg4Myw1LjQyMyw0MTcuNDU2LDAsNDEwLjc3NywwaC0yLjk1NUgxMTQuMjg0SDk0Ljk0MQ0KCQljLTMyLjIyLDAtNTguNDI4LDI2LjIxNC01OC40MjgsNTguNDI1YzAsMC40MzIsMC4wODUsMC44NDIsMC4xMjcsMS4yNTljLTAuMDQyLDI5Ljc1NS0wLjQxMSwzMDMuMTY2LTAuMDQyLDMzOS4xMDkNCgkJYy0wLjAyMywwLjcwMy0wLjEwOSwxLjM4OS0wLjEwOSwyLjA5OWMwLDMwLjk3MywyNC4yNTIsNTYuMzI5LDU0Ljc1Nyw1OC4yNDVjMC42MTIsMC4wOTQsMS4yMTIsMC4xODMsMS44NDcsMC4xODNoMzE3LjY4Mw0KCQljNi42NzksMCwxMi4xMDUtNS40MiwxMi4xMDUtMTIuMTA1di00NS41NjVjMC02LjY4LTUuNDI3LTEyLjEwNS0xMi4xMDUtMTIuMTA1cy0xMi4xMDUsNS40MjYtMTIuMTA1LDEyLjEwNXYzMy40NjFIOTQuOTI0DQoJCWMtMTguMzk1LDAtMzMuNDExLTE0LjYwNS0zNC4xNDktMzIuODE3YzAuMDE4LTAuMzI1LDAuMDc3LTAuNjMyLDAuMDcxLTAuOTYzYy0wLjAxMi0wLjUzMi0wLjAzLTEuMzU5LTAuMDQyLTIuNDU5DQoJCUM2MS44NjIsMzgwLjk0OCw3Ni43MzksMzY2LjY3NCw5NC45MjQsMzY2LjY3NHogTTEwMy4xNzgsNTguNDI1YzAtNi42ODIsNS40MjMtMTIuMTA1LDEyLjEwNS0xMi4xMDVzMTIuMTA1LDUuNDIzLDEyLjEwNSwxMi4xMDUNCgkJVjMwNC4zMWMwLDYuNjc5LTUuNDIzLDEyLjEwNS0xMi4xMDUsMTIuMTA1cy0xMi4xMDUtNS40MjctMTIuMTA1LTEyLjEwNVY1OC40MjV6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
    let book;
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let numPages = document.querySelector("#num-pages").value;
    let coverLink = document.querySelector("#cover-link").value;
    let hasRead = checkResponse();

   /* if(checkEntries(title, author, numPages)){*/
        book = new Book(title, author, numPages, coverLink, hasRead);
        console.log(book.coverLink);

  /*  }*/


    let bookCard = document.createElement("div");
    let bookCover = document.createElement("img");
    if(book.coverLink){
        bookCover.setAttribute("src", `${book.coverLink}`);
        bookCover.classList.add("book_cover");


    }else{
        bookCover.setAttribute("src", `${emptyBookIcon}`);
        bookCover.classList.add("empty_book_cover");

    }
    bookCard.classList.add("book_card");


    bookCard.appendChild(bookCover);
    bookContainer.insertBefore(bookCard, bookContainer.firstElementChild.nextSibling);


});


function Book(title, author, numPages, coverLink, hasRead){
    this.title = title
    this.author = author
    this.numPages = numPages
    this.coverLink = coverLink
    this.hasRead = hasRead
}

function checkResponse(){
    const responses = document.querySelectorAll("input[type='radio']");

    for(let response of responses){
        if(response.checked)
        if(response.value == "Yes"){
            return true;
        }else{
            return false;
        }
    }

}

function checkEntries(title, author, numPages){
    if(title.length > 1 && author.length > 1 && numPages > 1 && !isNaN(numPages)){
        return true;
    }else{
        return false;
    }
}


