function addNewItem() {
  let listInput = document.getElementById("listInput").value;
  if (listInput === "") {
    window.alert("please add text!");
  } else {
    // <li></li>
    let liElm = document.createElement("li");
    let listInputTextNode = document.createTextNode(listInput);

    //<li>{{listInput}</li>
    liElm.appendChild(listInputTextNode);

    liElm.addEventListener("click", checkedElm);

    //<span></span>
    let deleteBtn = document.createElement("span");

    deleteBtn.addEventListener("click", deleteElm);

    //<span class="deleteBtn"></span>
    deleteBtn.className = "deleteBtn";

    // <span class="deleteBtn">X</span>
    deleteBtn.innerText = "X";

    //  <li>{{listInput} <span class="deleteBtn">X</span> </li>
    liElm.appendChild(deleteBtn);

    //<ul></ul>
    let todoListElm = document.getElementById("todoList");

    //<ul><li>{{listInput}</li>...</ul>
    todoListElm.appendChild(liElm);
  }
}

function deleteElm(e) {
  e.srcElement.parentElement.remove();
}

function checkedElm(e) {
  e.srcElement.classList.toggle("checked");
}
