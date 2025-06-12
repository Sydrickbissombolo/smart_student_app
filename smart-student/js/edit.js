document.addEventListener("DOMContentLoaded", () => {
  const fullName = document.getElementById("fullName");
  const gender = document.getElementById("gender");
  const age = document.getElementById("age");
  const phone = document.getElementById("phone");
  const address = document.getElementById("address");
  const religionClass = document.getElementById("religionClass");
  const englishConnectClass = document.getElementById("englishConnectClass");
  const fatherName = document.getElementById("fatherName");
  const motherName = document.getElementById("motherName");
  const emergencyPhone = document.getElementById("emergencyPhone");
  const date = document.getElementById("date");

  const form = document.getElementById("editForm");
  const deleteBtn = document.getElementById("deleteBtn");

  const studentId = localStorage.getItem("editStudentId");

  if (!studentId) {
    alert("No student selected.");
    window.location.href = "students.html";
    return;
  }

  let students = JSON.parse(localStorage.getItem("students")) || [];
  let student = students.find(s => s.id == studentId);

  if (!student) {
    alert("Student not found.");
    window.location.href = "students.html";
    return;
  }

  // Populate form fields
  fullName.value = student.fullName || "";
  gender.value = student.gender || "";
  age.value = student.age || "";
  phone.value = student.phone || "";
  address.value = student.address || "";
  religionClass.value = student.religionClass || "";
  englishConnectClass.value = student.englishConnectClass || "";
  fatherName.value = student.fatherName || "";
  motherName.value = student.motherName || "";
  emergencyPhone.value = student.emergencyPhone || "";
  date.value = student.date || "";

  // Save changes
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    student.fullName = fullName.value.trim();
    student.gender = gender.value;
    student.age = age.value.trim();
    student.phone = phone.value.trim();
    student.address = address.value.trim();
    student.religionClass = religionClass.value.trim();
    student.englishConnectClass = englishConnectClass.value.trim();
    student.fatherName = fatherName.value.trim();
    student.motherName = motherName.value.trim();
    student.emergencyPhone = emergencyPhone.value.trim();
    student.date = date.value;

    const updatedStudents = students.map(s => s.id == studentId ? student : s);
    localStorage.setItem("students", JSON.stringify(updatedStudents));

    alert("Student updated successfully!");
    window.location.href = "students.html";
  });

  // Delete student
  document.getElementById("deleteBtn").deleteBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this student?")) {
      const filteredStudents = students.filter(s => s.id != studentId);
      localStorage.setItem("students", JSON.stringify(filteredStudents));
      alert("Student deleted successfully!");
      window.location.href = "students.html";
    }
  });
});