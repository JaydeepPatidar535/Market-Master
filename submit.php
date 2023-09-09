<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Email recipient (your email address)
    $to = "jaydeeppatidar535@gmail.com";

    // Email subject
    $subject = "Contact Form Submission from $name";

    // Email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";

    // Additional headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
        // Email sent successfully
        echo "Thank you, $name! Your message has been sent.";
    } else {
        // Email sending failed
        echo "Sorry, there was an issue sending your message. Please try again later.";
    }
}
?>
