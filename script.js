console.log("test");

const message =
    "Your form has been sent successfully";

document
    .getElementById("Form")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        alert(message);
    });