<?php
    $dbhost = "aa1lxtczcxw42lh.cjcihvs13gvz.us-west-2.rds.amazonaws.com";
    $dbuser = "franciscocuevas";
    $dbpass = "Juan1985";
    $dbname = "ebdb";
    $dbport = 3306;

    // Create connection
    echo "Attempting connection..."
    $conn = new mysqli_connect($dbhost, $dbuser, $dbpass, $dbname, $dbport);
    echo "Connected! :)"
	
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	$sql = "UPDATE Animal SET name=\"".$_GET['name']."\", writeUp=\"".$_GET['writeUp']."\", species=\"".$_GET['species']."\", breed=\"".$_GET['breed']."\", sex=\"".$_GET['sex']."\", monthBorn=\"".$_GET['monthBorn']."\", yearBorn=\"".$_GET['yearBorn']."\", aSize=\"".$_GET['aSize']."\", monthFound=\"".$_GET['monthFound']."\", yearFound=\"".$_GET['yearFound']."\", fixed=\"".$_GET['fixed']."\", status=\"".$_GET['status']."\", rescuerID=\"".$_GET['rescuerID']."\", monthRescued=\"".$_GET['monthRescued']."\", yearRescued=\"".$_GET['yearRescued']."\", age=\"".$_GET['age']."\", years=\"".$_GET['years']."\", photos=\"".$_GET['photos']."\" WHERE id=\"".$_GET['id']."\"";

	if ($conn->query($sql) === TRUE) {
		echo "{ \"message\":\"Record updated successfully\" }";
	} else {
		echo "{ \"message\":\"Error updating record: ".$sql." ".$conn->error."\" }";
	}

	$conn->close();
?>