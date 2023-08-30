const scheduleData = [
  { time: "8:00 AM", event: "Buổi học 1" },
  { time: "10:00 AM", event: "Buổi học 2" },
  { time: "2:00 PM", event: "Buổi học 3" }
  // Thêm dữ liệu thời khoá biểu tương tự ở đây
];

const scheduleContainer = document.getElementById("schedule");

scheduleData.forEach(item => {
  const eventDiv = document.createElement("div");
  eventDiv.classList.add("event");
  eventDiv.innerHTML = `<strong>${item.time}</strong> - ${item.event}`;
  scheduleContainer.appendChild(eventDiv);
});
