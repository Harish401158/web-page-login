<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $name = $_POST['name'];
    $age = $_POST['age'];
    $dob = $_POST['dob'];
    $contact = $_POST['contact'];
    $email = $_POST['email'];
    $website = $_POST['website'];

  
    echo "<h1>Submitted Data:</h1>";
    echo "<p>Name: $name</p>";
    echo "<p>Age: $age</p>";
    echo "<p>Date of Birth: $dob</p>";
    echo "<p>Contact Number: $contact</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Website: $website</p>";
}
?>
