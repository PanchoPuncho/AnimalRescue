<?php
    // Create connection
    $con =  mysqli_connect( 'aa1ec4bkeb1ur34.cn7hlcsjbshk.us-east-1.rds.amazonaws.com', 'franciscocuevas', 'supersecretpassword', 'ebdb', 3306 );

    // Check connection
    if ( mysqli_connect_errno() ) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    if ( $_GET['id'] == "null" || $_GET['id'] == "" ) {
        exit( "Invalid value for id" );
    } else {
        $id = "\"".$_GET['id']."\"";
    }
    if ( $_GET['fullName'] == "null" || $_GET['fullName'] == "" ) {
        exit( "Invalid value for fullName" );
    } else {
        $fullName = "\"".$_GET['fullName']."\"";
    }
    if ( $_GET['phone'] == "null" || $_GET['phone'] == "" ) { 
        exit( "Invalid value for phone" );
    } else {
        $phone = "\"".$_GET['phone']."\"";
    }
    if ( $_GET['email'] == "null" || $_GET['email'] == "" ) { 
        exit( "Invalid value for email" );
    } else {
        $email = "\"".$_GET['email']."\"";
    }
    if ( $_GET['addr1'] == "null" || $_GET['addr1'] == "" ) { 
        exit( "Invalid value for addr1" );
    } else {
        $addr1 = "\"".$_GET['addr1']."\"";
    }
    if ( $_GET['addr2'] == "null" || $_GET['addr2'] == "" ) { 
        $addr2 = "\"\"";
    } else {
        $addr2 = "\"".$_GET['addr2']."\"";
    }
    if ( $_GET['city'] == "null" || $_GET['city'] == "" ) { 
        exit( "Invalid value for city" );
    } else {
        $city = "\"".$_GET['city']."\"";
    }
    if ( $_GET['state'] == "null" || $_GET['state'] == "" ) { 
        exit( "Invalid value for state" );
    } else {
        $state = "\"".$_GET['state']."\"";
    }
    if ( $_GET['zip'] == "null" || $_GET['zip'] == "" ) { 
        exit( "Invalid value for zip" );
    } else {
        $zip = "\"".$_GET['zip']."\"";
    }

    $sql = "INSERT INTO Webuser VALUES (".$id.", ".$fullName.", ".$phone.", ".$email.", ".$addr1.", ".$addr2.", ".$city.", ".$state.", ".$zip.", (select now()))";

    if ( mysqli_query( $con, $sql ) === TRUE ) {
        echo "{ \"message\":\"New record created successfully\" }";
    } else {
        echo "{ \"message\":\"Error: ".$sql." ".mysqli_error( $con )."\" }";
    }

    mysqli_close( $con );
?>
