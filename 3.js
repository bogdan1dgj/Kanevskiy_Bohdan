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

form.addEventListener("input", () => {
    const user = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        password: password.value
    };

    localStorage.setItem(KEY, JSON.stringify(user));
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Збережено!");
});

loginBtn.onclick = () => {
    const data = JSON.parse(localStorage.getItem(KEY));
    if (!data) return alert("Немає користувача");

    if (email.value === data.email && password.value === data.password) {
        profile.classList.remove("hidden");
        editName.value = data.name;
        editPhone.value = data.phone;
    } else {
        alert("Помилка входу");
    }
};

update.onclick = () => {
    const data = JSON.parse(localStorage.getItem(KEY));
    data.name = editName.value;
    data.phone = editPhone.value;

    localStorage.setItem(KEY, JSON.stringify(data));
    alert("Оновлено");
};

clearBtn.onclick = () => {
    localStorage.removeItem(KEY);
    location.reload();
};
