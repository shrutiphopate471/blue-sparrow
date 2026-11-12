<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gallery | The Nest, Dabha Square Nagpur | Blue Sparrow Properties</title>
<meta name="description" content="Browse photos of The Nest — exteriors, amenities, construction progress and stunning night views.">
<link rel="icon" href="images/blue-sparrow-logo.png" type="image/png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://images.unsplash.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/responsive.css">
<link rel="stylesheet" href="css/animations.css">
</head>
<body>

<div class="loader">
  <svg class="loader-bird" viewBox="0 0 100 100" fill="none">
    <path d="M10 60 C25 30, 45 18, 60 16 C50 28, 46 40, 50 50 C65 34, 82 28, 90 32 C74 38, 62 48, 58 60 C70 58, 80 64, 86 74 C70 72, 58 76, 50 84 C56 92, 56 98, 52 100" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</div>

<header class="navbar">
  <div class="container nav-inner">
    <a href="index.php" class="brand">
      <span class="brand-logo-chip"><img src="images/blue-sparrow-logo.png" alt="Blue Sparrow Properties Pvt. Ltd." class="brand-logo" width="396" height="141" decoding="async"></span>
    </a>
    <nav class="nav-links">
      <a href="index.php">Home</a>
      <a href="about.php">About</a>
      <a href="project.php">Project</a>
      <a href="specifications.php">Specifications</a>
      <a href="gallery.php">Gallery</a>
      <a href="location.php">Location</a>
      <a href="contact.php">Contact</a>
    </nav>
    <div class="nav-cta">
      <a href="contact.php" class="btn btn-gold">Book Site Visit</a>
      <button class="hamburger" aria-label="Toggle menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<div class="drawer-overlay"></div>
<nav class="mobile-drawer">
  <a href="index.php">Home</a>
  <a href="about.php">About</a>
  <a href="project.php">Project</a>
  <a href="specifications.php">Specifications</a>
  <a href="gallery.php">Gallery</a>
  <a href="location.php">Location</a>
  <a href="contact.php">Contact</a>
  <a href="contact.php" class="btn btn-gold" style="margin-top:10px;">Book Site Visit</a>
</nav>

<section class="page-intro">
  <div class="container page-intro-grid">
    <div class="page-intro-text reveal-left">
      <p class="breadcrumb"><a href="index.php">Home</a> / Gallery</p>
      <span class="eyebrow">In Pictures</span>
      <h1>Gallery</h1>
      <p>Explore The Nest through its architecture, amenities, ongoing construction and breathtaking night views.</p>
    </div>
    <div class="page-intro-media reveal-right">
      <div class="pm-main">
        <img src="images/F_1.jpg" alt="The Nest gallery preview" width="1000" height="800" fetchpriority="high" decoding="async">
      </div>
      <div class="pm-tag"><i class="fa-solid fa-images"></i><span>Exterior ·  Amenities · Night View</span></div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <span class="eyebrow center">The Nest</span>
    <h2 class="section-title center">A Closer Look</h2>
    <p class="section-sub center">Explore The Nest through its architecture, interiors, amenities, ongoing construction and breathtaking night views.</p>

    <div class="gallery-filters">
      <button class="filter-btn active" data-filter="all">All</button>
      <!-- <button class="filter-btn" data-filter="exterior">Exterior</button>-->
      <!--<button class="filter-btn" data-filter="interior">Interior</button>-->
      <!--<button class="filter-btn" data-filter="amenities">Amenities</button>-->
      <!--<button class="filter-btn" data-filter="construction">Construction</button>-->
      <button class="filter-btn" data-filter="night">Night View</button>
    </div>

    <div class="masonry">
      <div class="masonry-item" data-category="exterior">
        <img src="images/F_2.jpg" data-full="images/F_2.jpg" alt="The Nest tower exterior" loading="lazy" decoding="async">
        <div class="masonry-overlay"><span>Tower Facade</span><i class="fa-solid fa-expand"></i></div>
      </div>

      <div class="masonry-item" data-category="interior">
        <img src="images/F_3.jpg" data-full="images/F_3.jpg" alt="Living room interior at The Nest" loading="lazy" decoding="async">
        <div class="masonry-overlay"><span><!--Living Room--></span><i class="fa-solid fa-expand"></i></div>
      </div>
      <div class="masonry-item" data-category="amenities">
        <img src="images/F_4.jpg" data-full="images/F_4.jpg" alt="Terrace amenity area" loading="lazy" decoding="async">
        <div class="masonry-overlay"><span><!--Terrace Amenities--></span><i class="fa-solid fa-expand"></i></div>
      </div>
      <div class="masonry-item" data-category="night">
        <img src="images/F_6-2.jpg.jpeg" data-full="images/F_6-2.jpg.jpeg" alt="The Nest illuminated at night" loading="lazy" decoding="async">
        <div class="masonry-overlay"><span>Night View</span><i class="fa-solid fa-expand"></i></div>
      </div>
      <div class="masonry-item" data-category="construction">
        <img src="images/F_5.jpg" alt="Construction progress at The Nest" loading="lazy" decoding="async">
        <div class="masonry-overlay"><span><!--Construction Progress--></span><i class="fa-solid fa-expand"></i></div>
      </div>
    <!--<div class="masonry-item" data-category="interior">
        <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=700&auto=format&fit=crop" data-full="https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1600&auto=format&fit=crop" alt="Modern kitchen interior" loading="lazy" decoding="async">
        <div class="masonry-overlay"><span>Kitchen</span><i class="fa-solid fa-expand"></i></div>
      </div>-->
      <!--<div class="masonry-item" data-category="exterior">
        <img src="images/F_1.jpg" data-full="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop" alt="The Nest towers viewed from ground level" loading="lazy" decoding="async">
        <div class="masonry-overlay"><span>Tower View</span><i class="fa-solid fa-expand"></i></div>
      </div>-->
      <div class="masonry-item" data-category="amenities">
        <img src="images/F_2.jpg" data-full="images/F_2.jpg" alt="Fitness amenity space" loading="lazy" decoding="async">
        <div class="masonry-overlay"><span><!--Fitness Area--></span><i class="fa-solid fa-expand"></i></div>
      </div>
     <!-- <div class="masonry-item" data-category="interior">
        <img src="https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?q=80&w=700&auto=format&fit=crop" data-full="https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?q=80&w=1600&auto=format&fit=crop" alt="Bathroom interior finishing" loading="lazy" decoding="async">
        <div class="masonry-overlay"><span>Bathroom Finish</span><i class="fa-solid fa-expand"></i></div>
      </div>-->
      <!--  <div class="masonry-item" data-category="night">
        <img src="https://images.unsplash.com/photo-1521783988139-89397d761dce?q=80&w=700&auto=format&fit=crop" data-full="https://images.unsplash.com/photo-1521783988139-89397d761dce?q=80&w=1600&auto=format&fit=crop" alt="Nagpur skyline near The Nest at night" loading="lazy" decoding="async">
        <div class="masonry-overlay"><span>Skyline at Dusk</span><i class="fa-solid fa-expand"></i></div>
      </div>-->
     <!--   <div class="masonry-item" data-category="construction">
        <img src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=700&auto=format&fit=crop" data-full="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1600&auto=format&fit=crop" alt="RCC structure under construction" loading="lazy" decoding="async">
        <div class="masonry-overlay"><span>RCC Structure</span><i class="fa-solid fa-expand"></i></div>
      </div> -->
     <!--  <div class="masonry-item" data-category="exterior">
        <img src="images/F_4.jpg" data-full="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop" alt="Modern building exterior architecture" loading="lazy" decoding="async">
        <div class="masonry-overlay"><span>Architecture Detail</span><i class="fa-solid fa-expand"></i></div>
      </div> -->
      <!-- <div class="masonry-item" data-category="interior">
        <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=700&auto=format&fit=crop" data-full="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop" alt="Bedroom interior at The Nest" loading="lazy" decoding="async">
        <div class="masonry-overlay"><span>Bedroom</span><i class="fa-solid fa-expand"></i></div>
      </div>-->
     <!--  <div class="masonry-item" data-category="amenities">
      <img src="images/F_5.jpg" data-full="https://images.unsplash.com/photo-1519874179391-27f83e2b4de4?q=80&w=1600&auto=format&fit=crop" alt="Landscaped open green space" loading="lazy" decoding="async">
        <div class="masonry-overlay"><span>Open Green Space</span><i class="fa-solid fa-expand"></i></div>
      </div>-->
     <!--  <div class="masonry-item" data-category="night">
        <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=700&auto=format&fit=crop" data-full="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop" alt="Residential towers illuminated at night" loading="lazy" decoding="async">
        <div class="masonry-overlay"><span>Towers by Night</span><i class="fa-solid fa-expand"></i></div>
      </div>-->
    </div>
  </div>
</section>

<!-- Lightbox -->
<div class="lightbox">
  <button class="lightbox-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
  <button class="lightbox-prev" aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>
  <img src="" alt="">
  <button class="lightbox-next" aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button>
</div>

<section class="section-alt">
  <div class="container center" style="max-width:720px;">
    <span class="eyebrow center">Liked What You Saw</span>
    <h2 class="section-title">Schedule Your Site Visit</h2>
    <p class="section-sub center">Nothing compares to experiencing The Nest in person. Book a visit at your convenience.</p>
    <a href="contact.php" class="btn btn-royal">Book Site Visit</a>
  </div>
</section>

<footer>
  <div class="container footer-grid">
    <div class="footer-brand">
      <span class="brand-logo-chip footer-logo-chip"><img src="images/blue-sparrow-logo.png" alt="Blue Sparrow Properties" class="brand-logo" width="396" height="141" loading="lazy" decoding="async"></span>
      <p>Blue Sparrow Properties Pvt. Ltd. builds premium residential communities rooted in transparency, timely delivery and uncompromising quality.</p>
      <div class="social-icons">
        <a href="https://www.facebook.com/p/Blue-Sparrow-61555993690655/" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/bluesparrowproperties/" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
       <!-- <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>-->
       <!--  <a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>-->
      </div>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="index.php">Home</a></li>
        <li><a href="about.php">About</a></li>
        <li><a href="specifications.php">Specifications</a></li>
        <li><a href="contact.php">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Project</h4>
      <ul>
        <li><a href="project.php">The Nest Overview</a></li>
        <li><a href="gallery.php">Gallery</a></li>
        <li><a href="location.php">Location</a></li>
        <li><a href="contact.php">Book Site Visit</a></li>
      </ul>
    </div>
    <div class="footer-col footer-map">
      <h4>Find Us</h4>
      <iframe data-src="https://www.google.com/maps?q=Dabha+Square,+Nagpur&output=embed" loading="lazy" title="The Nest location map" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
  <div class="container footer-bottom">
    <span>&copy; <span id="year"></span> Blue Sparrow Properties Pvt. Ltd. All rights reserved.</span>
    <span>The Nest — Dabha Square, Nagpur, Maharashtra</span>
  </div>
</footer>

<div class="float-btns">
  <a href="https://wa.me/917972096750" class="float-btn fb-whatsapp" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
  <a href="tel:+917972096750" class="float-btn fb-call" aria-label="Call us"><i class="fa-solid fa-phone"></i></a>
  <button class="float-btn fb-top" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>
</div>

<script>document.getElementById('year').textContent = new Date().getFullYear();</script>
<script src="js/main.js"></script>
<script src="js/gallery.js"></script>
<script src="js/map.js"></script>
</body>
</html>