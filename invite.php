<?php
$to         = "webcrispy7@gmail.com";
$name       = $_REQUEST['name'];
$email       = $_REQUEST['email'];
$phone       = $_REQUEST['Phone'];
$content       = $_REQUEST['message'];
$subject    = 'Say hello to us mail';


$message =' You received  a mail from '.$name. "\r\n";
$message .='Email : '.$email. "\r\n";
$message .='Phone : '.$phone. "\r\n";
$message .='Message : '.$content. "\r\n";

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