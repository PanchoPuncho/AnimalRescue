<?php
    // Create connection
    $con = mysqli_connect( 'aa1ec4bkeb1ur34.cn7hlcsjbshk.us-east-1.rds.amazonaws.com', 'franciscocuevas', 'supersecretpassword', 'ebdb', 3306 );
    
    // Check connection
    if ( mysqli_connect_errno() ) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    $sql = "SELECT * FROM Picture";
    $result = mysqli_query( $con, $sql );

    echo "{ \"numPics\":\"".mysqli_num_rows( $result )."\" }";

    mysqli_close( $con );
?>