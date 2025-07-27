let header=`<div class="container">
                <a class="navbar-brand" href="#">
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
                    <p class="footer-link"><i class="bi bi-facebook"></i> Orange Shop</p>
                    <p class="footer-link"><i class="bi bi-instagram"></i> Orange Shop</p>
                    <p class="footer-link"><i class="bi bi-tiktok"></i> Orange Shop</p>
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
