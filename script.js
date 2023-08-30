const scheduleData = [
  { time: 1, event: "Chào cờ" },
  { time: 2, event: "Buổi học 2" },
  { time: 3, event: "Buổi học 3" }
  // Thêm dữ liệu thời khoá biểu tương tự ở đây
];

const scheduleTable = document.getElementById("schedule");

scheduleData.forEach(item => {
  const row = scheduleTable.insertRow();
  const timeCell = row.insertCell(0);
  const eventCell = row.insertCell(1);

  timeCell.textContent = item.time;
  eventCell.textContent = item.event;
});
