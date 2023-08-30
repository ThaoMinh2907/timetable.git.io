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
  }
  // Thêm dữ liệu thời khoá biểu tương tự ở đây
];

const scheduleTable = document.getElementById("schedule");

scheduleData.forEach(item => {
    // var html =''
    item.schedule.forEach(element => {
        // html =`
    //             <tr>
    //                 <th>`+element.time+`</th>
    //                 <th>`+element.event+`</th>
    //             </tr>
    //         `
    //     scheduleTable.innerHTML += html
        const row = scheduleTable.insertRow();
        const timeCell = row.insertCell(0);
        const eventCell = row.insertCell(1);

        timeCell.textContent = element.time;
        eventCell.textContent = element.event;
    })
    
  
});
