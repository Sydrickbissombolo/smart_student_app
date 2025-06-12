document.addEventListener('DOMContentLoaded', () => {
  const studentTableBody = document.querySelector('#studentTable tbody');
  const searchInput = document.getElementById('searchInput');
  const noResults = document.getElementById('noResults');

  let students = JSON.parse(localStorage.getItem('students')) || [];

  // Render all students on load
  renderStudents(students);

  // Search functionality
  searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredStudents = students.filter(student =>
      student.fullName.toLowerCase().includes(searchText)
    );

    renderStudents(filteredStudents);
  });

  function renderStudents(data) {
    studentTableBody.innerHTML = '';

    if (data.length === 0) {
      noResults.classList.remove('hidden');
      return;
    } else {
      noResults.classList.add('hidden');
    }

    data.forEach((student, index) => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${student.fullName || ''}</td>
        <td>${student.gender || ''}</td>
        <td>${student.age || ''}</td>
        <td>${student.phone || ''}</td>
        <td>${student.address || ''}</td>
        <td>${student.religionClass || ''}</td>
        <td>${student.englishClass || ''}</td>
        <td>${student.fatherName || ''}</td>
        <td>${student.motherName || ''}</td>
        <td>${student.emergencyPhone || ''}</td>
        <td>
          <button onclick="viewStudent(${index})">View</button>
          <button onclick="editStudent(${index})">Edit</button>
        </td>
      `;

      studentTableBody.appendChild(row);
    });
  }

  // Redirect to detail.html with selected student index
  window.viewStudent = (index) => {
    localStorage.setItem('selectedStudentIndex', index);
    window.location.href = 'detail.html';
  };

  // Redirect to edit.html with selected student index
  window.editStudent = (index) => {
    localStorage.setItem('selectedStudentIndex', index);
    window.location.href = 'edit.html';
  };
});