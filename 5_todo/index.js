const ulView = document.querySelector(".todo-list");
const newToDoDisplay = document.getElementById("new-todo").innerHTML;

function addToList(content) {
  const ulElem = document.querySelector(".todo-list");
  const liElem = document.createElement("li");
  const divElem = document.createElement("div");
  divElem.setAttribute("class", "view");
  const inputElem1 = document.createElement("input");
  inputElem1.setAttribute("class", "toggle");
  inputElem1.setAttribute("type", "checkbox");
  inputElem1.addEventListener("click", () => {
    liElem.classList.toggle("completed");
    cntLi();
  });
  const lableElem = document.createElement("label");
  lableElem.innerHTML = content;
  const btn = document.createElement("button");
  btn.setAttribute("class", "destroy");
  btn.addEventListener("click", () => {
    liElem.remove();
    cntLi();
  });
  const inputElem2 = document.createElement("input");
  inputElem2.setAttribute("class", "edit");
  divElem.appendChild(inputElem1);
  divElem.appendChild(lableElem);
  divElem.appendChild(btn);
  liElem.appendChild(divElem);
  liElem.appendChild(inputElem2);
  ulElem.appendChild(liElem);
}

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    if (document.getElementById("new-todo").value !== "") {
      const content = document.getElementById("new-todo");
      addToList(content.value);
      content.value = "";
      cntLi();
    }
  }
});

const clearCompleted = document.querySelector(".clear-completed");
clearCompleted.addEventListener("click", () => {
  document.querySelectorAll(".completed").forEach((el) => {
    el.remove();
  });
  cntLi();
});

function cntLi() {
  const liNum = document.querySelectorAll("li").length;
  const liNumCom = document.querySelectorAll(".completed").length;

  document.getElementById("strongid").innerHTML = liNum - liNumCom;
}
