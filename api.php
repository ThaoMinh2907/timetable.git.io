<?php
require_once __DIR__ . 'vendor/autoload.php'; // Đường dẫn đến tệp autoload.php của thư viện Google API Client

$client = new Google_Client();
$client->setAuthConfig('path/to/your/credentials.json'); // Đường dẫn đến tệp JSON chứa thông tin xác thực OAuth 2.0
$client->setApplicationName('Your Application Name');
$client->setScopes(Google_Service_Sheets::SPREADSHEETS_READONLY);

$service = new Google_Service_Sheets($client);

$spreadsheetId = 'your_spreadsheet_id'; // ID của Google Sheets
$range = 'Sheet1'; // Phạm vi dữ liệu cần lấy

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
