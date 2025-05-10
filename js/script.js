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
    clickMenu.textContent = `${day} at ${time}`
    clickMenu.style.display = "block"
}