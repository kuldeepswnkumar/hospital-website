function showSidebar() {
  const sidebar = document.querySelector(".slider");
  sidebar.style.display = "block";
}

function closeSidebar() {
  const xbar = document.querySelector(".slider");
  xbar.style.display = "none";
}

const form = document.getElementById("form");
const myDate = document.getElementById("date");
const myTime = document.getElementById("time");
const myName = document.getElementById("name");
const myMobile = document.getElementById("mobile");
const myEmail = document.getElementById("email");
const errors = document.getElementById("error");

form.addEvenListener("submit", (e) => {
  e.preventDefault();
  const email_check =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (myDate.value === "") {
    error.innerHTML = "required";
  }
  if (myTime.value === "") {
    error.innerHTML = "required";
  }

  if (myName.value === "" || myName.value == null) {
    errors.innerHTML = "required";
  }
  if (myMobile.value === "" || !myMobile.value.length <= 10) {
    errors.innerHTML = "required";
  }

  if (!myEmail.value.match(email_check)) {
    errors.innerHTML = "required";
  }
  window.location = "pyment.html";
});
