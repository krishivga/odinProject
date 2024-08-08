// Step 1: Variable references to tags
const list_of_items = document.querySelector("ul");
const user_text_input = document.querySelector("input");
const add_item_button = document.querySelector("button");
let item_name;

// Creating 3 elements and storign them in variables
const created_list_item = document.createElement("li");
const created_span = document.createElement("span");
const created_button = document.createElement("button");

created_list_item.appendChild(created_span);
created_list_item.appendChild(created_button);

// Event listner for add_item_button
add_item_button.addEventListener("click", function(){
    item_name = user_text_input.value;
    created_span.textContent = item_name;
    created_button.textContent = "Delete";
    console.log(item_name);
    user_text_input.value = "";
});

list_of_items.appendChild(created_list_item);

created_button.addEventListener("click",function() {
    list_of_items.removeChild(created_list_item);
})
user_text_input.focus();
