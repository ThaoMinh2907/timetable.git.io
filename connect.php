<?php
$servername = "185.27.134.10";  // Thay đổi tên máy chủ nếu cần
$username = "if0_34931580";     // Thay đổi tên đăng nhập vào cơ sở dữ liệu
$password = "thaonguyen.zxc";     // Thay đổi mật khẩu đăng nhập vào cơ sở dữ liệu
$dbname = "if0_34931580_shopdb";       // Thay đổi tên cơ sở dữ liệu

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Thiết lập chế độ hiển thị lỗi nếu có lỗi xảy ra
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Kết nối thành công!";
} catch(PDOException $e) {
    echo "Kết nối thất bại: " . $e->getMessage();
}
?>
