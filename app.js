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
const bookPlaceholder = document.querySelector(".book_title_placeholder");
const inputBoxs = document.querySelectorAll(".input_box");


//variables
let selectedInput = "";
let test;

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
    }, 300);

});



//A LITTLE HOVER ANIMATION ON ADD A BOOK CARD
const addBookCard = document.querySelector(".add_book");
const addBookText = document.querySelector(".add_book_text");
const plusCircle = document.querySelector(".plus_circle");

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





function inputFocus(){

    selectedInput = document.activeElement;
    test = document.querySelector(`.${selectedInput.getAttribute("name")}`);


        if(test.classList.contains("inactive")){
            test.classList.remove("inactive");
            test.classList.add("active");
        }else{
        test.classList.add("active");

        }

        console.log(test);

}
function inputBlur(){
    
    if(!selectedInput.value){
        
        test.classList.remove("active");
        test.classList.add("inactive");
        
    }

    selectedInput.setSelectionRange(0, 0);
    console.log();

    

    

}



/*
function inputClick(){
    
}
*/

