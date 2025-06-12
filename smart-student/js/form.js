
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  document.getElementById('registerForm').addEventListener("submit", (e) => {
    e.preventDefault();

    const student = {
      id: Date.now(),
      fullName: document.getElementById("fullName").value.trim(),
      gender: document.getElementById("gender").value,
      age: document.getElementById("age").value,
      phone: document.getElementById("phone").value.trim(),
      address: document.getElementById("address").value.trim(),
      religionClass: document.getElementById("religionClass").value.trim(),
      englishClass: document.getElementById("englishClass").value.trim(),
      fatherName: document.getElementById("fatherName").value.trim(),
      motherName: document.getElementById("motherName").value.trim(),
      emergencyPhone: document.getElementById("emergencyPhone").value.trim(),
      date: new Date().toLocaleDateString()
    };

    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    alert("Student registered successfully!");
    form.reset();
  });
});


// Fetch and set a random avatar
async function loadRandomAvatar() {
  try {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const avatarUrl = data.results[0].picture.large;
    document.getElementById('studentAvatar').src = avatarUrl;
    localStorage.setItem('currentAvatar', avatarUrl); // Save with student
  } catch (error) {
    console.error("Failed to load avatar", error);
  }
}

// Call on page load
window.addEventListener('DOMContentLoaded', loadRandomAvatar);

// When saving student, include avatar URL
function handleFormSubmit(event) {
  event.preventDefault();

  const avatar = localStorage.getItem('currentAvatar') || '';

  const student = {
    fullName: document.getElementById('fullName').value,
    gender: document.getElementById('gender').value,
    age: document.getElementById('age').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value,
    religionClass: document.getElementById('religionClass').value,
    englishClass: document.getElementById('englishClass').value,
    fatherName: document.getElementById('fatherName').value,
    motherName: document.getElementById('motherName').value,
    emergencyPhone: document.getElementById('emergencyPhone').value,
    avatar
  };

  // Save to localStorage and refresh form
}
