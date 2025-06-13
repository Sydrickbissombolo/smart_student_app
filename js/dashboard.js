//✅ Script to Count Students
const students = JSON.parse(localStorage.getItem('students')) || [];
document.getElementById('totalCount').textContent = students.length;

async function loadMotivationalQuote() {
  const quoteEl = document.getElementById('quote');
  const authorEl = document.getElementById('author');

  try {
    const res = await fetch("https://api.quotable.io/random?tags=education|inspirational");
    const data = await res.json();
    quoteEl.textContent = `"${data.content}"`;
    authorEl.textContent = `– ${data.author}`;
  } catch (error) {
    console.error("Failed to fetch quote", error);
    quoteEl.textContent = `"Education is the most powerful weapon which you can use to change the world."`;
    authorEl.textContent = `– Nelson Mandela`;
  }
}

// Call the function on page load
loadMotivationalQuote();

