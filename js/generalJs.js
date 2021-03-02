"use strict";

function burgerMenu (a) {
    if (a === 0) {
        document.getElementsByClassName("openedBurgerMenu")[0].style = 
        "animation:burgerOpening 0.15s ease-in 0s 1 normal; animation-fill-mode: forwards;";
    }
    else {
        document.getElementsByClassName("openedBurgerMenu")[0].style = 
        "animation:burgerClosing 0.15s ease-in 0s 1 normal;";
    }

}

function expandSearch (a) {
    if (a === 0) {
        document.getElementsByClassName("mobileSearch")[0].style="display: none;";
        document.getElementsByClassName("searchIcon")[0].style="display: none;";
        document.getElementsByClassName("searchCloseIcon")[0].style="display: block;";
        document.getElementsByClassName("burgerMenu")[0].style="display: none;";
        document.getElementsByClassName("search")[0].style="display: block;";
    } 
    else {
        
        document.getElementsByClassName("search")[0].style="display: none;";
        document.getElementsByClassName("burgerMenu")[0].style="display: block;";
        document.getElementsByClassName("searchCloseIcon")[0].style="display: none;";
        document.getElementsByClassName("searchIcon")[0].style="display: block;";
        document.getElementsByClassName("mobileSearch")[0].style="display: block;";
    }
}

function footerLinks (a) {
    var currentElement;
    if (a === 0) {
        document.getElementsByClassName("footerLinksDropDown")[1].style="display: none;";
        currentElement = document.getElementsByClassName("footerLinksDropDown")[0].getAttribute("style");
        if (currentElement === "display: block;") {
            document.getElementsByClassName("footerLinksDropDown")[0].style = "display: none";
        } 
        else {
            document.getElementsByClassName("footerLinksDropDown")[0].style = "display: block";
        }
    } 
    else {
        document.getElementsByClassName("footerLinksDropDown")[0].style="display: none;";
        currentElement = document.getElementsByClassName("footerLinksDropDown")[1].getAttribute("style");
        if (currentElement === "display: block;") {
            document.getElementsByClassName("footerLinksDropDown")[1].style = "display: none";
        } 
        else {
            document.getElementsByClassName("footerLinksDropDown")[1].style = "display: block";
        }
    }
}