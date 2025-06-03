// form.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("studentForm");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const student = {
      id: Date.now(), // unique id
      fullName: form.fullName.value,
      gender: form.gender.value,
      age: form.age.value,
      phone: form.phone.value,
      course: form.course.value,
      date: form.date.value,
    };

    // Get existing students from localStorage
    let students = JSON.parse(localStorage.getItem("students")) || [];

    // Add new student to list
    students.push(student);

    // Save back to localStorage
    localStorage.setItem("students", JSON.stringify(students));

    // Reset form
    form.reset();

    // Show confirmation
    confirmation.classList.remove("hidden");
    setTimeout(() => confirmation.classList.add("hidden"), 3000);
  });
});
