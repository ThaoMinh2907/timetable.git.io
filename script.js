const scheduleData = [
    {
        day: "Monday",
        schedule: [
            { time: 1, event: "Chào cờ" },
            { time: 2, event: "Anh Văn" },
            { time: 3, event: "Sinh Học" },
            { time: 4, event: "Lịch Sử" },
            { time: 5, event: "Vật Lý" },
            { time: 6, event: "" },
            { time: 7, event: "" },
            { time: 8, event: "Vật Lý" },
            { time: 9, event: "Toán" },
            { time: 10, event: "Ngữ Văn" },
        ],
    },
    {
        day: "Tuesday",
        schedule: [
            { time: 1, event: "Toán " },
            { time: 2, event: "Toán" },
            { time: 3, event: "TC Địa" },
            { time: 4, event: "Tin" },
            { time: 5, event: "Tin" },
            { time: 6, event: "" },
            { time: 7, event: "" },
            { time: 8, event: "Địa Lý" },
            { time: 9, event: "Vật Lý" },
            { time: 10, event: "Lịch Sử" },
        ],
    },
    {
        day: "Wednesday",
        schedule: [
            { time: 1, event: "Hoá Học" },
            { time: 2, event: "Vật Lý" },
            { time: 3, event: "TC Anh Văn" },
            { time: 4, event: "Lịch Sử" },
            { time: 5, event: "Sinh Học" },
            { time: 6, event: "" },
            { time: 7, event: "" },
            { time: 8, event: "Thể Dục " },
            { time: 9, event: "Ngữ Văn" },
            { time: 10, event: "Anh Văn" },
        ],
    },
    {
        day: "thursday",
        schedule: [
            { time: 1, event: "Địa Lý" },
            { time: 2, event: "GDCD" },
            { time: 3, event: "Ngữ Văn" },
            { time: 4, event: "Toán" },
            { time: 5, event: "TC Toán" },
            { time: 6, event: "" },
            { time: 7, event: "" },
            { time: 8, event: "Anh Văn" },
            { time: 9, event: "Lịch Sử" },
            { time: 10, event: "Địa Lý" },
        ],
    },
    {
        day: "friday",
        schedule: [
            { time: 1, event: "TC Sử" },
            { time: 2, event: "Công Nghệ" },
            { time: 3, event: "Anh Văn" },
            { time: 4, event: "Anh Văn" },
            { time: 5, event: "Toán" },
            { time: 6, event: "" },
            { time: 7, event: "" },
            { time: 8, event: "GD QP-AN" },
            { time: 9, event: "Thể Dục " },
            { time: 10, event: "Toán" },
        ],
    },
    {
        day: "saturday",
        schedule: [
            { time: 1, event: "Ngữ Văn" },
            { time: 2, event: "Ngữ Văn" },
            { time: 3, event: "Hoá Học" },
            { time: 4, event: "SHL" },
            { time: 5, event: "NGLL" },
            { time: 6, event: "" },
            { time: 7, event: "" },
            { time: 8, event: "" },
            { time: 9, event: "" },
            { time: 10, event: "" },
        ],
    },
];

const scheduleTable = document.getElementById("schedule");

for (let time = 1; time <= 10; time++) {
    const row = scheduleTable.insertRow();

    const timeCell = row.insertCell(); // Ô cho thời gian
    timeCell.textContent = time;

    scheduleData.forEach((day) => {
        const eventData = day.schedule.find((item) => item.time === time);
        const eventCell = row.insertCell(); // Ô cho sự kiện
        eventCell.textContent = eventData ? eventData.event : "";
    });
}
const { google } = require("googleapis");

// Xác thực với thông tin xác thực của bạn
const auth = new google.auth.GoogleAuth({
    // Đường dẫn đến tệp tin JSON hoặc thông tin khóa API
    keyFile:
        "/Users/minhthao/Downloads/client_secret_1092920664989-mku901deqpe28m9vl4lupjdl3i6ico7a.apps.googleusercontent.com.json",
    // Phạm vi cần truy cập (ví dụ: "https://www.googleapis.com/auth/spreadsheets.readonly")
    scopes: "scopes",
});

// Tạo một phiên làm việc của Google Sheets API
const sheets = google.sheets({ version: "v4", auth });

// Gọi API để lấy dữ liệu từ bảng tính
sheets.spreadsheets.values.get(
    {
        spreadsheetId: "1qcLBqIAltMVeusjr7NZnuYAJRVOXfOVNf94cwKKDYXc",
        range: "Sheet1!A1:C3", // Phạm vi dữ liệu cần lấy
    },
    (err, res) => {
        if (err) {
            console.error("Lỗi:", err);
            return;
        }

        const rows = res.data.values;
        if (rows.length) {
            console.log("Dữ liệu:");
            rows.forEach((row) => {
                console.log(row.join("\t"));
            });
        } else {
            console.log("Không có dữ liệu được tìm thấy.");
        }
    }
);

// // Khởi tạo đối tượng XMLHttpRequest
// var xhr = new XMLHttpRequest();

// // Xác định hành động khi yêu cầu hoàn thành
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//         if (xhr.status === 200) {
//           console.log(xhr)
//             var responseData = JSON.parse(xhr.responseText);
//             console.log(responseData);

//             // Xử lý dữ liệu tại đây, ví dụ hiển thị trên trang web
//             var dataContainer = document.getElementById('data-container');
//             dataContainer.textContent = JSON.stringify(responseData, null, 2);
//         } else {
//             console.error('Có lỗi xảy ra:', xhr.status, xhr.statusText);
//         }
//     }
// };

// // Gửi yêu cầu GET đến tệp PHP
// xhr.open('GET', 'connect.php', true);
// xhr.send();
