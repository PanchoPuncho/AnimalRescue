<?php
    // Create connection
    $con =  mysqli_connect( 'aa1ec4bkeb1ur34.cn7hlcsjbshk.us-east-1.rds.amazonaws.com', 'franciscocuevas', 'Juan1985', 'ebdb', 3306 );
    
    // Check connection
    if ( mysqli_connect_errno() ) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

	$sql = "INSERT INTO Picture VALUES (\"".$_GET['id']."\", \"".$_GET['animalID']."\", \"".$_GET['photo']."\")";

	if ( mysqli_query( $con, $sql ) === TRUE ) {
	    echo "{ \"message\":\"New record created successfully\" }";
	} else {
	    echo "{ \"message\":\"Error: ".$sql." ".mysqli_error( $con )."\" }";
	}

	mysqli_close( $con );
?>