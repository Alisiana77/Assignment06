/*eslint-env browser*/

//STEP 1
function step1() {
    "use strict";
    window.alert("I have been clicked.");
}
    

//STEP 2
var mybutton = window.document.getElementById("step2");
mybutton.onclick = function() {
    window.alert("I have been clicked.");
};


//STEP 3
function click() {
    "use strict";
    window.alert("I have been clicked.");
}
var button = window.document.getElementById("step3");
button.addEventListener("click", click
    );

//STEP 4
var btnn = window.document.getElementById("step4");
btnn.addEventListener("click", function() {
    "use strict";
    window.alert("I have been clicked.");
});

//STEP 5
//See practice.html

//STEP 6
var click = window.document.getElementById("redirect");
click.addEventListener("click", function() {
    "use strict";
    event.preventDefault();
    window.alert("You clicked a link to visit Google");
    
});

//STEP 7
var btn7 = window.document.getElementById("step7");
btn7.addEventListener("click", function() {
    "use strict";
    btn7.disabled = true;
    window.alert(window.document.getElementById("textbox").value);

});

//STEP 8
var btn8 = window.document.getElementById("step8");
btn8.addEventListener("click", function() {
    "use strict";
    window.open("newpage.html", "newpage", "width=300,height=300");
});

//STEP 9
var stbtn = window.document.getElementById("start");
var spbtn = window.document.getElementById("stop");
var id;
function display() {
    window.console.log("Learning JavaScript is fun!");

};
stbtn.addEventListener("click", function() {
    "use strict";
     id = window.setInterval(display, 2000);
});
spbtn.addEventListener("click", function() {
    "use strict";
    window.clearInterval(id);
});

//STEP 10
var btn10 = window.document.getElementById("step10");
btn10.addEventListener("click", function() {
    "use strict";
    let position = window.document.getElementById("items");
    window.alert(position.value);
});
