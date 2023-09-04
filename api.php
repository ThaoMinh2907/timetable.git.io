<?php
require_once '/vendor/autoload.php';

$client = new Google_Client();
$client->setAuthConfig('path/to/service-account-key.json');
$client->addScope(Google_Service_Sheets::SPREADSHEETS_READONLY);

$service = new Google_Service_Sheets($client);
$spreadsheetId = 'YOUR_SPREADSHEET_ID';
$range = 'Sheet1!A1:C10'; // Thay thế bằng phạm vi dữ liệu bạn muốn lấy

$response = $service->spreadsheets_values->get($spreadsheetId, $range);
$values = $response->getValues();

if (empty($values)) {
    echo 'Không có dữ liệu được tìm thấy.';
} else {
    foreach ($values as $row) {
        // Xử lý dữ liệu từng hàng ở đây
        $col1 = $row[0];
        $col2 = $row[1];
        $col3 = $row[2];
        echo "Cột 1: $col1, Cột 2: $col2, Cột 3: $col3 <br>";
    }
}
?>