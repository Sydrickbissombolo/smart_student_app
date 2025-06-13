document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const results = document.getElementById("results");
  const noResults = document.getElementById("noResults");

  const students = JSON.parse(localStorage.getItem("students")) || [];

  function displayResults(filtered) {
    results.innerHTML = "";

    if (filtered.length === 0) {
      noResults.classList.remove("hidden");
      return;
    } else {
      noResults.classList.add("hidden");
    }

    filtered.forEach(student => {
      const card = document.createElement("div");
      card.className = "student-card";
      card.innerHTML = `
        <h3>${student.fullName}</h3>
        <p><strong>Gender:</strong> ${student.gender}</p>
        <p><strong>Phone:</strong> ${student.phone}</p>
        <button data-id="${student.id}" class="view-btn">View Full Details</button>
      `;
      results.appendChild(card);
    });

    document.querySelectorAll(".view-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        localStorage.setItem("viewStudentId", id);
        window.location.href = "detail.html";
      });
    });
  }

  searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const filtered = students.filter(s =>
      s.fullName.toLowerCase().includes(searchText)
    );
    displayResults(filtered);
  });
});
