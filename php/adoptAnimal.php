<?php
    $servername = "localhost";
    $username = "turninq2";
    $password = "Buttercup12!";
    $dbname = "ebdb";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	$sql = "UPDATE Animal SET status=\"".$_GET['status']."\", rescuerID=\"".$_GET['rescuerID']."\", monthRescued=\"".$_GET['monthRescued']."\", yearRescued=\"".$_GET['yearRescued']."\" WHERE id=\"".$_GET['id']."\"";

	if ($conn->query($sql) === TRUE) {
		echo "{ \"message\":\"Record updated successfully\" }";
	} else {
		echo "{ \"message\":\"Error updating record: ".$sql." ".$conn->error."\" }";
	}

	$conn->close();
?>