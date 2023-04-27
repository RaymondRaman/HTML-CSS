<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/c534ff95df.js" crossorigin="anonymous"></script>
    <title>ArtTech</title>
    <!-- Boostrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <!-- CSS -->
    <style>
        * {
            font-family: 'Spartan', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        h1 {
            font-size: 50px;
            line-height: 64px;
            color: #222;
        }

        h2 {
            font-size: 46px;
            line-height: 54px;
            color: #222;
        }

        h4 {

            font-size: 20px;
            color: #222;
        }


        h6 {
            font-weight: 700;
            font-size: 12px;
        }

        p {

            margin: auto;
            font-size: 18px;
            line-height: 1.9;
        }

        body {
            width: 100%;
            background: #f1fbff;
        }

        .section-padding {
            padding: 100px 0;
        }

        button.normal {
            font-size: 14px;
            font-weight: 600;
            padding: 15px 30px;
            color: #000;
            background-color: #fff;
            border-radius: 4px;
            cursor: pointer;
            border: none;
            outline: none;
            transition: 0.2s;
        }

        .logo-container {
            display: flex;
            align-items: center;
            gap: 10px;
            height: 50px;
        }

        /* navbar css starts */
        .navbar-light .navbar-brand {
            font-size: 25px;
            font-weight: 700;
        }

        .navbar li {
            list-style: none;
            padding: 0 10px;
            position: relative;
        }

        .navbar-nav a {

            font-size: 20px;
            text-transform: uppercase;
            color: 088178;
            transition: 0.3s ease;
            font-weight: 500;
        }

        .navbar li a:hover,
        .navbar li a.nav-link.active {
            color: #088178;
        }

        .navbar li a.nav-link.active::after,
        .navbar li a:hover::after {
            content: "";
            width: 30%;
            height: 2px;
            background: #088178;
            position: absolute;
            bottom: -4px;
            left: 20px;
        }

        /* navbar css ends */
        /* carousel css starts */
        .carousel-item {
            min-height: 300px;
        }

        .carousel-img {
            object-fit: cover;
            height: 100vh;
            width: 100%;
        }

        .carousel-caption {
            bottom: 220px;
            z-index: 2;
        }

        .carousel-caption h5 {
            font-size: 45px;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-top: 25px;
        }

        .carousel-inner:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 1;
        }

        /* carousel css ends */

        /* product features css starts */
        .feature {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .feature .fe-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 230px;
            text-align: center;
            padding: 25px 15px;
            box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.15);
            border: 1px solid #cccce7d0;
        }

        .feature .fe-box:hover {
            box-shadow: 10px 10px 54px rgba(70, 62, 221, 0.1);
        }

        .feature .fe-box img {
            width: 100%;
            margin-bottom: 10px;
        }

        /* product features css end */

        /* banner css starts */
        .banner {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background-image: url("https://plus.unsplash.com/premium_photo-1682310420902-4d28c8c3fd53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI2fHxzYWxlcyUyMGJhbm5lcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60");
            width: 100%;
            height: 20vh;
            background-size: cover;
            background-position: center;
        }

        .banner h4 {
            color: black;
            font-size: 16px;
        }

        .banner h2 {
            color: black;
            font-size: 30px;
            padding: 10px 0;
        }

        .contact button {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 100%;
            height: 5vh;
        }

        .banner button:hover {
            background-color: #088178;
            color: #fff;
        }

        /* banner css ends */
        /* Contact css starts */
        .contact button {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .contact button:hover {
            background-color: blue;
            color: #fff;
        }

        input[type="checkbox"] {
            margin-right: 10px;
            vertical-align: middle;
        }

        /* Contact css ends */
        /* newsletter css starts */
        #newsletter {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            background-repeat: no-repeat;
            background-position: 20% 20%;
            background-color: #041e42;
            width: 100%;
            height: 15vh;
        }

        #newsletter h4 {
            font-size: 22px;
            font-weight: 700;
            color: #fff;
            padding: 10px 20px;
        }


        #newsletter .form {
            display: flex;
            width: 30%;
        }

        #newsletter h2 {
            font-size: 14px;
            font-weight: 600;
            color: #818ea0;
            padding: 3px 20px;
        }

        #newsletter h2 span {
            color: #ffbd27;
        }


        #newsletter input {
            height: 3.125rem;
            padding: 0 1.25em;
            font-size: 14px;
            width: 100%;
            border: 1px solid transparent;
            border-radius: 4px;
            outline: none;
        }

        #newsletter button {
            background-color: #088178;
            color: #fff;
            white-space: nowrap;
        }

        /* newsletter css ends */

        /* footer css starts */

        #footer h4 {
            font-size: 22px;
            font-weight: 700;
            color: black;
            padding: 10px 40px;
        }

        #footer p {
            font-size: 18px;
            padding: 0px 40px;
        }

        #footer h5 {
            font-size: 18px;
            padding: 0px 65px;
        }

        #footer a {
            color: black;
            text-decoration: none;
        }

        #footer .logo-container {
            padding: 0px 70px;
        }

        /* footer css ends */
        /* ==responsive css== */
        @media only screen and (min-width: 1000px) and (max-width: 991px) {
            .carousel-caption {
                bottom: 370px;
            }

            .carousel-caption {
                width: 100px;
            }

        }

        @media only screen and (max-width: 767px) {
            .navbar-nav {
                text-align: center;
            }

            .carousel-caption {
                bottom: 125px;
            }

            .carousel-caption h5 {
                font-size: 17px;
            }

            .carousel-caption a {
                padding: 10px 15px;
            }

            .carousel-caption p {
                width: 100%;
                line-height: 1.6;
                font-size: 12px;
            }

        }
    </style>
</head>

<!-- HTML -->

<body style="overflow-x: hidden;">

    <!-- Nav link -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style="background-color: white;">
        <div class="container-fluid">
            <!-- logo starts-->
            <div class="logo-container">
                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                        <i class="fa-solid fa-hat-wizard navbar-hat"></i>
                        ArtTech
                    </a>
                </nav>
            </div>
            <!-- logo ends -->
            <!-- menu starts -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="#header">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#product">Products</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#pricing">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#testimonials">Testimonials</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="navbar-brand" href="#">
                            <a href="https://github.com/RaymondRaman"><i class="bi bi-instagram"
                                    style="color:black"></i></a>
                    </li>
                </ul>
            </div>
            <!-- menu ends -->
        </div>
    </nav>

    <!-- header starts -->
    <section id="header">
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="carousel-img"
                        src="https://images.unsplash.com/photo-1667835949495-78a1ea9ecd77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWklMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
                        class="d-block w-100" alt="...">
                    <div class="carousel-caption">
                        <h5>Found Your Dream Artwork!</h5>
                        <p>Expanding your market and reaching new customers who are interested in innovative and
                            cutting-edge artwork is crucial for the growth and success of any art business.</p>
                        <p><a href="#" class="btn btn-warning mt3">Learn More</a></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="carousel-img"
                        src="https://images.unsplash.com/photo-1533497374533-d860dceecf74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFpJTIwYXJ0fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=700&q=60"
                        class="d-block w-100" alt="...">
                    <div class="carousel-caption">
                        <h5>Found Your Dream Artwork!</h5>
                        <p>Experience the majesty of space in this stunning acrylic painting. Want to know more
                            about the value and benefits of this innovative technology? </p>
                        <p><a href="#" class="btn btn-warning mt3">Learn More</a></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="carousel-img"
                        src="https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGFpJTIwYXJ0fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=700&q=60"
                        class="d-block w-100" alt="...">
                    <div class="carousel-caption d-md-block">
                        <h5>Found Your Dream Artwork!</h5>
                        <p> The art world is constantly evolving, and new technologies like AI art are creating.
                            exciting opportunities for artists and art dealers alike</p>
                        <p><a href="#" class="btn btn-warning mt3">Learn More</a></p>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
    <!-- header ends -->
    <!-- Product Section starts-->
    <section id="product" class="product section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <section-header class="text-center pb-5">
                        <h2>Product Features</h2>
                        <p> AI Art Design</p>
                        <!-- List -->
                        <ul class="fa-ul">
                            <i class="fa-solid fa-spinner fa-pulse"></i>
                            <i class="fa-solid fa-check-square"></i>
                        </ul>
                    </section-header>
                </div>
            </div>
            <section class="feature">
                <div class="fe-box">
                    <img src="https://media.istockphoto.com/id/186859069/fr/photo/livraison-gratuite.jpg?s=612x612&w=0&k=20&c=asVwyOhawGaCwYw8tdX3znruaDQWDFMaqOlZTtNezVU="
                        style="width: 200px">
                    <h5>Free Shipping</h5>
                    <a href="#" class="btn btn-secondary">View More</a>
                </div>
                <div class="fe-box">
                    <img src="https://media.istockphoto.com/id/186859069/fr/photo/livraison-gratuite.jpg?s=612x612&w=0&k=20&c=asVwyOhawGaCwYw8tdX3znruaDQWDFMaqOlZTtNezVU="
                        style="width: 200px">
                    <h5>Exceptional Quality</h5>
                    <a href="#" class="btn btn-secondary">View More</a>
                </div>
                <div class="fe-box">
                    <img src="https://media.istockphoto.com/id/186859069/fr/photo/livraison-gratuite.jpg?s=612x612&w=0&k=20&c=asVwyOhawGaCwYw8tdX3znruaDQWDFMaqOlZTtNezVU="
                        style="width: 200px">
                    <h5>Low Transaction Fee</h5>
                    <a href="#" class="btn btn-secondary">View More</a>
                </div>
                <div class="fe-box">
                    <img src="https://media.istockphoto.com/id/186859069/fr/photo/livraison-gratuite.jpg?s=612x612&w=0&k=20&c=asVwyOhawGaCwYw8tdX3znruaDQWDFMaqOlZTtNezVU="
                        style="width: 200px">
                    <h5>24/7 Support</h5>
                    <a href="#" class="btn btn-secondary">View More</a>
                </div>
                <div class="fe-box">
                    <img src="https://media.istockphoto.com/id/186859069/fr/photo/livraison-gratuite.jpg?s=612x612&w=0&k=20&c=asVwyOhawGaCwYw8tdX3znruaDQWDFMaqOlZTtNezVU="
                        style="width: 200px">
                    <h5>Online Order</h5>
                    <a href="#" class="btn btn-secondary">View More</a>
                </div>
            </section>
        </div>
    </section>
    <!-- Product Section ends-->
    <!-- Price Table starts -->
    <section id="pricing" class="pricing section-padding ">
        <section-header class="text-center pb-5">
            <h2>Monthly Fee</h2>
            <p>Only cost you a cup of coffee per week!</p>
        </section-header>
        <div class="container text-center mt-3">
            <div class="row row-cols-1 row-cols-md-3">
                <div class="col mb-3">
                    <div class="card shadow-lg">
                        <div class="card-header">
                            <h4>Free</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="my-0 font-weight-normal">$0 <small class="text-muted">/mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>1 users included</li>
                                <li>local storage: 2GB</li>
                                <li>Email support</li>
                                <li>Help center acess</li>
                            </ul>
                        </div>
                        <div>
                            <button class="btn btn-outline-primary" style="width: 80%;">Explore
                                more</button>
                        </div>
                        <br>
                    </div>
                </div>
                <div class="col mb-3">
                    <div class="card shadow-lg">
                        <div class="card-header">
                            <h4>Pro</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="my-0 font-weight-normal">$20 <small class="text-muted">/mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>5 users included</li>
                                <li>local storage: 4GB</li>
                                <li>Email support</li>
                                <li>Help center acess</li>
                            </ul>
                        </div>
                        <div>
                            <button class="btn btn-outline-primary" style="width: 80%;">Explore
                                more</button>
                        </div>
                        <br>
                    </div>
                </div>
                <div class="col mb-3">
                    <div class="card shadow-lg">
                        <div class="card-header">
                            <h4>Business</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="my-0 font-weight-normal">$30 <small class="text-muted">/mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>100 users included</li>
                                <li>local storage: Unlimited</li>
                                <li>Email support</li>
                                <li>Help center acess</li>
                            </ul>
                        </div>
                        <div>
                            <button class="btn btn-outline-primary" style="width: 80%;">Explore
                                more</button>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- Price Table Ends starts-->
    <!-- Testimonials start-->
    <div id="testimonials-container"></div>
    <!-- Testimonials ends-->
    <!-- Call to action starts-->
    <section id="banner" class="banner section-padding mt-5">
        <h4>What are you waiting for?</h4>
        <h2>Register now and enjoy <span>70% OFF</span> for your first product!</h2>
        <button class="normal" onclick="window.location.href='#pricing'">Explore more</button>
    </section>
    <!-- Call to action ends-->
    <!-- Contact Section start -->
    <section id="contact" class="contact section-padding">
        <div class="row">
            <div class="col-md-12">
                <section-header class="text-center pb-5">
                    <h2>Contact Us</h2>
                </section-header>
            </div>
        </div>

        <div class="row m-4">
            <div class="col-md-8 p-0 pt-4 p-4 m-auto">
                <form id="contact-form">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <input type="text" name="name" class="form-control" required
                                    placeholder="Your Full name">
                            </div>
                            <div class="mb-3">
                                <input type="email" name="email" class="form-control" required placeholder="Email">
                            </div>
                            <div class="mb-3">
                                <input type="phone" name="phone" class="form-control" required placeholder="Phone">
                            </div>
                            <div class="mb-3">
                                <textarea name="query" rows="3" required class="form-control"
                                    placeholder="Your Query Here"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="terms" id="terms" required>
                                <label for="terms">I agree to the terms and conditions</label>
                            </div>
                            <button type="submit" class="btn btn-outline-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <!-- Contact Section ends -->
    <!-- Newsletter Section start -->
    <section id="newsletter">
        <div class=" newstext">
            <h4>Sign Up For Newsletters</h4>
            <h2>Get Weekly dates about our latest shop and <span>special offers</span>
            </h2>
        </div>
        <div class=" form">
            <input type="text" placeholder="Your email address">
            <button class="normal">Sign Up</button>
        </div>
    </section>
    <!-- Newsletter Section ends-->

    <!-- footer starts -->
    <section id="footer" class="section-padding">
        <div class="footer logo-container">
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <i class="fa-solid fa-hat-wizard navbar-hat"></i>
                    ArtTech
                </a>
            </nav>
        </div>
        <div class="row" style="margin-right: 50px;">
            <div class=" col">
                <ul>
                    <p><strong>Founder:</strong> Raymond Li</p>
                    <p><strong>Phone:</strong> +852 84812710</p>
                </ul>
            </div>
            <div class=" col">
                <h5>About</h5>
                <ul>
                    <ul><a href="">Delivery Information</a></ul>
                    <ul><a href="">Privacy Policy</a></ul>
                    <ul><a href="">Terms & Conditions</a></ul>
                    <ul><a href="">Contact us</a></ul>
                </ul>
            </div>
            <div class="col">
                <h5>My Account</h5>
                <ul>
                    <ul><a href="">Sign In</a></ul>
                    <ul><a href="">View Cart</a></ul>
                    <ul><a href="">My Wishlist</a></ul>
                    <ul><a href="">Track My Order</a></ul>
                </ul>
            </div>
            <div class="col">
                <div class="follow">
                    <h4>Follow us</h4>
                    <div class="icon">
                        <i class="fab fa-facebook-f"
                            style="font-size: 20px; margin-left: 40px; margin-right: 10px;"></i>
                        <i class="fab fa-twitter" style="font-size: 20px; margin-right: 10px;"></i>
                        <i class="fab fa-instagram" style="font-size: 20px; margin-right: 10px;"></i>
                        <i class="fab fa-pinterest-p" style="font-size: 20px; margin-right: 10px;"></i>
                        <i class="fab fa-youtuber" style="font-size: 20px; margin-right: 10px;"></i>
                    </div>
                </div>
            </div>

        </div>

        <p style="text-align: center;">@2023, RaymondRaman - HTML CSS Shopping Website Projcet</p>

    </section>


    <!-- footer ends -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
        integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ"
        crossorigin="anonymous"></script>
</body>

</html>

<!-- JavaScript -->
<script>
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevent the form from submitting

        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const phone = form.querySelector('input[name="phone"]').value;
        const query = form.querySelector('textarea[name="query"]').value;
        const terms = form.querySelector('input[name="terms"]').checked;

        if (name.trim() === '') {
            alert('Please enter your full name.');
            return;
        }
        if (email.trim() === '') {
            alert('Please enter your email address.');
            return;
        }
        if (phone.trim() === '') {
            alert('Please enter your phone number.');
            return;
        }
        if (query.trim() === '') {
            alert('Please enter your query.');
            return;
        }
        if (!terms) {
            alert('Please agree to the terms and conditions.');
            return;
        }

        form.reset();
    });


</script>

</body>

</html>