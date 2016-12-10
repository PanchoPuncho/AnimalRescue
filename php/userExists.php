<?php
    // Create connection
    $con =  mysqli_connect( 'aa1ec4bkeb1ur34.cn7hlcsjbshk.us-east-1.rds.amazonaws.com', 'franciscocuevas', 'Juan1985', 'ebdb', 3306 );
    
    // Check connection
    if ( mysqli_connect_errno() ) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    if ( $_GET['email'] == "null" || $_GET['email'] == "" ) {
        exit( "Invalid value for email" );
    } else {
        $email = "\"".$_GET['email']."\"";
    }

    $sql = "SELECT * FROM Webuser WHERE email=".$email;
    $result = mysqli_query( $con, $sql );

    echo "{ \"user\": \"".mysqli_fetch_array( $result )["id"]."\" }";

    mysqli_close( $con );
?>
