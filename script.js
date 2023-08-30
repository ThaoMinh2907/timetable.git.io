const scheduleData = [
  {
    "day": "Monday",
    "schedule": [
        { time: 1, event: "Chào cờ" },
        { time: 2, event: "Anh Văn" },
        { time: 3, event: "Sinh Học" },
        { time: 4, event: "Lịch Sử" },
        { time: 5, event: "Vật Lý" },
        { time: 6, event: "" },
        { time: 7, event: "" },
        { time: 8, event: "Vật Lý" },
        { time: 9, event: "Toán" },
        { time: 10, event: "Ngữ Văn" }
    ]
  },
  {
    "day": "Tuesday",
    "schedule": [
        { time: 1, event: "Toán " },
        { time: 2, event: "Toán" },
        { time: 3, event: "TC Địa" },
        { time: 4, event: "Tin" },
        { time: 5, event: "Tin" },
        { time: 6, event: "" },
        { time: 7, event: "" },
        { time: 8, event: "Địa Lý" },
        { time: 9, event: "Vật Lý" },
        { time: 10, event: "Lịch Sử" }
    ]
  }
  ,
  {
    "day": "Wednesday",
    "schedule": [
        { time: 1, event: "Hoá Học" },
        { time: 2, event: "Vật Lý" },
        { time: 3, event: "TC Anh Văn" },
        { time: 4, event: "Lịch Sử" },
        { time: 5, event: "Sinh Học" },
        { time: 6, event: "" },
        { time: 7, event: "" },
        { time: 8, event: "Thể Dục " },
        { time: 9, event: "Ngữ Văn" },
        { time: 10, event: "Anh Văn" }
    ]
  }
  ,
  {
    "day": "thursday",
    "schedule": [
        { time: 1, event: "Địa Lý" },
        { time: 2, event: "GDCD" },
        { time: 3, event: "Ngữ Văn" },
        { time: 4, event: "Toán" },
        { time: 5, event: "TC Toán" },
        { time: 6, event: "" },
        { time: 7, event: "" },
        { time: 8, event: "Anh Văn" },
        { time: 9, event: "Lịch Sử" },
        { time: 10, event: "Địa Lý" }
    ]
  }
  ,
  {
    "day": "friday",
    "schedule": [
        { time: 1, event: "TC Sử" },
        { time: 2, event: "Công Nghệ" },
        { time: 3, event: "Anh Văn" },
        { time: 4, event: "Anh Văn" },
        { time: 5, event: "Toán" },
        { time: 6, event: "" },
        { time: 7, event: "" },
        { time: 8, event: "GD QP-AN" },
        { time: 9, event: "Thể Dục " },
        { time: 10, event: "Toán" }
    ]
  }
  ,
  {
    "day": "saturday",
    "schedule": [
        { time: 1, event: "Ngữ Văn" },
        { time: 2, event: "Ngữ Văn" },
        { time: 3, event: "Hoá Học" },
        { time: 4, event: "SHL" },
        { time: 5, event: "NGLL" },
        { time: 6, event: "" },
        { time: 7, event: "" },
        { time: 8, event: "" },
        { time: 9, event: "" },
        { time: 10, event: "" }
    ]
  }
];

const scheduleTable = document.getElementById("schedule");

for (let time = 1; time <= 10; time++) {
  const row = scheduleTable.insertRow();

  const timeCell = row.insertCell(); // Ô cho thời gian
  timeCell.textContent = time;

  scheduleData.forEach(day => {
    const eventData = day.schedule.find(item => item.time === time);
    const eventCell = row.insertCell(); // Ô cho sự kiện
    eventCell.textContent = eventData ? eventData.event : '';
  });
}
