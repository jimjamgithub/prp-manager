const table = document.getElementById('schedule');
const days = Array.from(table.rows[0].cells).slice(1).map(cell => cell.textContent);

table.addEventListener('click', (event) => {
    const td = event.target.closest('td.time-column');
    if (!td) return;

    const cell = td;
    const row = cell.parentElement;
    const rowIndex = row.rowIndex;
    const colIndex = cell.cellIndex;

    const day = days[colIndex - 1]; // -1 because days doesn't include the time-cell
    const time = table.rows[rowIndex].cells[0].textContent;

    showClickMenu(day, time, event.pageX, event.pageY);
});
function showClickMenu(day, time, x, y) {
    const clickMenu = document.getElementById("click-menu");
    clickMenu.style.top = y + 10 + "px";
    clickMenu.style.left = x + 10 + "px";
    clickMenu.innerHTML = `<b>${day} at ${time}</b>`
    clickMenu.style.display = "block"
    const createEventStartButton = document.createElement("div");
    createEventStartButton.textContent = "Create Event Starting Here";
    createEventStartButton.classList.add("click-menu-button");
    createEventStartButton.onclick = function () {
        clickMenu.style.display = "none";
        // createEvent(day, time);
    };
    const createEventEndButton = document.createElement("div");
    createEventEndButton.textContent = "Create Event Ending Here";
    createEventEndButton.classList.add("click-menu-button");
    createEventEndButton.onclick = function () {
        clickMenu.style.display = "none";
        // createEvent(day, time);
    };
    clickMenu.appendChild(createEventStartButton);
    clickMenu.appendChild(createEventEndButton);
    // hide the menu if clicked outside
}
function createEventPopup(day, time, startOrEnd) {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    const titleInput = document.getElementById("event-title");
    const descriptionInput = document.getElementById("event-description");
    const startTimeInput = document.getElementById("event-start-time");
    const endTimeInput = document.getElementById("event-end-time");

    titleInput.value = "";
    descriptionInput.value = "";
    startTimeInput.value = time;
    endTimeInput.value = time;

    if (startOrEnd === "start") {
        endTimeInput.disabled = true;
        endTimeInput.value = "";
    } else {
        startTimeInput.disabled = true;
        startTimeInput.value = "";
    }
}