<?php
    $dbhost = "aa1lxtczcxw42lh.cjcihvs13gvz.us-west-2.rds.amazonaws.com";
    $dbuser = "franciscocuevas";
    $dbpass = "Juan1985";
    $dbname = "ebdb";
    $dbport = 3306;

    // Create connection
    echo "Attempting connection..."
    $conn = new mysqli_connect($dbhost, $dbuser, $dbpass, $dbname, $dbport);
    echo "Connected! :)"
    
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