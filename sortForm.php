<?php
$to         = "webcrispy7@gmail.com";
$email       = $_REQUEST['email'];

$subject    = 'Join Us !';


$message =' You received  a mail from '.$email. "\r\n";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: '.$email."\r\n".
            'Reply-To: '.$email."\r\n" .
            'X-Mailer: PHP/' . phpversion();


if(mail($to, $subject,$message, $headers)){
    echo 'mail successful send';
}
else{
    echo 'there’s some errors to send the mail, verify your server options';
}
?>