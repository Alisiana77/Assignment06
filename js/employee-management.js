/*eslint-env browser*/
window.addEventListener("load", function() {


    let addClick = window.document.getElementById("addbtn");
    addClick.addEventListener("click", function () {
        addBtn(employees);
    });
    
    let tableContent = window.document.getElementById("contentlist");
    tableContent.addEventListener("click", function() {
    
        //window.console.log(event.target.nodeName);

        //employee = employees.splice
        if (event.target.nodeName === "BUTTON") {
            delName(employees, event);
            
        }
    });

    display(employees);
});

function display(employees) {
    "use strict";
    // window.alert("contentlist");
    let content = window.document.getElementById("contentlist");
    
    let contentHtml = "";
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
    




function addName(employees) {
    "use strict";
    let name = window.document.getElementById("name");
    let title = window.document.getElementById("title");
    let extension = window.document.getElementById("extension");
    name.value = "";
    title.value = "";
    extension.value = "";
    employees.push([name.value, title.value, extension.value]);

    

};

function delName(employees, event) {
    "use strict";
    let buttonId = event.target.id;
    let buttonNumber = Number(buttonId.substring(3,buttonId.length));
   
    employees.splice(buttonNumber-1, 1);
    display(employees); 
    
};
function dataCheck() {
    "use strict";
    let name = window.document.getElementById("nameAlert").value;
    let title = window.document.getElementById("titleAlert").value;
    let extension = window.document.getElementById("extenstionAlert").value;
    let addData = true;

    nameAlert.innerHTML = "";
    titleAlert.innerHTML = "";
    extenstionAlert.innerHTML = "";

    if (name === null) {
        addData = false;
        nameAlert.innerHTML = "Enter a name of employee you want to add.";
    }
    if (title === null) {
        addData = false;
        titleAlert.innerHTML = "Enter a title of an employee.";
    }
    if (extension === null) {
        addData = false;
        extenstionAlert.innerHTML = "Enter employee's extension.";
    }
    return addData;
};

function addBtn(employees) {
    "use strict";
    let addData = dataCheck();
    if (addData) {
        addName(employees);
        display(employees);

    }

};
