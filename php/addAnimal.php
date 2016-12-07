<?php
    // Create connection
    $con =  mysqli_connect( 'aa1ec4bkeb1ur34.cn7hlcsjbshk.us-east-1.rds.amazonaws.com', 'franciscocuevas', 'Juan1985', 'ebdb', 3306 );
    
    // Check connection
    if ( mysqli_connect_errno() ) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

	$sql = "INSERT INTO Animal VALUES (\"".$_GET['id']."\", \"".$_GET['name']."\", \"".$_GET['writeUp']."\", \"".$_GET['species']."\", \"".$_GET['breed']."\", \"".$_GET['sex']."\", \"".$_GET['monthBorn']."\", \"".$_GET['yearBorn']."\", \"".$_GET['aSize']."\", \"".$_GET['monthFound']."\", \"".$_GET['yearFound']."\", \"".$_GET['fixed']."\", \"".$_GET['status']."\", \"".$_GET['rescuerID']."\", \"".$_GET['monthRescued']."\", \"".$_GET['yearRescued']."\", \"".$_GET['age']."\", \"".$_GET['years']."\", \"".$_GET['photos']."\")";

	if ( mysqli_query( $con, $sql ) === TRUE ) {
	    echo "{ \"message\":\"New record created successfully\" }";
	} else {
	    echo "{ \"message\":\"Error: ".$sql." ".mysqli_error( $con )."\" }";
	}

	mysqli_close( $con );
?>