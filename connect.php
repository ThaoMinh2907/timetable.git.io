<?php
$pgHost = "192.168.0.235";
$pgUsername = "billing_user";
$pgPassword = "k2R373jcY&qw";
$pgDatabase = "BILLING_ETON";

$pgConnection = new PDO("pgsql:host=$pgHost;dbname=$pgDatabase", $pgUsername, $pgPassword);
$pgQuery = "SELECT * from wms_transaction_data limit 10";
$pgResult = $pgConnection->query($pgQuery);

$data = array();

while ($row = $pgResult->fetch(PDO::FETCH_ASSOC)) {
    $data[] = $row;
}

// Trả về dữ liệu dưới dạng JSON
header("Content-Type: application/json");
echo json_encode($data);
?>
