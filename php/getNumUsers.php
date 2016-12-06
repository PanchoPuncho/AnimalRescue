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

    $sql = "SELECT * FROM Webuser";
    $result = $conn->query($sql);

    echo "{ \"numUsers\":\"".$result->num_rows."\" }";

    $conn->close();
?>