/*
    THIS FILE WAS DEVELOPED BY MEHMET GUDUK
    © 2022 COPYRIGHT, LICENSED WITH GPL-3.0 LICENSE, AUTHOR IS MEHMET GUDUK
    https://github.com/mehmetguduk
*/

/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@_GENERAL_@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

const A_ELEMENTS = document.querySelectorAll("a:not(.copyright-link)");
A_ELEMENTS.forEach(a => {
    a.addEventListener("click", function (event) {
        event.preventDefault()
    })
})

/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@_HEPSIBURADA_@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

const ID_HEPSIBURADA_2 = document.querySelector("h1#hepsiburada-2");
const ID_HEPSIBURADA_3 = document.querySelector("h1#hepsiburada-3");
const CLASS_SEARCH_INPUT = document.querySelector("input.search-input");

CLASS_SEARCH_INPUT.addEventListener("focus", function () {
    ID_HEPSIBURADA_2.style.display = "none";
    ID_HEPSIBURADA_3.style.display = "inline-block";
})

CLASS_SEARCH_INPUT.addEventListener("blur", function () {
    ID_HEPSIBURADA_2.style.display = "inline-block";
    ID_HEPSIBURADA_3.style.display = "none";
})

/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@_USER_DROPDOWN_@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

const CLASS_USER = document.querySelector("div.user");
const CLASS_USER_ICON = document.querySelector("i.user-icon");
const CLASS_DROPDOWN_ITEM = document.querySelectorAll("a.dropdown-item");

function USER_TOGGLE() {
    let is_active = (CLASS_USER.getAttribute("is_active") === "true");
    CLASS_USER.setAttribute("is_active", !(is_active));
}

function USER_FOCUS_OUT() {
    CLASS_USER.setAttribute("is_active", "false");
}

CLASS_USER_ICON.addEventListener("click", USER_TOGGLE);
CLASS_DROPDOWN_ITEM.forEach(element => {
    element.addEventListener("click", USER_TOGGLE);
})

/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@_BASKET_DROPDOWN_@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

const CLASS_BASKET = document.querySelector("div.basket");
const CLASS_BASKET_ICON = document.querySelector("i.basket-icon");
const CLASS_BASKET_LINK = document.querySelector("a.basket-link");
const CLASS_PRODUCT = document.querySelectorAll("li.product");


function BASKET_TOGGLE() {
    let is_active = (CLASS_BASKET.getAttribute("is_active") === "true");
    CLASS_BASKET.setAttribute("is_active", !(is_active));
}

function BASKET_FOCUS_OUT() {
    CLASS_BASKET.setAttribute("is_active", "false");
}

CLASS_BASKET_ICON.addEventListener("click", BASKET_TOGGLE);
CLASS_BASKET_LINK.addEventListener("click", BASKET_TOGGLE);
CLASS_PRODUCT.forEach(element => {
    element.addEventListener("click", BASKET_TOGGLE);
})