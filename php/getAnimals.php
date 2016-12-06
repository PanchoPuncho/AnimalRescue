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
    //$conn = new mysqli($servername, $username, $password, $dbname);
    
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "select * from Animal order by name";
    $result = $conn->query($sql);
    
    echo "{ \"animals\":[";
    if ($result->num_rows > 0) {
        // output data of each row
        for ($x = 0; $x < ($result->num_rows - 1); $x++) {
            $row = $result->fetch_assoc();
            echo " {\"id\":\"".$row["id"]."\",\"name\":\"".$row["name"]."\",\"writeUp\":\"".$row["writeUp"]."\",\"species\":\"".$row["species"]."\",\"breed\":\"".$row["breed"]."\",\"aSize\":\"".$row["aSize"]."\",\"sex\":\"".$row["sex"]."\",\"fixed\":\"".$row["fixed"]."\",\"status\":\"".$row["status"]."\",\"rescuerID\":\"".$row["rescuerID"]."\",\"monthRescued\":\"".$row["monthRescued"]."\",\"yearRescued\":\"".$row["yearRescued"]."\",\"monthBorn\":\"".$row["monthBorn"]."\",\"yearBorn\":\"".$row["yearBorn"]."\",\"monthFound\":\"".$row["monthFound"]."\",\"yearFound\":\"".$row["yearFound"]."\",\"age\":\"".$row["age"]."\",\"years\":\"".$row["years"]."\",\"photos\":\"".$row["photos"]."\"}, ";
        }
        $row = $result->fetch_assoc();
        echo " {\"id\":\"".$row["id"]."\",\"name\":\"".$row["name"]."\",\"writeUp\":\"".$row["writeUp"]."\",\"species\":\"".$row["species"]."\",\"breed\":\"".$row["breed"]."\",\"aSize\":\"".$row["aSize"]."\",\"sex\":\"".$row["sex"]."\",\"fixed\":\"".$row["fixed"]."\",\"status\":\"".$row["status"]."\",\"rescuerID\":\"".$row["rescuerID"]."\",\"monthRescued\":\"".$row["monthRescued"]."\",\"yearRescued\":\"".$row["yearRescued"]."\",\"monthBorn\":\"".$row["monthBorn"]."\",\"yearBorn\":\"".$row["yearBorn"]."\",\"monthFound\":\"".$row["monthFound"]."\",\"yearFound\":\"".$row["yearFound"]."\",\"age\":\"".$row["age"]."\",\"years\":\"".$row["years"]."\",\"photos\":\"".$row["photos"]."\"} ";
    }
    echo "] }";

    $conn->close();
?>