<?php
header('Content-Type: application/json');

function respond($ok, $message) {
    echo json_encode(['ok' => $ok, 'message' => $message]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Invalid request method.');
}

$fullName = trim($_POST['fullName'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$email = trim($_POST['email'] ?? '');
$apartmentType = trim($_POST['apartmentType'] ?? '');
$visitDate = trim($_POST['visitDate'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($fullName === '' || !preg_match('/^[6-9]\d{9}$/', $phone)) {
    respond(false, 'Invalid submission.');
}

$fullName = htmlspecialchars($fullName, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$apartmentType = htmlspecialchars($apartmentType, ENT_QUOTES, 'UTF-8');
$visitDate = htmlspecialchars($visitDate, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

$row = [
    date('Y-m-d H:i:s'),
    $fullName,
    $phone,
    $email,
    $apartmentType,
    $visitDate,
    $message,
    $_SERVER['REMOTE_ADDR'] ?? '',
];

$logFile = __DIR__ . '/leads.csv';
$isNew = !file_exists($logFile);

$fp = fopen($logFile, 'a');
if ($fp) {
    if ($isNew) {
        fputcsv($fp, ['Timestamp', 'Full Name', 'Phone', 'Email', 'Apartment Type', 'Visit Date', 'Message', 'IP']);
    }
    fputcsv($fp, $row);
    fclose($fp);
} else {
    respond(false, 'Could not save enquiry.');
}

$to = 'rivahstudio@gmail.com';
$subject = 'New Enquiry - The Nest';
$body = "Name: $fullName\nPhone: $phone\nEmail: $email\nApartment Type: $apartmentType\nPreferred Visit Date: $visitDate\nMessage: $message\nSubmitted: " . date('Y-m-d H:i:s');
$headers = 'From: no-reply@thenest.in';
@mail($to, $subject, $body, $headers);

respond(true, 'Enquiry logged.');
