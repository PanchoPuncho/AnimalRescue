<?php
    // Get secrets
    $secrets = parse_ini_file("../../secrets.ini");

    // Create connection
    $con = mysqli_connect( $secrets[MYSQL], $secrets[MYSQL_USER], $secrets[MYSQL_PASS], $secrets[MYSQL_DB], 3306);

    // Check connection
    if ( mysqli_connect_errno() ) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    if ( $_GET['id'] == "null" || $_GET['id'] == "" ) {
        exit( "Invalid value for id" );
    } else {
        $id = "\"".$_GET['id']."\"";
    }
    if ( $_GET['animalID'] == "null" || $_GET['animalID'] == "" ) {
        exit( "Invalid value for animalID" );
    } else {
        $animalID = "\"".$_GET['animalID']."\"";
    }
    if ( $_GET['photo'] == "null" || $_GET['photo'] == "" ) { 
        exit( "Invalid value for photo" );
    } else {
        $photo = "\"".$_GET['photo']."\"";
    }

    $sql = "INSERT INTO Picture VALUES (".$id.", ".$animalID.", ".$photo.", (select now()))";

    if ( mysqli_query( $con, $sql ) === TRUE ) {
        echo "{ \"message\":\"New record created successfully\" }";
    } else {
        echo "{ \"message\":\"Error: ".$sql." ".mysqli_error( $con )."\" }";
    }

    mysqli_close( $con );
?>