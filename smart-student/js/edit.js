document.addEventListener("DOMContentLoaded", () => {
  const fullName = document.getElementById("fullName");
  const gender = document.getElementById("gender");
  const age = document.getElementById("age");
  const phone = document.getElementById("phone");
  const course = document.getElementById("course");
  const form = document.getElementById("editForm");
  const message = document.getElementById("message");

  const studentId = localStorage.getItem("editStudentId");

  if (!studentId) {
    alert("No student selected.");
    window.location.href = "students.html";
    return;
  }

  let students = JSON.parse(localStorage.getItem("students")) || [];
  const student = students.find(s => s.id == studentId);

  if (!student) {
    alert("Student not found.");
    window.location.href = "students.html";
    return;
  }

  // Populate the form with existing data
  fullName.value = student.fullName;
  gender.value = student.gender;
  age.value = student.age;
  phone.value = student.phone;
  course.value = student.course;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Update student info
    student.fullName = fullName.value.trim();
    student.gender = gender.value;
    student.age = age.value.trim();
    student.phone = phone.value.trim();
    student.course = course.value.trim();

    // Save updated list back to localStorage
    const updatedStudents = students.map(s => s.id == studentId ? student : s);
    localStorage.setItem("students", JSON.stringify(updatedStudents));

    // Show success message
    message.classList.remove("hidden");

    // Redirect after delay
    setTimeout(() => {
      window.location.href = "students.html";
    }, 1500);
  });
});