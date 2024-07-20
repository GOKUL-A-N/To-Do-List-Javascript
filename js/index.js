function handleSubmit() {
    const content = document.getElementById('inputs').value;
    onUpgrade(content)
    document.getElementById('inputs').value = ''
}
let myList = document.querySelector("#addcontent");
function onUpgrade(content) {
    const newContent = document.createElement("li"); 
    newp = document.createElement("p");
    newp.textContent = content; 
    newinput = document.createElement("input");
    newContent.appendChild(newinput);
    newContent.appendChild(newp);
    newContent.className="w-[100%] rounded-md h-[50px] bg-[#bcef4c] font-semibold flex items-center justify-start gap-3"
    newinput.className="ml-3 h-[20px] rounded-full outline-none w-[20px]";
    newp.className="w-[80%]"
    newinput.type="checkbox"
    var delButton = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.className = "mr-4 hover:animate-pulse"
    delButton.addEventListener("click", function() {
      myList.removeChild(newContent);
    });
    newContent.appendChild(delButton);

    myList.appendChild(newContent);
}

