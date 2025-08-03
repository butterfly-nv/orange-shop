let header=`<div class="container">
                <a class="navbar-brand" href="index.html">
                    <img src="images/logo.jpg" alt="Logo" />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link fw-bold" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-bold" href="shop.html">Shop Now</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-bold" href="contact.html">Contact</a>
                    </li>
                    </ul>
                </div>
            </div>`;

document.getElementById("header").innerHTML = header;

let footer=`<div class="container">
                <div class="row text-center text-md-start">

                    <!-- Follow Us -->
                    <div class="col-md-4 mb-4">
                        <h5 class="footer-heading">Follow Us</h5>
                        <div class="social-links d-flex flex-column gap-2">
                            <a href="https://www.facebook.com/profile.php?id=100063733149127 target="_blank" class="footer-link" target="_blank">
                                <i class="bi bi-facebook me-2"></i> Orange Shop
                            </a>
                            <a href="https://www.instagram.com/orange_cambodia.new/ target="_blank" class="footer-link" target="_blank">
                                <i class="bi bi-instagram me-2"></i> Orange Shop
                            </a>
                            <a href="https://www.tiktok.com/@orange_cambodia?_t=ZS-8yYgfedrBaf&_r=1 target="_blank" class="footer-link" target="_blank">
                                <i class="bi bi-tiktok me-2"></i> Orange Shop
                            </a>
                        </div>
                    </div>

                    <!-- Contact Us -->
                    <div class="col-md-4 mb-4">
                    <h5 class="footer-heading">Contact Us</h5>
                    <p class="footer-link"><i class="bi bi-telephone-fill"></i> +885 17555888</p>
                    <p class="footer-link"><i class="bi bi-telephone-fill"></i> +885 96555888</p>
                    <p class="footer-link"><i class="bi bi-telegram"></i> Telegram</p>
                    </div>

                    <!-- Google Map -->
                    <div class="col-md-4 mb-4">
                    <h5 class="footer-heading">Google Map</h5>
                    <iframe
                        src="https://maps.google.com/maps?q=Framer%20B.V&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                    </div>

                </div>
            </div>`;

document.getElementById("footer").innerHTML = footer;
