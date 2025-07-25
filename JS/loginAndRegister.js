// This Task Made By Mo.Sayed

let swapItems = document.querySelectorAll(".swap");

for (let item of swapItems) {
  item.addEventListener("click", function () {
    document.getElementById("loginBox").classList.toggle("d-none");
    document.getElementById("registerBox").classList.toggle("d-none");
  });
}

let nameInput = document.getElementById("regName");
if (nameInput) {
  nameInput.addEventListener("blur", () => {
    localStorage.setItem(
      "User Name",
      nameInput.value.trim().split(" ").at(0) || ""
    );

    //for testing
    console.log("User name saved:", localStorage.getItem("User Name"));
  });
}

let logBtn = document.querySelector("#logBtn");

logBtn.addEventListener("click", function (e) {
  e.preventDefault();
  location.href = "../index.html";
});

let regBtn = document.querySelector("#regBtn");
regBtn.addEventListener("click", function () {
  document.getElementById("loginBox").classList.toggle("d-none");
  document.getElementById("registerBox").classList.toggle("d-none");
});
// اخيرا , الحمد لله
