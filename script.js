function fadeIn(elem, ms) {
    if (!elem)
        return;
    elem.style.opacity = 0;
    elem.style.filter = "alpha(opacity=0)";
    elem.style.display = "inline-block";
    elem.style.visibility = "visible";
    if (ms) {
        var opacity = 0;
        var timer = setInterval(function () {
            opacity += 50 / ms;
            if (opacity >= 1) {
                clearInterval(timer);
                opacity = 1;
            }
            elem.style.opacity = opacity;
            elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        }, 50);
    }
    else {
        elem.style.opacity = 1;
        elem.style.filter = "alpha(opacity=1)";
    }
}

function fadeOut(elem, ms) {
    if (!elem)
        return;
    if (ms) {
        var opacity = 1;
        var timer = setInterval(function () {
            opacity -= 50 / ms;
            if (opacity <= 0) {
                clearInterval(timer);
                opacity = 0;
                elem.style.display = "none";
                elem.style.visibility = "hidden";
            }
            elem.style.opacity = opacity;
            elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        }, 50);
    }
    else {
        elem.style.opacity = 0;
        elem.style.filter = "alpha(opacity=0)";
        elem.style.display = "none";
        elem.style.visibility = "hidden";
    }
}

let search = document.querySelector("#search");
let searchICON = document.querySelector("#search-icon");
let header2 = document.querySelector("#header-header-2");
let header3 = document.querySelector("#header-header-3");
let navITEMlist = document.querySelector(".nav-item-list");
let navITEM = document.querySelectorAll(".nav-item");
let headerUSERicon = document.querySelector(".header-user");
let headerUSERcontainer = document.querySelector(".header-user-container");
let headerUSERinfo = document.querySelector(".header-user-info");
let headerUSERdropdown = document.querySelector(".header-user .dropdown-menu");
let headerBASKETinfo = document.querySelector(".header-basket-info")
let headerBASKETicon = document.querySelector(".header-basket");
let headerBASKETcontainer = document.querySelector(".header-basket-container");
let headerBASKETdropdown = document.querySelector(".header-basket .dropdown-menu");

function hronmouseenter(element) {
    let classlist = new Array();
    element.classList.forEach(function (classname) {
        classlist.push(classname)
    });
    if (classlist.includes("header-user-container")) {
        fadeIn(headerUSERinfo, 200)
        headerUSERicon.style.color = "#ff6000";
        headerUSERcontainer.style.cssText = `
        background-color: #ffffff;
        border-radius: 8px;
        padding: 5px 0;
        width: 100%;
    `;
    }
    else {
        fadeIn(headerBASKETinfo, 200)
        headerBASKETicon.style.color = "#ff6000";
        headerBASKETcontainer.style.cssText = `
        background-color: #ffffff;
        border-radius: 8px;
        padding: 5px 0;
        width: 100%;
    `;
    }
}

function hronmouseleave(element) {
    let classlist = new Array();
    element.classList.forEach(function (classname) {
        classlist.push(classname)
    });
    if (classlist.includes("header-user-container")) {
        headerUSERinfo.style.display = "none";
        headerUSERicon.style.color = "#ffffff";
        headerUSERcontainer.style.cssText = "";
    }
    else {
        headerBASKETinfo.style.display = "none";
        headerBASKETicon.style.color = "#ffffff";
        headerBASKETcontainer.style.cssText = "";
    }
}

navITEM.forEach(item => {
    item.addEventListener("mouseover", function () {
        fadeIn(item.firstElementChild);
        item.style.backgroundColor = "#ff6000";
        item.style.color = "#ffffff";
    })
    item.addEventListener("mouseout", function () {
        item.firstElementChild.style.display = "none";
        item.style.backgroundColor = "#F5F5F5";
        item.style.color = "#646464";
    })
})

search.addEventListener("focus", function () {
    header2.style.display = "none";
    fadeIn(header3, 100);
    searchICON.style.color = "#ffffff";
    searchICON.style.backgroundColor = "#4b4b4b";
})

search.addEventListener("blur", function () {
    header3.style.display = "none";
    fadeIn(header2, 100);
    searchICON.style.color = "#ff6000";
    searchICON.style.backgroundColor = "#ffffff";
})

let clicktoggle = 0;
headerUSERicon.addEventListener("click", function () {
    if (clicktoggle === 0) { 
        fadeIn(headerUSERdropdown, 50) 
        clicktoggle = 1;
    }
    else if (clicktoggle === 1){
        fadeOut(headerUSERdropdown, 50)
        clicktoggle = 0;
    }
})

