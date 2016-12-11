<?php
    // Create connection
    $con =  mysqli_connect( 'aa1ec4bkeb1ur34.cn7hlcsjbshk.us-east-1.rds.amazonaws.com', 'franciscocuevas', 'supersecretpassword', 'ebdb', 3306 );
    
    // Check connection
    if ( mysqli_connect_errno() ) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    if ( $_GET['id'] == "null" || $_GET['id'] == "" ) {
        //exit( "Invalid value for id" );
        $sql = "SELECT photo FROM Picture";
    } else {
        $id = "\"".$_GET['id']."\"";
        $sql = "SELECT photo FROM Picture WHERE animalID=".$id."";
    }

    $result = mysqli_query( $con, $sql );

    $numResults = mysqli_num_rows( $result );
    $counter = 0;

    echo "{ \"photos\":[";
    while ( $row = mysqli_fetch_array( $result ) ) {
        if ( ++$counter == $numResults ) {
            echo "{\"photo\":\"".$row["photo"]."\"} ";
        } else {
            echo " {\"photo\":\"".$row["photo"]."\"}, ";
        }
    }
    echo "] }";

    mysqli_close( $con );
?>