// SAVE CONTACT
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const file = document.getElementById("image").files[0];
            const reader = new FileReader();

            reader.onload = function () {
                const contact = {
                    name: document.getElementById("name").value,
                    email: document.getElementById("email").value,
                    phone: document.getElementById("phone").value,
                    department: document.getElementById("department").value,
                    position: document.getElementById("position").value,
                    image: reader.result // Base64 image
                };

                let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
                contacts.push(contact);

                localStorage.setItem("contacts", JSON.stringify(contacts));

                alert("Employee saved!");
                form.reset();
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        });
    }

    displayContacts();
});

// DISPLAY CONTACTS
function displayContacts() {
    const tableBody = document.querySelector("#contactsTable tbody");
    if (!tableBody) return;

    tableBody.innerHTML = "";

    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    contacts.forEach((contact, index) => {
        let row = `
            <tr>
                <td><img src="${contact.image}" class="profile"></td>
                <td>${contact.name}</td>
                <td>${contact.email}</td>
                <td>${contact.phone}</td>
                <td>${contact.department}</td>
                <td>
                    <button onclick="showDetails(${index})">Details</button>
                    <button onclick="editContact(${index})">Edit</button>
                    <button onclick="deleteContact(${index})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// SEARCH
function searchContacts() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#contactsTable tbody tr");

    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(input) ? "" : "none";
    });
}

// DETAILS
function showDetails(index) {
    let contacts = JSON.parse(localStorage.getItem("contacts"));
    let c = contacts[index];

    alert(
        `Name: ${c.name}\nEmail: ${c.email}\nPhone: ${c.phone}\nDepartment: ${c.department}\nPosition: ${c.position}`
    );
}

// EDIT
function editContact(index) {
    alert("Edit feature (advanced) can be added next!");
}

// DELETE
function deleteContact(index) {
    let confirmDelete = confirm("Are you sure you want to delete?");
    if (confirmDelete) {
        let contacts = JSON.parse(localStorage.getItem("contacts"));
        contacts.splice(index, 1);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        displayContacts();
    }
}