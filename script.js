const yearSelect = document.getElementById('year');
const monthSelect = document.getElementById('month');
const dateSelect = document.getElementById('date');

const currentYear = new Date().getFullYear();
for (let i = currentYear - 50; i <= currentYear + 50; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function updateDays() {
    const year = parseInt(yearSelect.value);
    const month = parseInt(monthSelect.value);

    const daysInMonth = getDaysInMonth(year, month);
    dateSelect.innerHTML = '';

    for (let i = 1; i <= daysInMonth; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        dateSelect.appendChild(option);
    }
}

yearSelect.addEventListener('change', updateDays);
monthSelect.addEventListener('change', updateDays);

yearSelect.value = currentYear;
monthSelect.value = new Date().getMonth();
updateDays();