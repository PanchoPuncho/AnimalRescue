<html lang="en">
   
   <head>
      <title>Help Angel Dogs Email</title>
   </head>

   <!-- START BODY -->
   <body>

      <!-- Header -->
      <div>
         <h1>Angel Dogs, Inc.</h1>      
         <h3>Saving One Dog at a Time!</h3>
      </div>

      <br/>
      
      <?php
         if ( $_GET['id'] == "null" || $_GET['id'] == "" ) {
            exit( "id cannot be empty!" );
         } else {
            $id = $_GET['id'];
         }
         if ( $_GET['status'] == "null" || $_GET['status'] == "" ) {
            exit( "status cannot be empty!" );
         } else {
            $status = $_GET['status'];
            if ( $status == 'SHELTERED' ) {
               $status = 'Sheltered';
            } else if ( $status == 'FOSTERED' ) {
               $status = 'Fostered';
            } else if ( $status == 'ADOPTED' ) {
               $status = 'Adopted';
            } else {
               exit( "Invalid value for status" );
            }
         }
         if ( $_GET['writeUp'] == "null" || $_GET['writeUp'] == "" ) {
            exit( "writeUp cannot be empty!" );
         } else {
            $writeUp = $_GET['writeUp'];
         }
         if ( $_GET['species'] == "null" || $_GET['species'] == "" ) {
            exit( "species cannot be empty!" );
         } else {
            $species = $_GET['species'];
         }
         if ( $_GET['breed'] == "null" || $_GET['breed'] == "" ) {
            exit( "breed cannot be empty!" );
         } else {
            $breed = $_GET['breed'];
         }
         if ( $_GET['sex'] == "null" || $_GET['sex'] == "" ) {
            exit( "sex cannot be empty!" );
         } else {
            $sex = $_GET['sex'];
         }
         if ( $_GET['monthBorn'] == "null" || $_GET['monthBorn'] == "" ) {
            exit( "monthBorn cannot be empty!" );
         } else {
            $monthBorn = $_GET['monthBorn'];
         }
         if ( $_GET['yearBorn'] == "null" || $_GET['yearBorn'] == "" ) {
            exit( "yearBorn cannot be empty!" );
         } else {
            $yearBorn = $_GET['yearBorn'];
         }
         if ( $_GET['size'] == "null" || $_GET['size'] == "" ) {
            exit( "size cannot be empty!" );
         } else {
            $size = $_GET['size'];
         }
         if ( $_GET['monthFound'] == "null" || $_GET['monthFound'] == "" ) {
            exit( "monthFound cannot be empty!" );
         } else {
            $monthFound = $_GET['monthFound'];
         }
         if ( $_GET['yearFound'] == "null" || $_GET['yearFound'] == "" ) {
            exit( "yearFound cannot be empty!" );
         } else {
            $yearFound = $_GET['yearFound'];
         }
         if ( $_GET['fixed'] == "null" || $_GET['fixed'] == "" ) {
            exit( "fixed cannot be empty!" );
         } else {
            $fixed = $_GET['fixed'];
         }
         $rescuerID = $_GET['rescuerID'];
         $monthRescued = $_GET['monthRescued'];
         $yearRescued = $_GET['yearRescued'];

         $to = "cuevas500@gmail.com";
         $subject = "Angel Dogs, Inc. - ".$id." Has Been ".$status;
         $header = "From:abc@somedomain.com \r\n";
         $header .= "Cc:afgh@somedomain.com \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $message = "<html><body>";
         $message .= '<style type="text/css">.myTable { background-color:#eee;border-collapse:collapse; }.myTable th { background-color:#000;color:white;width:50%; }.myTable td, .myTable th { padding:5px;border:1px solid #000; }</style>';
         $message .= "<div><h1>Angel Dogs, Inc.</h1><h3>Saving One Dog at a Time!</h3></div>";
         $message .= '<div><table class="myTable">';
         $message .= "<tr><th>ID</th><th>Status</th><th>Write Up</th><th>Species</th><th>Breed</th><th>Sex</th><th>Month Born</th><th>Year Born</th><th>Size</th><th>Month Found</th><th>Year Found</th><th>Fixed</th><th>Rescuer ID</th><th>Month Rescued</th><th>Year Rescued</th></tr>";
         $message .= '<tr><td align="center">'.$id.'</td><td align="center">'.$status.'</td><td align="center">'.$writeUp.'</td><td align="center">'.$species.'</td><td align="center">'.$breed.'</td><td align="center">'.$sex.'</td><td align="center">'.$monthBorn.'</td><td align="center">'.$yearBorn.'</td><td align="center">'.$size.'</td><td align="center">'.$monthFound.'</td><td align="center">'.$yearFound.'</td><td align="center">'.$fixed.'</td><td align="center">'.$rescuerID.'</td><td align="center">'.$monthRescued.'</td><td align="center">'.$yearRescued.'</td></tr>';
         $message .= "</table></div>";
         $message .= "</body></html>";

         $retval = mail ($to,$subject,$message,$header);
         
         if( $retval == true ) {
            echo "Message sent successfully!";
         }else {
            echo "Error - Message could not be sent!";
         }
      ?>
      
   </body>
</html>
