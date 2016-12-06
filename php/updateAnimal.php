<?php
    // Create connection
    $con =  mysqli_connect( 'aa1lxtczcxw42lh.cjcihvs13gvz.us-west-2.rds.amazonaws.com', 'franciscocuevas', 'Juan1985', 'ebdb', 3306 );
	
	// Check connection
	if ( mysqli_connect_errno() ) {
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}

	$sql = "UPDATE Animal SET name=\"".$_GET['name']."\", writeUp=\"".$_GET['writeUp']."\", species=\"".$_GET['species']."\", breed=\"".$_GET['breed']."\", sex=\"".$_GET['sex']."\", monthBorn=\"".$_GET['monthBorn']."\", yearBorn=\"".$_GET['yearBorn']."\", aSize=\"".$_GET['aSize']."\", monthFound=\"".$_GET['monthFound']."\", yearFound=\"".$_GET['yearFound']."\", fixed=\"".$_GET['fixed']."\", status=\"".$_GET['status']."\", rescuerID=\"".$_GET['rescuerID']."\", monthRescued=\"".$_GET['monthRescued']."\", yearRescued=\"".$_GET['yearRescued']."\", age=\"".$_GET['age']."\", years=\"".$_GET['years']."\", photos=\"".$_GET['photos']."\" WHERE id=\"".$_GET['id']."\"";

	if ( mysqli_query( $con, $sql ) === TRUE ) {
		echo "{ \"message\":\"Record updated successfully\" }";
	} else {
		echo "{ \"message\":\"Error updating record: ".$sql." ".mysqli_error( $con )."\" }";
	}

	mysqli_close( $con );
?>