document.addEventListener("DOMContentLoaded", () => {
  const navHTML = `
    <nav style="width: 100%; max-width: 900px; padding: 24px 20px; display: flex; justify-content: space-between; box-sizing: border-box; margin: 0 auto;">
      <div style="color: #ec4899; font-weight: bold; font-size: 20px; letter-spacing: 2px;">STUDIO SHA.</div>
      <div style="display: flex; gap: 15px; flex-wrap: wrap;">
        <a href="index.html" style="color: #d1d5db; text-decoration: none; font-weight: 500;">Home</a>
        <a href="feed.html" style="color: #d1d5db; text-decoration: none; font-weight: 500;">Feed</a>
        <a href="shop.html" style="color: #d1d5db; text-decoration: none; font-weight: 500;">Shop</a>
        <a href="hire.html" style="color: #d1d5db; text-decoration: none; font-weight: 500;">Hire Me</a>
      </div>
    </nav>
  `;
  
  // Finds the empty div in our HTML files and injects the menu
  document.getElementById("nav-container").innerHTML = navHTML;
});
