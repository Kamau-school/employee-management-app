// Function for Edit Alert
function editAlert() {
    alert("Edit mode activated! You can now modify employee details.");
}

// Function for Delete Confirmation
function confirmDelete() {
    const response = confirm("Are you sure you want to delete?");
    if (response) {
        alert("Employee record deleted successfully.");
    }
}

// Function for Details View
function viewDetails(name, email, phone, dept, position) {
    const message = "--- Employee Profile ---\n" +
                    "Full Name: " + name + "\n" +
                    "Email: " + email + "\n" +
                    "Phone: " + phone + "\n" +
                    "Department: " + dept;
    
    alert(message);
}

// Function to handle image preview
const imageInput = document.getElementById('employeeImage');

if (imageInput) {
    imageInput.addEventListener('change', function() {
        const file = this.files;
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {                
                console.log("Image selected and ready for upload");
            }
            reader.readAsDataURL(file);
        }
    });
}

// Your existing Submit logic
document.getElementById('employeeForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Employee Registered Successfully!");    
});