<?php

/* Page: Contact.php
Autor: Reeem Ziedani
Description:portfolio.*/

if(isset($_GET['submit'])){
        echo "je hebt op de submitknop gedrukt";

        $firstname = $_GET['firstname'];
        $lastname  = $_GET['lastname'];
        $email     = $_GET['country'];
        $subject   = $_GET['subject'];
        



        $to          = 'ziedanireem@gmail.com';
        $subject     =  'onderwerp: ' . $subject;
        $from        = $firstname. ' ' . $lastname . '<'. $email .'>';
        $headers     = 'Reply-To: ' . $from . '\r\n';
        // $headers     .= 'Reply-To: ' . $from . '\r\n';
      




       if( mail($to, $subject, $headers)){
           echo"<h3> your message has been sent.</h3>";

       }
       else{
        echo"<h3> your message has NOT been sent.</h3>";

       }

    }


?>
<!DOCTYPE html>

<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>portfolio-Contact</title>
    <link rel="stylesheet" href="assets/css/style2.css">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
</head>
<body>
    
    <h2>Contact Form</h2>
    <p>
        H<span class="fas fa-laugh-wink">i</span><br>Ik ben Reem en dat is mijn Contact pagina. <br>
        Als u vraag heeft dan kunt u aan mij een beriecht sturen.<br>
        Zou u mischien dit velden kunnen invullen??!

    </p>
    <!-- informatie en font aweasem  -->
    <section class="contact">
        <div class="max-width">
            <div class="contact-content">
                <div>
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">
                                    Name</div>
                                <div>
                                    Reem ziedani</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">
                                    Address</div>
                                <div>
                                    Bankstraat Oudwijk</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">
                                    Email</div>
                                <div>
                                    ziedanireem@gmail.com</div>
                            </div>
                            <div>
                                <img class="contactimg" src="assets/images/google_map.png">
                            </div>
                        </div>
                    </div>
                </div>
</section>

<!-- Form -->
    <div class="container">
        <form action="contact.php" method="GET">
            <!-- firstName -->
            <div class="row">
                <div class="col-25">
                    <label for="fname">First Name</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Your name..">
                </div>
            </div>
            <!-- lastName -->
            <div class="row">
                <div class="col-25">
                    <label for="lname">Last Name</label>
                </div>
                <div class="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Your last name..">
                </div>
            </div>
            <!-- country -->

            <div class="row">
                <div class="col-25">
                    <label for="country">Country</label>
                </div>
                <div class="col-75">
                    <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                </div>
            </div>
            <!-- subject -->

            <div class="row">
                <div class="col-25">
                    <label for="subject">Subject</label>
                </div>
                <div class="col-75">
                    <textarea id="subject" name="subject" placeholder="Write something.."
                        style="height:200px"></textarea>
                </div>
            </div>
            <!-- submit -->

            <div class="row">
                <input type="submit" value="Submit" name="submit">
            </div>
        </form>
    </div>

</body>

</html>