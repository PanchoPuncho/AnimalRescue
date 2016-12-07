<?php
    // Create connection
    $con =  mysqli_connect( 'aa1ec4bkeb1ur34.cn7hlcsjbshk.us-east-1.rds.amazonaws.com', 'franciscocuevas', 'Juan1985', 'ebdb', 3306 );
    
    // Check connection
    if ( mysqli_connect_errno() ) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    if ( $_GET['id'] == "null" || $_GET['id'] == "" ) {
	    exit( "Invalid value for id" );
	} else {
	    $id = "\"".$_GET['id']."\"";
	}
	if ( $_GET['name'] == "null" || $_GET['name'] == "" ) {
	    exit( "Invalid value for name" );
	} else {
	    $name = "\"".$_GET['name']."\"";
	}
	if ( $_GET['writeUp'] == "null" || $_GET['writeUp'] == "" ) {
	    exit( "Invalid value for writeUp" );
	} else {
	    $writeUp = "\"".$_GET['writeUp']."\"";
	}
	if ( $_GET['species'] == "null" || $_GET['species'] == "" ) {
	    exit( "Invalid value for species" );
	} else {
	    $species = "\"".$_GET['species']."\"";
	}
	if ( $_GET['breed'] == "null" || $_GET['breed'] == "" ) {
	    exit( "Invalid value for breed" );
	} else {
	    $breed = "\"".$_GET['breed']."\"";
	}
	if ( $_GET['sex'] == "null" || $_GET['sex'] == "" ) {
	    exit( "Invalid value for sex" );
	} else {
	    $sex = "\"".$_GET['sex']."\"";
	}
	if ( $_GET['monthBorn'] == "null" || $_GET['monthBorn'] == "" ) {
	    exit( "Invalid value for monthBorn" );
	} else {
	    $monthBorn = "\"".$_GET['monthBorn']."\"";
	}
	if ( $_GET['yearBorn'] == "null" || $_GET['yearBorn'] == "" ) {
	    exit( "Invalid value for yearBorn" );
	} else {
	    $yearBorn = "\"".$_GET['yearBorn']."\"";
	}
	if ( $_GET['aSize'] == "null" || $_GET['aSize'] == "" ) {
	    exit( "Invalid value for aSize" );
	} else {
	    $aSize = "\"".$_GET['aSize']."\"";
	}
	if ( $_GET['monthFound'] == "null" || $_GET['monthFound'] == "" ) {
	    exit ( "Invalid value for monthFound" );
	} else {
	    $monthFound = "\"".$_GET['monthFound']."\"";
	}
	if ( $_GET['yearFound'] == "null" || $_GET['yearFound'] == "" ) {
	    exit ( "Invalid value for yearFound" );
	} else {
	    $yearFound = "\"".$_GET['yearFound']."\"";
	}
	if ( $_GET['fixed'] == "null" || $_GET['fixed'] == "" ) {
	    exit ( "Invalid value for fixed" );
	} else {
	    $fixed = "\"".$_GET['fixed']."\"";
	}
	if ( $_GET['status'] == "null" || $_GET['status'] == "" ) {
	    exit ( "Invalid value for status" );
	} else {
	    $status = "\"".$_GET['status']."\"";
	}
	if ( $_GET['rescuerID'] == "null" ) {
	    $rescuerID = "null";
	} else {
	    $rescuerID = "\"".$_GET['rescuerID']."\"";
	}
	if ( $_GET['monthRescued'] == "null" ) {
	    $monthRescued = "null";
	} else {
	    $monthRescued = "\"".$_GET['monthRescued']."\"";
	}
	if ( $_GET['yearRescued'] == "null" ) {
	    $yearRescued = "null";
	} else {
	    $yearRescued = "\"".$_GET['yearRescued']."\"";
	}
	if ( $_GET['age'] == "null" ) {
	    $age = "null";
	} else {
	    $age = "\"".$_GET['age']."\"";
	}
	if ( $_GET['years'] == "null" ) {
	    $years = "null";
	} else {
	    $years = "\"".$_GET['years']."\"";
	}
	if ( $_GET['photos'] == "null" ) {
	    $photos = "null";
	} else {
	    $photos = "\"".$_GET['photos']."\"";
	}

	$sql = "INSERT INTO Animal VALUES (".$id.", ".$name.", ".$writeUp.", ".$species.", ".$breed.", ".$sex.", ".$monthBorn.", ".$yearBorn.", ".$aSize.", ".$monthFound.", ".$yearFound.", ".$fixed.", ".$status.", ".$rescuerID.", ".$monthRescued.", ".$yearRescued.", ".$age.", ".$years.", ".$photos.")";

	if ( mysqli_query( $con, $sql ) === TRUE ) {
	    echo "{ \"message\":\"New record created successfully\" }";
	} else {
	    echo "{ \"message\":\"Error: ".$sql." ".mysqli_error( $con )."\" }";
	}

	mysqli_close( $con );
?>