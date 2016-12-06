<?php
    $servername = "localhost";
    $username = "turninq2";
    $password = "Buttercup12!";
    $dbname = "turninq2_francisco";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

	$sql = "INSERT INTO Picture VALUES (\"".$_GET['id']."\", \"".$_GET['animalID']."\", \"".$_GET['photo']."\")";

	if ($conn->query($sql) === TRUE) {
	    echo "{ \"message\":\"New record created successfully\" }";
	} else {
	    echo "{ \"message\":\"Error: ".$sql." ".$conn->error."\" }";
	}

	$conn->close();
?>