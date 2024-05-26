let inputField = document.getElementById("inp");
let textField = document.querySelector(".text");
let button = document.querySelector("#button");
button.addEventListener("click", function () {
  if (inputField.value == "") {
    alert("Please enter Task");
  } else {
    let newElement = document.createElement("ul");
    newElement.innerHTML = `${inputField.value}<i class="fa-solid fa-trash"></i>`;
    textField.appendChild(newElement);
    inputField.value = "";
    newElement.querySelector("i").addEventListener("click", remove);
    function remove() {
      newElement.remove();
    }
  }
});
