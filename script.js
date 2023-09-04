const scheduleTable = document.getElementById("schedule");

function cleanTable() {
    while (scheduleTable.rows.length > 1) {
        scheduleTable.deleteRow(1);
    }
}

function findSchoolByCode(code) {
    var response = "";
    var value = mega_data.find((school) => school.school_code === code);
    if (mega_data.find((school) => school.school_code === code)) {
        response = {
            status: "success",
            schedule: value.data_schedule,
            max_period: value.max_period,
        };
    } else {
        response = { status: "fail", message: "" };
    }
    return response;
}

const button_get_data = document.getElementById("get_data");
const code = document.getElementById("code");

function fillTimetable(schedule_data, max_period) {
    for (var i = 0; i < max_period; i++) {
        var row = scheduleTable.insertRow();
        row.insertCell().textContent = i + 1;
        for (var j = 0; j < schedule_data.length; j++) {
            row.insertCell().textContent = schedule_data[j].schedule[i].event;
        }
    }
}

function Timetable() {
    cleanTable();
    if (findSchoolByCode(code.value.toUpperCase()).status == "success") {
        var schedule_data = findSchoolByCode(code.value.toUpperCase()).schedule;
        var max_period = findSchoolByCode(code.value.toUpperCase()).max_period;
        fillTimetable(schedule_data, max_period);
    }
}

button_get_data.onclick = function () {
    Timetable();
};

code.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        // Xử lý khi người dùng nhấn Enter ở đây
        Timetable();
    }
});
