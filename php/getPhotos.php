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

    $sql = "SELECT photo FROM Picture WHERE animalID=".$_GET['id'];
    $result = $conn->query($sql);

    echo "{ \"photos\":[";
    if ($result->num_rows > 0) {
        // output data of each row
        for ($x = 0; $x < ($result->num_rows - 1); $x++) {
            $row = $result->fetch_assoc();
            echo " {\"photo\":\"".$row["photo"]."\"}, ";
        }
        $row = $result->fetch_assoc();
        echo "{\"photo\":\"".$row["photo"]."\"} ";
    }
    echo "] }";
    $conn->close();
?>