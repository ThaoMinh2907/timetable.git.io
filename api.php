<?php
require_once __DIR__ . 'vendor/autoload.php'; // Đường dẫn đến tệp autoload.php của thư viện Google API Client

$client = new Google_Client();
$client->setAuthConfig('client_secret_1092920664989-mku901deqpe28m9vl4lupjdl3i6ico7a.apps.googleusercontent.com.json'); // Đường dẫn đến tệp JSON chứa thông tin xác thực OAuth 2.0
$client->setApplicationName('Timetable');
$client->setScopes(Google_Service_Sheets::SPREADSHEETS_READONLY);

$service = new Google_Service_Sheets($client);

$spreadsheetId = '1h0lHjmLb2fhdvTxSl8uUj88zPwX9rlynnG46PA-0aHQ'; // ID của Google Sheets
$range = 'data'; // Phạm vi dữ liệu cần lấy

$response = $service->spreadsheets_values->get($spreadsheetId, $range);
$values = $response->getValues();

if (empty($values)) {
    echo 'No data found.';
} else {
    // Trả về dữ liệu dưới dạng JSON
    header("Content-Type: application/json");
    echo json_encode($values);
}
?>
