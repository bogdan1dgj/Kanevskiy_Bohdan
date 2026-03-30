const input = document.getElementById("textInput");
const addButton = document.getElementById("btnAdd");
const sortButton = document.getElementById("btnSort");
const list = document.getElementById("itemsList");

addButton.addEventListener("click", () => {
    const value = input.value.trim();

    if (value === "") return;

    const item = document.createElement("li");
    item.textContent = value;

    item.addEventListener("click", () => {
        item.remove();
    });

    list.appendChild(item);
    input.value = "";
});

sortButton.addEventListener("click", () => {
    const elements = Array.from(list.children);

    elements.sort((a, b) =>
        a.textContent.localeCompare(b.textContent, 'uk')
    );

    list.innerHTML = "";
    elements.forEach(el => list.appendChild(el));
});
