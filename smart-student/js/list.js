document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#studentTable tbody");
  const searchInput = document.getElementById("searchInput");
  const noResults = document.getElementById("noResults");

  function getStudents() {
    return JSON.parse(localStorage.getItem("students")) || [];
  }

  function displayStudents(students) {
    tableBody.innerHTML = "";

    if (students.length === 0) {
      noResults.classList.remove("hidden");
      return;
    } else {
      noResults.classList.add("hidden");
    }

    students.forEach(student => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${student.fullName}</td>
        <td>${student.gender}</td>
        <td>${student.age}</td>
        <td>${student.phone}</td>
        <td>${student.course}</td>
        <td>${student.date}</td>
        <td>
          <button class="edit-btn" data-id="${student.id}">Edit</button>
          <button class="delete-btn" data-id="${student.id}">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });

    // ✅ Call this to make buttons work after rendering
    attachEventListeners();
  }

  function handleSearch() {
    const searchText = searchInput.value.toLowerCase();
    const students = getStudents();
    const filtered = students.filter(s =>
      s.fullName.toLowerCase().includes(searchText)
    );
    displayStudents(filtered);
  }

  function handleDelete(id) {
    let students = getStudents();
    students = students.filter(student => student.id != id);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents(students);
  }

  function handleEdit(id) {
    localStorage.setItem("editStudentId", id);
    window.location.href = "edit.html";
  }

  function attachEventListeners() {
    const editButtons = document.querySelectorAll(".edit-btn");
    const deleteButtons = document.querySelectorAll(".delete-btn");

    editButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        handleEdit(id);
      });
    });

    deleteButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        handleDelete(id);
      });
    });
  }

  // Initial load
  displayStudents(getStudents());

  // Live search
  searchInput.addEventListener("input", handleSearch);
});