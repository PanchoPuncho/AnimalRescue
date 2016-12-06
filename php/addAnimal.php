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

	$sql = "INSERT INTO Animal VALUES (\"".$_GET['id']."\", \"".$_GET['name']."\", \"".$_GET['writeUp']."\", \"".$_GET['species']."\", \"".$_GET['breed']."\", \"".$_GET['sex']."\", \"".$_GET['monthBorn']."\", \"".$_GET['yearBorn']."\", \"".$_GET['aSize']."\", \"".$_GET['monthFound']."\", \"".$_GET['yearFound']."\", \"".$_GET['fixed']."\", \"".$_GET['status']."\", \"".$_GET['rescuerID']."\", \"".$_GET['monthRescued']."\", \"".$_GET['yearRescued']."\", \"".$_GET['age']."\", \"".$_GET['years']."\", \"".$_GET['photos']."\")";

	if ($conn->query($sql) === TRUE) {
	    echo "{ \"message\":\"New record created successfully\" }";
	} else {
	    echo "{ \"message\":\"Error: ".$sql." ".$conn->error."\" }";
	}

	$conn->close();
?>