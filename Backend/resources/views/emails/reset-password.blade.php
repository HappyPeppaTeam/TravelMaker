<!DOCTYPE html>
<html>
<head>
    <title>重置您的密碼</title>
</head>
<body>
    <p>點擊下面的連結以重置您的密碼：</p>
    <a href="{{ url('http://localhost:3000/resetpassword/' . $token) }}">重置密碼</a>
</body>
</html>
