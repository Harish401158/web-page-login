<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
 
    $username = $_POST['uname'];
    $password = $_POST['upswd'];

   
    if ($username === 'admin' && $password === 'password') {
        
        header('Location: profile.html');
        exit();
    } else {
        
        echo "Invalid username or password. Please try again.";
    }
}
?>
