document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("detailCard");
  const studentId = localStorage.getItem("viewStudentId");

  const students = JSON.parse(localStorage.getItem("students")) || [];
  const student = students.find(s => s.id == studentId);

  if (!student) {
    container.innerHTML = "<p>Student not found.</p>";
    return;
  }

  container.innerHTML = `
    <h3>${student.fullName}</h3>
    <p><strong>Gender:</strong> ${student.gender}</p>
    <p><strong>Age:</strong> ${student.age}</p>
    <p><strong>Phone:</strong> ${student.phone}</p>
    <p><strong>Address:</strong> ${student.address}</p>
    <p><strong>Religion Class:</strong> ${student.religionClass}</p>
    <p><strong>English Connect:</strong> ${student.englishConnectClass}</p>
    <p><strong>Father's Name:</strong> ${student.fatherName}</p>
    <p><strong>Mother's Name:</strong> ${student.motherName}</p>
    <p><strong>Emergency Phone:</strong> ${student.emergencyPhone}</p>
    <p><strong>Date:</strong> ${student.date}</p>
  `;
});
