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

         $to = "cuevas500@gmail.com";
         $subject = "Angel Dogs, Inc. - ".$id." Has Been ".$status;
         
         $message = "<div><h1>Angel Dogs, Inc.</h1><h3>Saving One Dog at a Time!</h3></div>";
         $message .= "<div><b>Their id is ".$id."</b></div>";
         
         $header = "From:abc@somedomain.com \r\n";
         $header .= "Cc:afgh@somedomain.com \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$message,$header);
         
         if( $retval == true ) {
            echo "Message sent successfully!";
         }else {
            echo "Error - Message could not be sent!";
         }
      ?>
      
   </body>
</html>
