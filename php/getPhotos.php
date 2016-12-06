<?php
    // Create connection
    $con =  mysqli_connect( 'aa1lxtczcxw42lh.cjcihvs13gvz.us-west-2.rds.amazonaws.com', 'franciscocuevas', 'Juan1985', 'ebdb', 3306 );
    
    // Check connection
    if ( mysqli_connect_errno() ) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    $sql = "SELECT photo FROM Picture WHERE animalID=".$_GET['id'];
    $result = mysqli_query( $con, $sql );

    $numResults = mysqli_num_rows( $result );
    $counter = 0;

    echo "{ \"photos\":[";
    while ( $row = mysqli_fetch_array( $result ) ) {
        if ( ++$counter == $numResults ) {
            echo "{\"photo\":\"".$row["photo"]."\"} ";
        } else {
            echo " {\"photo\":\"".$row["photo"]."\"}, ";
        }
    }
    echo "] }";

    mysqli_close( $con );
?>