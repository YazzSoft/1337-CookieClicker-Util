/*
1337 Cookie Clicker Utility v0.1
author: 1337 Cheats
description: Cookie Clicker utility mod made by 1337 Cheats!
*/

function autoclicker(cps, clickItem) {
    var clickInterval = setInterval(function() {var item = document.getElementById(clickItem);item.click();}, cps / 1000);
  document.addEventListener("keydown", function(event) {
    if (event.keyCode === 113) {
        clearInterval(clickInterval);
    }
});
}

function cookieAdder(amnt) {
    Game.Earn(amnt);
}

// Create the wrapper element
var wrapper = document.createElement("div");
wrapper.style.position = "fixed"; // or "absolute"
wrapper.style.top = "0";
wrapper.style.left = "0";
wrapper.style.zIndex = "9999";
// Create the h3 element
var heading = document.createElement("h3");
heading.textContent = "1337 Cookie Clicker Utility Mod v0.0.1";

// Create the close button element
var closeButton = document.createElement("button");
closeButton.textContent = "X";

// Add event listener to the close button
closeButton.addEventListener("click", function() {
    document.body.removeChild(wrapper);
});

// Create the autoclicker button
var autoclickerButton = document.createElement("button");
autoclickerButton.textContent = "Autoclicker";
autoclickerButton.addEventListener("click", function() {
    autoclicker(100, "bigCookie");

});

// Create the cookieAdder button
var cookieAdderButton = document.createElement("button");
cookieAdderButton.textContent = "Cookie Adder";
cookieAdderButton.addEventListener("click", function() {
    cookieAdder(100000);

});


// Append the h3, close button, autoclicker button, cookieAdder button, and buildingBuy button to the wrapper
wrapper.appendChild(heading);
wrapper.appendChild(closeButton);
wrapper.appendChild(autoclickerButton);
wrapper.appendChild(cookieAdderButton);

// Append the wrapper to the document body
document.body.appendChild(wrapper);
