console.log("hello baby");

const nameInput = document.querySelector(".name");
const submitBtn = document.querySelector("#name-btn");
const nameLocation = document.querySelector(".name-value");

let nameValue = "";
nameInput.addEventListener("keyup", (e) => {
  nameValue = e.target.value;
});

const submitName = (e) => {
  if (!nameValue) {
    alert("Name should be provided");
    return;
  }
  if (nameValue.length < 5) {
    alert("Name should be at least 5 characters in length");
    return;
  }
  const h3 = document.createElement("h3");
  h3.textContent = "Your card number is -> "+nameValue;
  document.body.appendChild(h3);
};

submitBtn.addEventListener("click", submitName);
