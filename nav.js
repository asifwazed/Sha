const navHTML = `
  <style>
    .cute-nav {
      position: sticky;
      top: 20px;
      z-index: 100;
      max-width: 600px;
      margin: 20px auto 30px auto;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(10px);
      border-radius: 50px;
      display: flex;
      justify-content: space-around;
      padding: 10px 15px;
      box-shadow: 0 10px 25px rgba(236, 72, 153, 0.15);
      border: 2px solid #fce7f3;
    }
    .cute-nav a {
      text-decoration: none;
      color: #9d174d;
      font-weight: 800;
      font-size: 0.95rem;
      padding: 8px 16px;
      border-radius: 30px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .cute-nav a:hover {
      background: rgba(255, 255, 255, 0.5);
      transform: translateY(-2px);
    }
    .cute-nav a.active {
      background: #ec4899;
      color: white;
      box-shadow: 0 6px 15px rgba(236, 72, 153, 0.3);
    }
    @media (max-width: 600px) {
      .cute-nav {
        max-width: 90%;
        padding: 8px 10px;
      }
      .cute-nav a {
        font-size: 0.85rem;
        padding: 8px 12px;
      }
    }
  </style>
  <nav class="cute-nav">
    <a href="index.html">Home</a>
    <a href="explore.html">Explore</a>
    <a href="shop.html">Shop</a>
    <a href="hire.html">Hire Me</a>
  </nav>
`;

// Inject the nav into the page
document.getElementById('nav-container').innerHTML = navHTML;

// Automatically highlight the current page
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll('.cute-nav a');

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
