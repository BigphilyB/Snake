<?php
use PHPMailer\PHPMailer\PHPMailer;
require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';
if (isset($_POST['submit'])) {
    $naam = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    //Server settings
    $mail->SMTPDebug = 0;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'mail.weconnect-it.nl';                 // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'test@thomasgroenendijk.nl';                 // SMTP username
    $mail->Password   = 'test123';                          // SMTP password
    $mail->Port       = 25;                                     // TCP port to connect to

    //Recipients
    $mail->setFrom('test@thomasgroenendijk.nl', 'Contactformulier (Thomas Groenendijk)');
    $mail->addAddress($email, $naam);                           // Add a recipient

    // Content
    $mail->isHTML(true);                                        // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = "Hallo $naam,<br><br>Een bevestiging van jou bericht op " . date("d-m-Y") . "<br>Jou bericht:<br>".$message;
    $mail->AltBody = 'Bedankt voor uw bestelling.';

    $mail->send();
    echo "<script type='text/javascript'>alert('Mail verstuurd naar ".$email."');</script>";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Thomas Groenendijk</title>
    <script src="https://kit.fontawesome.com/0f355dc4e6.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="assets/css/stylenew.css">
    <link rel="stylesheet" href="assets/css/skins/yellow.css">
    <link rel="stylesheet" href="assets/css/skins/pink.css">
</head>
<body>
    <!-- Main container -->
    <div class="main">
        <!-- Left nav -->
        <div class="leftnav">
            <!-- Logo -->
            <div class="logo">
                <a href="#home">Thomas</a>
            </div>
            <!-- Nav Toggle -->
            <div class="nav-toggler">
                <span></span>
            </div>
            <!-- Nav -->
            <ul class="nav">
                <li><a href="#home" class="active"><i class="fas fa-home"></i> Home</a></li>
                <li><a href="#about"><i class="fas fa-user"></i> Over mij</a></li>
                <li><a href="#portfolio"><i class="fas fa-list"></i> Portfolio</a></li>
                <li><a href="#contact"><i class="fas fa-comments "></i> Contact</a></li>
            </ul>
            <!-- Copyright -->
            <div class="copyright-text">
                &copy; 2020 Thomas Groenendijk
            </div>
        </div>
        <!-- Left nav end -->
        <div class="main-content">
            <!-- Home Section -->
            <section id="home" class="home section">
                <div class="container">
                    <div class="intro">
                        <img src="assets/img/profilepicture.png" alt="profielfoto" class="shadow-dark">
                        <h1>Thomas Groenendijk</h1>
                        <p>Student Webdeveloper</p><br>
                        <p>
                            Hoi! Ik ben Thomas Groenendijk. Student Webdeveloper aan het GLU (Grafisch Lyceum Utrecht).
                            Ik begon op mijn 12e met af en toe kleine stukjes van Minecraft plugins maken, ook had ik mijn eerste domeinnaam,
                            daarop had ik een standaard Wordpress website, niks bijzonders, maar ik vond het leuk.
                            Rond een jaar of 14 wilde ik meer. Op dat moment begon ik met Discord Bots te schrijven in JavaScript en doe het nu nog!
                        </p>
                        <div class="social-links">
                            <a href="https://twitter.com/ZThomq"><i class="fab fa-twitter"></i></a>
                            <a href="https://facebook.com/thomas.groenendijk.9"><i class="fab fa-facebook"></i></a>
                            <a href="https://instagram.com/thomas_._0297"><i class="fab fa-instagram"></i></a>
                            <a href="https://linkedin.com/in/thomas-groenendijk-05bb1318b/"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Home Section end -->
            <!-- About Section -->
            <section id="about" class="about section">
                <div class="container">
                    <div class="row">
                        <div class="section-title padd-15">
                            <h2>Over Mij</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="about-content padd-15">
                            <div class="row">
                                <div class="about-text padd-15">
                                    <h3>Ik ben Thomas Groenendijk, <span>Student Webdeveloper</span></h3>
                                    <p>
                                        Hoi! Ik ben Thomas Groenendijk. Student Webdeveloper aan het GLU (Grafisch Lyceum Utrecht).
                                        Ik begon op mijn 12e met af en toe kleine stukjes van Minecraft plugins maken, ook had ik mijn eerste domeinnaam,
                                        daarop had ik een standaard Wordpress website, niks bijzonders, maar ik vond het leuk.
                                        Rond een jaar of 14 wilde ik meer. Op dat moment begon ik met Discord Bots te schrijven in JavaScript en doe het nu nog!
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="personal-info padd-15">
                                    <div class="row">
                                        <div class="info-item padd-15">
                                            <p>Geboren: <span>24 Augustus 2004</span></p>
                                        </div>
                                        <div class="info-item padd-15">
                                            <p>Leeftijd: <span>16</span></p>
                                        </div>
                                        <div class="info-item padd-15">
                                            <p>Website: <span><a href="https://www.thomasgroenendijk.nl">www.thomasgroenendijk.nl</a></span></p>
                                        </div>
                                        <div class="info-item padd-15">
                                            <p>Email: <span><a href="mailto:info@thomasgroenendijk.nl">info@thomasgroenendijk.nl</a></span></p>
                                        </div>
                                        <div class="info-item padd-15">
                                            <p>Telefoonnummer: <span><a href="tel:0613088462">06-13088462</a></span></p>
                                        </div>
                                        <div class="info-item padd-15">
                                            <p>Woonplaats: <span>Vinkeveen</span></p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="button padd-15">
                                            <a href="#contact" class="btn">Contacteer mij</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="skills padd-15">
                                    <div class="row">
                                        <div class="skill-item padd-15">
                                            <h5>HTML</h5>
                                            <div class="progress">
                                                <div class="progress-in" style="width:80%;"></div>
                                                <div class="skill-percent">80%</div>
                                            </div>
                                        </div>
                                        <div class="skill-item padd-15">
                                            <h5>CSS</h5>
                                            <div class="progress">
                                                <div class="progress-in" style="width:72%;"></div>
                                                <div class="skill-percent">72%</div>
                                            </div>
                                        </div>
                                        <div class="skill-item padd-15">
                                            <h5>Javascript</h5>
                                            <div class="progress">
                                                <div class="progress-in" style="width:76%;"></div>
                                                <div class="skill-percent">76%</div>
                                            </div>
                                        </div>
                                        <div class="skill-item padd-15">
                                            <h5>PHP</h5>
                                            <div class="progress">
                                                <div class="progress-in" style="width:66%;"></div>
                                                <div class="skill-percent">66%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- About Section end -->
            <!-- Portfolio Section -->
            <section id="portfolio" class="portfolio section">
                <div class="container">
                    <div class="row">
                        <div class="section-title padd-15">
                            <h2>Portfolio</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="portfolio-filter padd-15">
                            <button type="button" class="active" data-filter="all">Alles</button>
                            <button type="button" data-filter="web">Web</button>
                            <button type="button" data-filter="javascript">Javascript</button>
                            <button type="button" data-filter="php">PHP</button>
                        </div>
                    </div>
                    <!-- WEB - Treinbord -->
                    <div class="row">
                        <div class="portfolio-item padd-15" data-category="web">
                            <div class="portfolio-item-inner shadow-dark">
                                <div class="portfolio-img">
                                    <img src="assets/img/portfolio/web/treinbord.png" alt="treinbord">
                                </div>
                                <div class="portfolio-info">
                                    <h4>Treinbord</h4>
                                    <div class="icon">
                                        <i class="fas fa-search"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- WEB - Treinbord einde -->
                        <!-- WEB - Schaakbord -->
                        <div class="portfolio-item padd-15" data-category="web">
                            <div class="portfolio-item-inner shadow-dark">
                                <div class="portfolio-img">
                                    <img src="assets/img/portfolio/web/schaakbord.png" alt="schaakbord">
                                </div>
                                <div class="portfolio-info">
                                    <h4>Schaakbord</h4>
                                    <div class="icon">
                                        <i class="fas fa-search"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- WEB - Schaakbord einde -->
                        <!-- JAVASCRIPT - Bestelformulier -->
                        <div class="portfolio-item padd-15" data-category="javascript">
                            <div class="portfolio-item-inner shadow-dark">
                                <div class="portfolio-img">
                                    <img src="assets/img/portfolio/web/bestelformulier.png" alt="bestelformulier">
                                </div>
                                <div class="portfolio-info">
                                    <h4>Bestelformulier</h4>
                                    <div class="icon">
                                        <i class="fas fa-search"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- JAVASCRIPT - Bestelformulier einde -->
                        <!-- JAVASCRIPT - Piano -->
                        <div class="portfolio-item padd-15" data-category="javascript">
                            <div class="portfolio-item-inner shadow-dark">
                                <div class="portfolio-img">
                                    <img src="assets/img/portfolio/web/piano.png" alt="piano">
                                </div>
                                <div class="portfolio-info">
                                    <h4>Piano</h4>
                                    <div class="icon">
                                        <i class="fas fa-search"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- JAVASCRIPT - Piano einde -->
                        <!-- PHP - Eindopdracht -->
                        <div class="portfolio-item padd-15" data-category="php">
                            <div class="portfolio-item-inner shadow-dark">
                                <div class="portfolio-img">
                                    <img src="assets/img/portfolio/web/eindopdrachtphp.png" alt="eindopdrachtphp">
                                </div>
                                <div class="portfolio-info">
                                    <h4>Eindopdracht</h4>
                                    <div class="icon">
                                        <i class="fas fa-search"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- PHP - Eindopdracht einde -->
                </div>
            </section>
            <!-- Portfolio Section end -->
            <!-- Contact Section -->
            <section id="contact" class="contact section">
                <div class="container">
                    <div class="row">
                        <div class="section-title padd-15">
                            <h2>Contact</h2>
                        </div>
                    </div>
                    <div class="row">
                        <!-- Telefoon -->
                        <div class="contact-info-item padd-15">
                            <div class="icon"><i class="fas fa-phone"></i></div>
                            <h4>Bel mij</h4>
                            <p><a href="tel:0613088462">06-13088462</a></p>
                        </div>
                        <!-- Telefoon end -->
                        <!-- School -->
                        <div class="contact-info-item padd-15">
                            <div class="icon"><i class="fas fa-map-marker"></i></div>
                            <h4>School</h4>
                            <p>Koningin Wilhelminalaan 7, Utrecht</p>
                        </div>
                        <!-- School end -->
                        <!-- School -->
                        <div class="contact-info-item padd-15">
                            <div class="icon"><i class="fas fa-envelope"></i></div>
                            <h4>Email</h4>
                            <a href="mailto:info@thomasgroenendijk.nl">info@thomasgroenendijk.nl</a>
                        </div>
                        <!-- School end -->
                    </div>
                    <div class="row">
                        <div class="contact-form padd-15">
                            <form method="POST" name="formulier">
                                <div class="row">
                                    <div class="form-item col-6 padd-15">
                                        <div class="form-group">
                                            <input type="text" name="name" class="form-control" placeholder="Naam *">
                                        </div>
                                    </div>
                                    <div class="form-item col-6 padd-15">
                                        <div class="form-group">
                                            <input type="email" name="email" class="form-control" placeholder="Email *">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-item col-12 padd-15">
                                        <div class="form-group">
                                            <input type="text" name="subject" class="form-control" placeholder="Onderwerp *">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-item col-12 padd-15">
                                        <div class="form-group">
                                            <textarea class="form-control" name="message" placeholder="Bericht *"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 padd-15">
                                        <button type="submit" name="submit" class="btn">Verstuur het bericht </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Contact Section end -->
        </div>
    </div>
    <!-- Main container end -->
    <!-- Lightbox -->
    <div class="lightbox">
        <div class="lightbox-content">
            <div><i class="fas fa-times lightbox-close"></i></div>
            <img src="" class="lightbox-img">
            <div class="lightbox-caption">
                <div class="caption-text"></div>
                <div class="caption-counter"></div>
            </div>
        </div>
        <div class="lightbox-controls">
            <div class="prev-item" onclick="prevItem()"><i class="fas fa-angle-left"></i></div>
            <div class="next-item" onclick="nextItem()"><i class="fas fa-angle-right"></i></div>
        </div>
    </div>
    <!-- Lightbox end -->
    <!-- js -->
    <script src="assets/js/script.js"></script>

</body>
</html>