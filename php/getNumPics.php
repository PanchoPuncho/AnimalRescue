<?php
    // Create connection
    $con = mysqli_connect( 'aa1lxtczcxw42lh.cjcihvs13gvz.us-west-2.rds.amazonaws.com', 'franciscocuevas', 'Juan1985', 'ebdb', 3306 );
    
    // Check connection
    if ( mysqli_connect_errno() ) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    $sql = "SELECT * FROM Picture";
    $result = mysqli_query( $con, $sql );

    echo "{ \"numPics\":\"".mysqli_num_rows( $result )."\" }";

    mysqli_close( $con );
?>