const demoUser = {
  iin: "060629601924",
  ikt: "002163601",
  fio: "ИБРАГИМОВА ГУЛБОНУ САБИТКИЗИ",
  testType: "ЕНТ",
  testYear: "2023 (Основное)",
  language: "казахский",
  validUntil: "31.12.2023",
  subjects: [
    { name: "История Казахстана", score: 10 },
    { name: "Грамотность чтения", score: 13 },
    { name: "Математическая грамотность", score: 13 },
    { name: "Английский язык", score: 31 },
    { name: "Всемирная история", score: 36 }
  ],
  total: 103
};

// генерация годов
const yearSelect = document.getElementById("yearSelect");
const currentYear = new Date().getFullYear();

for (let year = currentYear; year >= 2013; year--) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  yearSelect.appendChild(option);
}

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const iinInput = document.querySelector('input[placeholder="ИИН"]').value;
  const iktInput = document.querySelector('input[placeholder="ИКТ"]').value;

  // ❌ если не найден
  if (iinInput !== demoUser.iin || iktInput !== demoUser.ikt) {
    alert("Сертификат не найден");

    document.getElementById("result").classList.add("hidden");
    document.getElementById("downloadPdf").classList.add("hidden");
    return;
  }

  // ✅ если найден
  document.getElementById("fio").textContent = demoUser.fio;
  document.getElementById("iin").textContent = demoUser.iin;
  document.getElementById("ikt").textContent = demoUser.ikt;
  document.getElementById("testType").textContent = demoUser.testType;
  document.getElementById("testYear").textContent = demoUser.testYear;
  document.getElementById("language").textContent = demoUser.language;
  document.getElementById("validUntil").textContent = demoUser.validUntil;

  const subjectsBody = document.getElementById("subjects");
  subjectsBody.innerHTML = "";

  demoUser.subjects.forEach((subject, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${subject.name}</td>
      <td>${subject.score}</td>
    `;
    subjectsBody.appendChild(row);
  });

  document.getElementById("total").textContent = demoUser.total;

  document.getElementById("result").classList.remove("hidden");
  document.getElementById("downloadPdf").classList.remove("hidden");
});
