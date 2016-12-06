<?php
    $servername = "localhost";
    $username = "turninq2";
    $password = "Buttercup12!";
    $dbname = "ebdb";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM Webuser";
    $result = $conn->query($sql);

    echo "{ \"numUsers\":\"".$result->num_rows."\" }";

    $conn->close();
?>