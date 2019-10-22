<?php
    // Get secrets
    $secrets = parse_ini_file("../../secrets.ini");

    // Create connection
    $con = mysqli_connect( $secrets[MYSQL], $secrets[MYSQL_USER], $secrets[MYSQL_PASS], $secrets[MYSQL_DB], 3306);
    
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
