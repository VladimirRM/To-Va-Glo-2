const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const total = document.querySelector("#total");

btn.addEventListener("click", (e) => {
  if (input.value === "") return;

  createDeleteElements(input.value);
  input.value = "";
});
// create and delete todo
function createDeleteElements(value) {
  const li = document.createElement("li");
  const btn = document.createElement("button");

  li.className = "li";
  li.textContent = value;

  btn.className = "btn";
  btn.textContent = "add";
  li.appendChild(btn)
// remove todo
  btn.addEventListener('click',e =>{

    result.removeChild(li)
  })
  result.appendChild(li);
}
