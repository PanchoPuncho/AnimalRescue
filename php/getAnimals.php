<?php
    // Create connection
    $con = mysqli_connect( 'aa1ec4bkeb1ur34.cn7hlcsjbshk.us-east-1.rds.amazonaws.com', 'franciscocuevas', 'supersecretpassword', 'ebdb', 3306 );
    
    // Check connection
    if ( mysqli_connect_errno() ) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    $sql = "SELECT * FROM Animal ORDER BY name";
    $result = mysqli_query( $con, $sql) ;
    
    $numResults = mysqli_num_rows( $result );
    $counter = 0;

    echo "{ \"animals\":[";
    while ( $row = mysqli_fetch_array( $result ) ) {
        if ( ++$counter == $numResults ) {
            echo " {\"id\":\"".$row["id"]."\",\"name\":\"".$row["name"]."\",\"writeUp\":\"".$row["writeUp"]."\",\"species\":\"".$row["species"]."\",\"breed\":\"".$row["breed"]."\",\"size\":\"".$row["size"]."\",\"sex\":\"".$row["sex"]."\",\"fixed\":\"".$row["fixed"]."\",\"status\":\"".$row["status"]."\",\"rescuerID\":\"".$row["rescuerID"]."\",\"monthRescued\":\"".$row["monthRescued"]."\",\"yearRescued\":\"".$row["yearRescued"]."\",\"monthBorn\":\"".$row["monthBorn"]."\",\"yearBorn\":\"".$row["yearBorn"]."\",\"monthFound\":\"".$row["monthFound"]."\",\"yearFound\":\"".$row["yearFound"]."\",\"age\":\"".$row["age"]."\",\"years\":\"".$row["years"]."\",\"photos\":\"".$row["photos"]."\"} ";
        } else {
            echo " {\"id\":\"".$row["id"]."\",\"name\":\"".$row["name"]."\",\"writeUp\":\"".$row["writeUp"]."\",\"species\":\"".$row["species"]."\",\"breed\":\"".$row["breed"]."\",\"size\":\"".$row["size"]."\",\"sex\":\"".$row["sex"]."\",\"fixed\":\"".$row["fixed"]."\",\"status\":\"".$row["status"]."\",\"rescuerID\":\"".$row["rescuerID"]."\",\"monthRescued\":\"".$row["monthRescued"]."\",\"yearRescued\":\"".$row["yearRescued"]."\",\"monthBorn\":\"".$row["monthBorn"]."\",\"yearBorn\":\"".$row["yearBorn"]."\",\"monthFound\":\"".$row["monthFound"]."\",\"yearFound\":\"".$row["yearFound"]."\",\"age\":\"".$row["age"]."\",\"years\":\"".$row["years"]."\",\"photos\":\"".$row["photos"]."\"}, ";
        }
    }
    echo "] }";

    mysqli_close( $con );
?>