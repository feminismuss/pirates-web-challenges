console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const li = document.createElement("li");
  toastContainer.append(li);
  li.textContent = "another toastmessage";
  li.classList.add("toast-container__message");
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", (event) => {
event.preventDefault();
toastContainer.innerHTML = "";
// Exercise: Clear the stack of toast messages
});
