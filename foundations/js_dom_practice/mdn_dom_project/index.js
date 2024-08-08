// Step 1: Variable references to tags
const list_of_items = document.querySelector("ul");
const user_text_input = document.querySelector("input");
const add_item_button = document.querySelector("button");
let item_name;

// Event listner for add_item_button
add_item_button.addEventListener("click", function(){
    item_name = document.getElementById("item").value;
    console.log(item_name);
    document.getElementById("item").value = "";
});

// Creating 3 elements and storign them in variables
const created_list_item = document.createElement("li");
const created_span = document.createElement("span");
const created_button = document.createElement("button");

created_list_item.appendChild(created_span);
created_list_item.appendChild(created_button);