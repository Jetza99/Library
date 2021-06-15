//main body elements
const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const nav = document.querySelector("nav");
const clearBtn = document.querySelector(".clear_lib");

//hamburger menu elements
const menuBtn = document.querySelector(".menu_icon");
const menu = document.createElement("div");
const menuOptions = document.createElement("div");
const option1 = document.createElement("h3");
const option2 = document.createElement("h3");
const arrowUp = document.createElement("i");

//form elements
const formModal = document.querySelector(".form_container");
const form = document.querySelector(".form_book_info");
const bookPlaceholder = document.querySelector(".book_title_placeholder");
const bookTitleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const numOfPagesInput = document.querySelector("#num-pages");
const coverLinkInput = document.querySelector("#cover-link");
const yesRadio = document.querySelector("#yes"); 
const noRadio = document.querySelector("#no");


const labels = document.querySelectorAll(".text_label");
const inputBoxs = document.querySelectorAll(".input_box");
const addBookBtn = document.querySelector(".add_btn");

//grid elements
const bookContainer = document.querySelector(".book_container");
const addBookCard = document.querySelector(".add_book");
const addBookText = document.querySelector(".add_book_text");
const plusCircle = document.querySelector(".plus_circle");
const closeBtn = document.querySelector(".close");
const testingBtn = document.querySelector(".info");
const emptyBookIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ1OS4zMTlweCIgaGVpZ2h0PSI0NTkuMzE5cHgiIHZpZXdCb3g9IjAgMCA0NTkuMzE5IDQ1OS4zMTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1OS4zMTkgNDU5LjMxOTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTk0LjkyNCwzNjYuNjc0aDMxMi44NzRjMC45NTgsMCwxLjg4Ni0wLjEzNiwyLjc3OC0wLjM0OWMwLjA3MSwwLDAuMTMsMC4wMTIsMC4yMDEsMC4wMTINCgkJYzYuNjc5LDAsMTIuMTA1LTUuNDIsMTIuMTA1LTEyLjEwNFYxMi4xMDVDNDIyLjg4Myw1LjQyMyw0MTcuNDU2LDAsNDEwLjc3NywwaC0yLjk1NUgxMTQuMjg0SDk0Ljk0MQ0KCQljLTMyLjIyLDAtNTguNDI4LDI2LjIxNC01OC40MjgsNTguNDI1YzAsMC40MzIsMC4wODUsMC44NDIsMC4xMjcsMS4yNTljLTAuMDQyLDI5Ljc1NS0wLjQxMSwzMDMuMTY2LTAuMDQyLDMzOS4xMDkNCgkJYy0wLjAyMywwLjcwMy0wLjEwOSwxLjM4OS0wLjEwOSwyLjA5OWMwLDMwLjk3MywyNC4yNTIsNTYuMzI5LDU0Ljc1Nyw1OC4yNDVjMC42MTIsMC4wOTQsMS4yMTIsMC4xODMsMS44NDcsMC4xODNoMzE3LjY4Mw0KCQljNi42NzksMCwxMi4xMDUtNS40MiwxMi4xMDUtMTIuMTA1di00NS41NjVjMC02LjY4LTUuNDI3LTEyLjEwNS0xMi4xMDUtMTIuMTA1cy0xMi4xMDUsNS40MjYtMTIuMTA1LDEyLjEwNXYzMy40NjFIOTQuOTI0DQoJCWMtMTguMzk1LDAtMzMuNDExLTE0LjYwNS0zNC4xNDktMzIuODE3YzAuMDE4LTAuMzI1LDAuMDc3LTAuNjMyLDAuMDcxLTAuOTYzYy0wLjAxMi0wLjUzMi0wLjAzLTEuMzU5LTAuMDQyLTIuNDU5DQoJCUM2MS44NjIsMzgwLjk0OCw3Ni43MzksMzY2LjY3NCw5NC45MjQsMzY2LjY3NHogTTEwMy4xNzgsNTguNDI1YzAtNi42ODIsNS40MjMtMTIuMTA1LDEyLjEwNS0xMi4xMDVzMTIuMTA1LDUuNDIzLDEyLjEwNSwxMi4xMDUNCgkJVjMwNC4zMWMwLDYuNjc5LTUuNDIzLDEyLjEwNS0xMi4xMDUsMTIuMTA1cy0xMi4xMDUtNS40MjctMTIuMTA1LTEyLjEwNVY1OC40MjV6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';


//firebase
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();


//variables
let selectedInput = "";
let selectedLabel;
let bookArr = [];
let emptyCover = true;
let localBtn;
let cloudBtn;
let booksRef;
let unsubscribe;





if(window.screen.width > 1024){
    menuBtn.remove();

    const firstItem = document.createElement("h6");
    const secondItem = document.createElement("h6");

    firstItem.classList.add("navbar_option");
    firstItem.classList.add("navbar_option_active");
    firstItem.setAttribute("id", "local")

    firstItem.textContent = "LOCAL";


    secondItem.classList.add("navbar_option");
    secondItem.classList.add("option2");
    secondItem.setAttribute("id", "cloud");


    secondItem.textContent = "CLOUD";

    nav.appendChild(firstItem);
    nav.appendChild(secondItem);

}


if(localStorage.length > 0){
    let books = JSON.parse(localStorage.getItem("books"));
    bookArr = books;
    if(books == []){
        localStorage.clear();
    }else if(bookArr.length > 0){
        for(let i = 0; i < bookArr.length; i++){

            let infoCard = document.createElement("div");
            let infoIcon = document.createElement("i");
            let trashIcon = document.createElement("i");
        
            let bookCard = document.createElement("div");
            let bookCover = document.createElement("img");
            if(bookArr[i].coverLink){
                bookCover.setAttribute("src", `${bookArr[i].coverLink}`);
                bookCover.classList.add("book_cover");
                emptyCover = false;
        
            }else{
                bookCover.setAttribute("src", `${emptyBookIcon}`);
                bookCover.classList.add("empty_book_cover");
            }
            infoCard.classList.add("info_btns");
        
            infoIcon.classList.add("fas");
            infoIcon.classList.add("fa-info-circle");
            infoIcon.classList.add("info");
            infoIcon.classList.add(`${bookArr[i].bookId}`);
        
        
            trashIcon.classList.add("fas");
            trashIcon.classList.add("fa-trash-alt");
            trashIcon.classList.add("trash");
            trashIcon.classList.add(`${bookArr[i].bookId}`);
    
    
            if(bookArr[i].hasRead){
                let checkIcon = document.createElement("i");
                checkIcon.classList.add("fas");
                checkIcon.classList.add("fa-check-circle");
                infoCard.appendChild(checkIcon);
            }else if(!bookArr[i].hasRead){
                let timesIcon = document.createElement("i");
                timesIcon.classList.add("fas");
                timesIcon.classList.add("fa-times-circle");
                infoCard.appendChild(timesIcon);
            }
    
            bookCard.classList.add("book_card");
        
        
            infoCard.appendChild(infoIcon);
            infoCard.appendChild(trashIcon);
            bookCard.appendChild(infoCard);
            bookCard.appendChild(bookCover);
            bookContainer.insertBefore(bookCard, bookContainer.firstElementChild.nextSibling);   
         }
         manageInfoCard();
    }
    
}

clearBtn.addEventListener("click", ()=>{
    const bookCards = document.querySelectorAll(".book_card");
    bookCards.forEach(bookCard => bookCard.remove());
    bookArr = [];
    localStorage.clear();  
});





//BRING MENU
menuBtn.addEventListener("click", () => {
    menu.classList.add("menu");
    menu.classList.add("animate_menu_down");
    menuOptions.classList.add("menu_options");      
    option1.classList.add("menu_option");  
    option1.setAttribute("id", "cloud");
    option2.classList.add("menu_option");   
    option2.setAttribute("id", "local");
   
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

localBtn = document.querySelector("#local");
cloudBtn = document.querySelector("#cloud");

if(!localBtn && !cloudBtn){
    localBtn = option2;
    cloudBtn = option1;
}


//sign in
cloudBtn.addEventListener("click", ()=>{
    const firstItem = document.querySelector("#local");
    firstItem.classList.remove("navbar_option_active");


    auth.signInWithPopup(provider);



    const secondItem = document.querySelector("#cloud");
    secondItem.classList.add("navbar_option_active");
});

//sign out
localBtn.addEventListener("click", ()=>{
    const secondItem = document.querySelector("#cloud");
    secondItem.classList.remove("navbar_option_active");

    auth.signOut();

    const firstItem = document.querySelector("#local");
    firstItem.classList.add("navbar_option_active");

});

auth.onAuthStateChanged(user => {
    if(user){
        booksRef = db.collection("books");
        //signed in
        //show books stored in firebase





        //adding book to firestore db
        addBookBtn.addEventListener("click", ()=>{

            addingBookHandle();

            for(let i = bookArr.length - 1; i < bookArr.length; i++){
                booksRef.doc(`${bookArr[i].bookId}`).set({
                    uid: user.uid,
                    title: bookArr[i].title,
                    author: bookArr[i].author,
                    numPages: bookArr[i].numPages,
                    coverLink: bookArr[i].coverLink,
                    hasRead: bookArr[i].hasRead,
                    bookId: bookArr[i].bookId
                });
            }

         
        });
        
        
        
    }else {
        //not signed in
        //remove cloud-stored books and replace with local
        console.log("signed out");


    }
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






//BRING FORM
addBookCard.addEventListener("click", ()=>{
    window.scrollTo(0, 0);
    form.reset();
    formModal.style.display = "inline-block";

    if(window.screen.width < 700){
        body.style.position = "fixed";
        body.style.overflow = "hidden";
    }else if(window.screen.width > 700){
        body.style.overflow = "hidden";
    }
    if(addBookBtn.value == "Add Book"){
        addBookBtn.addEventListener("click", addingBookHandle);
    }

});

//CLOSE FORM
closeBtn.addEventListener("click", ()=>{
    formModal.style.display = "none";
    body.style.position = "";
    body.style.overflow = "";
    addBookBtn.value = "Add Book";


});



//ADD BOOK INFORMATION INTO OBJECT AND INSERT IT INTO GRID WITH IMG
function addingBookHandle(){
        let book;
        let title = document.querySelector("#title").value;
        let author = document.querySelector("#author").value;
        let numPages = document.querySelector("#num-pages").value;
        let coverLink = document.querySelector("#cover-link").value;
        let hasRead = checkResponse();
        let bookId = generateBookId();
    
       /*if(checkEntries(title, author, numPages)){*/
            book = new Book(title, author, numPages, coverLink, hasRead, bookId);
            bookArr.push(book);
            localStorage.setItem("books", JSON.stringify(bookArr));
    
     /*  }*/
    
      
    
        let infoCard = document.createElement("div");
        let infoIcon = document.createElement("i");
        let trashIcon = document.createElement("i");
    
        let bookCard = document.createElement("div");
        let bookCover = document.createElement("img");
        if(book.coverLink){
            bookCover.setAttribute("src", `${book.coverLink}`);
            bookCover.classList.add("book_cover");
            emptyCover = false;
    
        }else{
            bookCover.setAttribute("src", `${emptyBookIcon}`);
            bookCover.classList.add("empty_book_cover");
        }
        infoCard.classList.add("info_btns");
    
        infoIcon.classList.add("fas");
        infoIcon.classList.add("fa-info-circle");
        infoIcon.classList.add("info");
        infoIcon.classList.add(`${book.bookId}`);
    
    
        trashIcon.classList.add("fas");
        trashIcon.classList.add("fa-trash-alt");
        trashIcon.classList.add("trash");
        trashIcon.classList.add(`${book.bookId}`);


        if(hasRead){
            let checkIcon = document.createElement("i");
            checkIcon.classList.add("fas");
            checkIcon.classList.add("fa-check-circle");
            infoCard.appendChild(checkIcon);
        }else if(!hasRead){
            let timesIcon = document.createElement("i");
            timesIcon.classList.add("fas");
            timesIcon.classList.add("fa-times-circle");
            infoCard.appendChild(timesIcon);
        }
    
        bookCard.classList.add("book_card");
    
    
        infoCard.appendChild(infoIcon);
        infoCard.appendChild(trashIcon);
        bookCard.appendChild(infoCard);
        bookCard.appendChild(bookCover);
        bookContainer.insertBefore(bookCard, bookContainer.firstElementChild.nextSibling);
    
        manageInfoCard();
        formModal.style.display = "none";
        body.style.position = "";
        body.style.overflow = "";

        form.reset();

        addBookBtn.removeEventListener("click", addingBookHandle);
    
}



function Book(title, author, numPages, coverLink, hasRead, bookId){
    this.title = title
    this.author = author
    this.numPages = numPages
    this.coverLink = coverLink
    this.hasRead = hasRead
    this.bookId = bookId
}

//RETURN IF THE BOOK HAVE BEEN READ OR NOT
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

//VALIDATE ENTRIES
function checkEntries(title, author, numPages){
    if(title.length > 1 && author.length > 1 && numPages > 1 && !isNaN(numPages)){
        return true;
    }else{
        return false;
    }
}


function manageInfoCard(){

    let bookChosen;
    //info elements
    const infoCards = document.querySelectorAll(".info_btns");
    const trashBtn = document.querySelector(".trash");

    infoCards.forEach(infoCard => infoCard.addEventListener("mouseover", ()=>{
        infoCard.style.opacity = "1";
    }));

    infoCards.forEach(infoCard => infoCard.addEventListener("mouseout", ()=>{
        infoCard.style.opacity = "0";
    }));       
    

    let hasClicked = false;
    infoCards.forEach(infoCard => infoCard.addEventListener("click", clickHandle));

    function clickHandle(){
        
        infoCards.forEach(infoCard => infoCard.style.opacity = "0");
        if(!hasClicked){
            this.style.opacity = "1";
            hasClicked = true;
        }else if(hasClicked){
            this.style.opacity = "0";
            hasClicked = false;
        }
        window.addEventListener("click", (e)=>{
            if(e.target.parentNode.classList[0] != "info_btns" && e.target.parentNode.classList[0] != "book_card"){
                this.style.opacity = "0";
                hasClicked = false;

            }
        });
    }

    trashBtn.addEventListener("click", (e)=>{
        bookChosen = lookForBook(bookArr, e.target.classList[3]);
        bookArr.splice(bookArr.indexOf(bookChosen), 1);
        localStorage.setItem("books", JSON.stringify(bookArr));
        bookContainer.removeChild(e.target.parentNode.parentNode);
    });


    const infoBtns = document.querySelectorAll(".info");
    infoBtns.forEach(infoBtn => infoBtn.addEventListener("click", (e)=>{
        window.scrollTo(0, 0);
        formModal.style.display = "inline-block";
        if(window.screen.width < 700){
            body.style.position = "fixed";
            body.style.overflow = "hidden";
        }else if(window.screen.width > 700){
            body.style.overflow = "hidden";
        }        addBookBtn.value = "Save Book";


        let title;
        let author;
        let numPage;
        let read;
        let bookCover;

        bookChosen = lookForBook(bookArr, e.target.classList[3]);
        title = bookChosen.title;
        author = bookChosen.author;
        numPage = bookChosen.numPages;
        bookCover = bookChosen.coverLink;
        read = bookChosen.hasRead;

        bookTitleInput.value = title;
        authorInput.value = author;
        numOfPagesInput.value = numPage;

        if(emptyCover){
            coverLinkInput.value = "";
        }else if(!emptyCover){
            coverLinkInput.value = bookChosen.coverLink;
        }




        if(read){
            noRadio.checked = false;
            yesRadio.checked = true;
        }else if(!read){
            yesRadio.checked = false;
            noRadio.checked = true;
        }

        let selectedInfoCard = e.target.parentNode;

        if(addBookBtn.value == "Save Book"){
            addBookBtn.addEventListener("click", saveBookHandle);
        }



        function saveBookHandle(){
            let book;
            let title = document.querySelector("#title").value;
            let author = document.querySelector("#author").value;
            let numPages = document.querySelector("#num-pages").value;
            let coverLink = document.querySelector("#cover-link").value;
            let hasRead = checkResponse();
            let bookId = bookChosen.bookId;

             /* if(checkEntries(title, author, numPages)){*/
             book = new Book(title, author, numPages, coverLink, hasRead, bookId);
             bookArr.push(book);
             bookArr.splice(bookArr.indexOf(bookChosen), 1);
             localStorage.setItem("books", JSON.stringify(bookArr));


            /*  }*/

            if(hasRead){
                timesIcon = document.querySelector(".fa-times-circle");
                if(timesIcon){
                    selectedInfoCard.removeChild(timesIcon);
                    let checkIcon = document.createElement("i");
                    checkIcon.classList.add("fas");
                    checkIcon.classList.add("fa-check-circle");
                    selectedInfoCard.appendChild(checkIcon);
                }


            }else if(!hasRead){
                checkIcon = document.querySelector(".fa-check-circle");
                if(checkIcon){
                    selectedInfoCard.removeChild(checkIcon);
                    let timesIcon = document.createElement("i");
                    timesIcon.classList.add("fas");
                    timesIcon.classList.add("fa-times-circle");
                    selectedInfoCard.appendChild(timesIcon);
                }

            }


            formModal.style.display = "none";
            body.style.position = "";
            body.style.overflow = "";

            form.reset();          
            addBookBtn.value = "Add Book";
            addBookBtn.removeEventListener("click", saveBookHandle);

        }

    }));

  
    


}



function lookForBook(bookArr, idToLook) {

    const result = bookArr.filter(book => book.bookId == idToLook);
    
    return result[0];

}







//GENERATE RANDOM ID FUNCTIONS
function randomNum(min, max){
    var x = Math.floor(Math.random() * (max - min) + min);
    return x;
}

myArr = fillArr(9999);
function generateBookId(){
    const min = 1111;

    let randomIndex = randomNum(min, myArr.length-1);
    let randomId = myArr[randomIndex];
    myArr.splice(randomIndex, 1);
    
    return randomId;
   
}



function fillArr(max){
    let myArr = [];

    for(let i = 1111; i <= max; i++){
        myArr.push(i);
    }

    return myArr;
}







