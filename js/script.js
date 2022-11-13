const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const total = document.querySelector("#total");

btn.addEventListener("click", (e) => {
  console.log(input.value);
  if(input.value === '') return 

  input.value = "";
  createDeleteElements(input.value);
});

function createDeleteElements(value) {
const li = document.createElement('li')


}
