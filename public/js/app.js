console.log("Client side javascript file has been loaded");

const weatherForm = document.querySelector("form");
const weatherInput = document.querySelector("input");
const successMessage = document.querySelector(".forecast");
const errorMessage = document.querySelector(".error");
weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const location = weatherInput.value;

  successMessage.textContent = "Loading...";
  errorMessage.textContent = "";

  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          errorMessage.textContent = "data.error";
        } else {
          successMessage.textContent = data.location;
          errorMessage.textContent = data.forecast + " degrees Fahrenheit";
        }
      });
    }
  );
});
