"use strict";

function tutorialHeaderSwitch (a) {
    if (a === 0) {
        document.getElementsByClassName("mainContentRowHeaderSell")[0].className = "mainContentRowHeaderSell mainContentRowHeaderActive";
        document.getElementsByClassName("mainContentRowHeaderBuy")[0].className = "mainContentRowHeaderBuy";
    } else {
        document.getElementsByClassName("mainContentRowHeaderBuy")[0].className = "mainContentRowHeaderBuy mainContentRowHeaderActive";
        document.getElementsByClassName("mainContentRowHeaderSell")[0].className = "mainContentRowHeaderSell";
    }
}

function subLinkDropdown () {
    var subLink = document.getElementsByClassName("mobileSubLinkBox")[0];
    var subLinkId = subLink.getAttribute("id");
    var news = document.getElementsByClassName("mobileNews")[0];
    var newsId = news.getAttribute("id");

    if (newsId === "mobileNewsDropdownOpened") {
        news.style = "background-color: white; color: rgb(255, 169, 56)";
        news.id = "mobileNewsDropdownClosed";
        document.getElementsByClassName("mobileNewsDropdown")[0].style = "display: none;";
    }
    
    if (subLinkId === "mobileSubLinkDropdownClosed") {
        subLink.style = "background-color: rgb(255, 169, 56); color: white";
        subLink.id = "mobileSubLinkDropdownOpened";
        document.getElementsByClassName("mobileSubLinkDropdown")[0].style = "display: block;";
    } 
    else if (subLinkId === "mobileSubLinkDropdownOpened") {
        subLink.style = "background-color: white; color: rgb(255, 169, 56)";
        subLink.id = "mobileSubLinkDropdownClosed";
        document.getElementsByClassName("mobileSubLinkDropdown")[0].style = "display: none;";
    }
}

function newsDropdown () {
    var news = document.getElementsByClassName("mobileNews")[0];
    var newsId = news.getAttribute("id");
    var subLink = document.getElementsByClassName("mobileSubLinkBox")[0];
    var subLinkId = subLink.getAttribute("id");

    if (subLinkId === "mobileSubLinkDropdownOpened") {
        subLink.style = "background-color: white; color: rgb(255, 169, 56)";
        subLink.id = "mobileSubLinkDropdownClosed";
        document.getElementsByClassName("mobileSubLinkDropdown")[0].style = "display: none;";
    }

    if (newsId === "mobileNewsDropdownClosed") {
        news.style = "background-color: rgb(255, 169, 56); color: white";
        news.id = "mobileNewsDropdownOpened";
        document.getElementsByClassName("mobileNewsDropdown")[0].style = "display: block;";
    } 
    else if (newsId === "mobileNewsDropdownOpened") {
        news.style = "background-color: white; color: rgb(255, 169, 56)";
        news.id = "mobileNewsDropdownClosed";
        document.getElementsByClassName("mobileNewsDropdown")[0].style = "display: none;";
    }
}
