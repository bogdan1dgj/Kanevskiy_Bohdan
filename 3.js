const form = document.getElementById("form");
const loginBtn = document.getElementById("login");
const clearBtn = document.getElementById("clear");
const profile = document.getElementById("profile");

const editName = document.getElementById("editName");
const editPhone = document.getElementById("editPhone");

const KEY = "user";

document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem(KEY));
  if (!data) return;

  name.value = data.name;
  email.value = data.email;
  phone.value = data.phone;
  password.value = data.password;
});

