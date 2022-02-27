/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@_HEPSIBURADA_@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

const ID_HEPSIBURADA_2 = document.querySelector("#hepsiburada-2");
const ID_HEPSIBURADA_3 = document.querySelector("#hepsiburada-3");
const CLASS_SEARCH_INPUT = document.querySelector(".search-input");

CLASS_SEARCH_INPUT.addEventListener("focus", function () {
    ID_HEPSIBURADA_2.style.display = "none";
    ID_HEPSIBURADA_3.style.display = "inline-block";
})

CLASS_SEARCH_INPUT.addEventListener("blur", function () {
    ID_HEPSIBURADA_2.style.display = "inline-block";
    ID_HEPSIBURADA_3.style.display = "none";
})

/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@_USER_DROPDOWN_@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

const CLASS_USER = document.querySelector(".user");
const CLASS_USER_NAME = document.querySelector("a.user-name");
const CLASS_USER_ICON = document.querySelector("i.user-icon");
const CLASS_DROPDOWN_ITEM = document.querySelectorAll("a.dropdown-item");

function USER_TOGGLE() {
    let is_active = (CLASS_USER.getAttribute("is_active") === "true");
    CLASS_USER.setAttribute("is_active", !(is_active));
}

function FOCUS_OUT() {
    // This function works with "onmouseleave" attribute of "div.user" element.
    CLASS_USER.setAttribute("is_active", "false");
}

CLASS_USER_ICON.addEventListener("click", USER_TOGGLE);
CLASS_USER_NAME.addEventListener("click", USER_TOGGLE);
CLASS_DROPDOWN_ITEM.forEach(element => {
    element.addEventListener("click", USER_TOGGLE);
})