/*eslint-env browser*/
window.addEventListener("load", function() {

let content = window.document.getElementById("contentlist");
let contentHtml = "";


    let tableContent = window.document.getElementById("contentlist");
    tableContent.addEventListener("click", function() {
    
        window.console.log(event.target.nodeName);

        //employee = employees.splice
        if (event.target.nodeName === "BUTTON") {
            delName(employees, event);
            
        }
    });

});

function display(employees) {
    "use strict";
    let data;
    let count = 0;
    for (data of employees) {
        let id ="";
        count++;
        // id = "btn" + String(count);
        contentHtml = contentHtml + "<tr><td>" + data[0] + "</td>";
        contentHtml = contentHtml + "<td>" + data[1] + "</td>";
        contentHtml = contentHtml + "<td>" + data[2] + "</td>";
        contentHtml = contentHtml + "<td>" + "<button id='btn" + String(count) + "'>Delete</button>" + "</td></tr>";
                 
        
    }
    content.innerHTML = contentHtml;

};

let employees = [
    ["Zak","Manager", "10"],
    ["Sarah","Marketing", "11"],
    ["Paul","Accounting", "12"],
    ["Kathy","HR", "13"],
    ["Tim","IT", "14"],
];
    
display(employees);



function addName(employees) {
    "use strict";
    $("name").value = "";
    $("title").value = "";
    $("extension").value = "";
    employees.push([$("name").value, $("title").value, $(extension).value]);

    

};

function delName(employees, event) {
    "use strict";
    let buttonId = event.target.id;
    let buttonNumber = Number(buttonId.substring(3,buttonId.length));
    window.console.log(buttonNumber);
    employees.splice(buttonNumber,1);
    display(employees);
    
    
};


