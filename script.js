const scheduleData = [
  { time: 1, event: "Chào cờ" },
  { time: 2, event: "Anh Văn" },
  { time: 3, event: "Sinh Học" }
  // Thêm dữ liệu thời khoá biểu tương tự ở đây
];

const scheduleTable = document.getElementById("schedule");

scheduleData.forEach(item => {
    html +=`
        <tr>
            <th>`+item.time+`</th>
            <th>`+item.event+`</th>
        </tr>
    `
    scheduleTable.innerHTML += html
//   const row = scheduleTable.insertRow();
//   const timeCell = row.insertCell(0);
//   const eventCell = row.insertCell(1);

//   timeCell.textContent = item.time;
//   eventCell.textContent = item.event;
});
