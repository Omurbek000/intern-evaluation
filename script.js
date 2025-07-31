const intern = {
  name: "Соня Ш.Н",
  experience: "5 месяцев",
  cuisine: "Японская кухня",
  photo: "images/intern.jpg",
  startDate: "2025-07-26",
  endDate: "",
  shifts: 6,
  hoursPerShift: 8, // условно усреднённое значение
  displayTime: "2 час 10 минут",
  effectiveness: 48,
  supervisor: "Омурбек А",
  location: "Шевченко — Холодный цех",
  status: "Активный",
  comment: "Отличная работа в витрине, уверенность в действиях. Понимает суть заданий, способная, проявляет готовность учиться и выполнять поручения. Рекомендуется в работе — набрат скорость и сокращение лишних телодвижений, с практикой будет ещё точнее. 👩‍🍳✨ Рабочее место должно быть чистым и организованным на каждом этапе работы. Это не только основа качественной кухни, но и проявление уважения к коллегам и гостям. Соня демонстрирует стремление к порядку, но важно закрепить привычку поддерживать чистоту постоянно — начиная с подготовки, в процессе и при завершении смены. Такая внимательность с опытом станет естественной частью рабочего подхода. 🧼🥢 ",
  skills: [
    { name: "Все заготовки были проверены — отработаны", score: 9 },
    { name: "Подготовка смены", score: 8 },
    { name: "Сдача смены", score: 8 },
    { name: "Чистота смены в течение дня", score: 8 },
    
  ],
  rating: 9.0
};


function renderStars(rating) {
  const starsTotal = 5;
  const fullStars = Math.round(rating / 12 * starsTotal);
  return "★".repeat(fullStars) + "☆".repeat(starsTotal - fullStars);
}

function renderEfficiency(percent) {
  const color = percent >= 80 ? "limegreen" :
                percent >= 50 ? "orange" : "crimson";
  return `
    <div style="margin-top: 5px;">
      <div class="glow-text">Эффективность: ${percent}%</div>
      <div class="progress-bar">
        <div class="progress" style="width: ${percent}%; background-color: ${color};"></div>
      </div>
    </div>
  `;
}

const card = document.createElement("div");
card.className = "intern-card";
card.innerHTML = `
  <center><img src="${intern.photo}" alt="Фото стажера"></center>
  <div class="intern-info glow-text">
    <strong>${intern.name}</strong><br>
    Статус: ${intern.status}<br>
    Опыт: ${intern.experience}<br>
    Кухня: ${intern.cuisine}<br><br>

    <u>Стажировка:</u><br>
    Начало: ${intern.startDate}<br>
    Окончание: ${intern.endDate}<br>
    Точка: ${intern.location}<br>
    Куратор: ${intern.supervisor}<br><br>

    <u>Навыки:</u>
    ${intern.skills.map(skill => `<div class="skill">${skill.name} — ${skill.score}/12</div>`).join("")}

    <br><u>Оценка:</u> ${intern.rating}/12<br>
    <div class="stars">${renderStars(intern.rating)}</div>
    ${renderEfficiency(intern.effectiveness)}

    <br><u>Смен отработано:</u> ${intern.shifts}<br>
    <u>Часы за смену:</u> ${intern.hoursPerShift}<br>
    <u>Общее рабочее время:</u> ${intern.shifts * intern.hoursPerShift} часов<br><br>

    <u>⏱️ Витрина собрана за:</u> ${intern.displayTime}<br><br>

    <u>💬 Комментарий:</u><br>
    <i>${intern.comment}</i>
  </div>
`;

document.getElementById("internContainer").appendChild(card);
