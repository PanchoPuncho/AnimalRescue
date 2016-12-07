<?php
    // Create connection
    $con =  mysqli_connect('aa1ec4bkeb1ur34.cn7hlcsjbshk.us-east-1.rds.amazonaws.com', 'franciscocuevas', 'Juan1985', 'ebdb', 3306);
    
    // Check connection
	if ( mysqli_connect_errno() ) {
	    echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}

	if ( $_GET['id'] == "null" ) {
	    $id = "null";
	} else {
	    echo "".$id."";
	    $id = "\"".$_GET['id']."\"";
	}
	if ( $_GET['name'] == "null" ) {
	    $name = "null";
	} else {
	    echo "".$name."";
	    $name = "\"".$_GET['name']."\"";
	}
	if ( $_GET['writeUp'] == "null" ) {
	    $writeUp = "null";
	} else {
	    echo "".$writeUp."";
	    $writeUp = "\"".$_GET['writeUp']."\"";
	}
	if ( $_GET['species'] == "null" ) {
	    $species = "null";
	} else {
	    echo "".$species."";
	    $species = "\"".$_GET['species']."\"";
	}
	if ( $_GET['breed'] == "null" ) {
	    $breed = "null";
	} else {
	    echo "".$breed."";
	    $breed = "\"".$_GET['breed']."\"";
	}
	if ( $_GET['sex'] == "null" ) {
	    $sex = "null";
	} else {
	    echo "".$sex."";
	    $sex = "\"".$_GET['sex']."\"";
	}
	if ( $_GET['monthBorn'] == "null" ) {
	    $monthBorn = "null";
	} else {
	    echo "".$monthBorn."";
	    $monthBorn = "\"".$_GET['monthBorn']."\"";
	}
	if ( $_GET['yearBorn'] == "null" ) {
	    $yearBorn = "null";
	} else {
	    echo "".$yearBorn."";
	    $yearBorn = "\"".$_GET['yearBorn']."\"";
	}
	if ( $_GET['aSize'] == "null" ) {
	    $aSize = "null";
	} else {
	    echo "".$aSize."";
	    $aSize = "\"".$_GET['aSize']."\"";
	}
	if ( $_GET['monthFound'] == "null" ) {
	    $monthFound = "null";
	} else {
	    echo "".$monthFound."";
	    $monthFound = "\"".$_GET['monthFound']."\"";
	}
	if ( $_GET['yearFound'] == "null" ) {
	    $yearFound = "null";
	} else {
	    echo "".$yearFound."";
	    $yearFound = "\"".$_GET['yearFound']."\"";
	}
	if ( $_GET['fixed'] == "null" ) {
	    $fixed = "null";
	} else {
	    echo "".$fixed."";
	    $fixed = "\"".$_GET['fixed']."\"";
	}
	if ( $_GET['status'] == "null" ) {
	    $status = "null";
	} else {
	    echo "".$status."";
	    $status = "\"".$_GET['status']."\"";
	}
	if ( $_GET['rescuerID'] == "null" ) {
	    $rescuerID = "null";
	} else {
	    echo "".$rescuerID."";
	    $rescuerID = "\"".$_GET['rescuerID']."\"";
	}
	if ( $_GET['monthRescued'] == "null" ) {
	    $monthRescued = "null";
	} else {
	    echo "".$monthRescued."";
	    $monthRescued = "\"".$_GET['monthRescued']."\"";
	}
	if ( $_GET['yearRescued'] == "null" ) {
	    $yearRescued = "null";
	} else {
	    echo "".$yearRescued."";
	    $yearRescued = "\"".$_GET['yearRescued']."\"";
	}
	if ( $_GET['age'] == "null" ) {
	    $age = "null";
	} else {
	    echo "".$age."";
	    $age = "\"".$_GET['age']."\"";
	}
	if ( $_GET['years'] == "null" ) {
	    $years = "null";
	} else {
	    echo "".$years."";
	    $years = "\"".$_GET['years']."\"";
	}
	if ( $_GET['photos'] == "null" ) {
	    $photos = "null";
	} else {
	    echo "".$photos."";
	    $photos = "\"".$_GET['photos']."\"";
	}

    $sql = "UPDATE Animal SET name=".$name.", writeUp=".$writeUp.", species=".$species.", breed=".$breed.", sex=".$sex.", monthBorn=".$monthBorn.", yearBorn=".$yearBorn.", aSize=".$aSize.", monthFound=".$monthFound.", yearFound=".$yearFound.", fixed=".$fixed.", status=".$status.", rescuerID=".$rescuerID.", monthRescued=".$monthRescued.", yearRescued=".$yearRescued.", age=".$age.", years=".$years.", photos=".$photos." WHERE id=".$id;

	if ( mysqli_query( $con, $sql ) === true ) {
	    echo "{ \"message\":\"Record updated successfully\" }";
	} else {
	    echo "{ \"message\":\"Error updating record: ".$sql." ".mysqli_error( $con )."\" }";
	}

    mysqli_close( $con );
?>