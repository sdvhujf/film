const categories = {
    action: [
      { title: "Hyena | Dwayne Johnson | New Action Movie 2024 |", youtubeLink: "https://www.youtube.com/embed/itRrL-rDIYg" },
      { title: "Tiger Shroff Action Hindi Movie | Ganapath", youtubeLink: "https://www.youtube.com/embed/rIaAGaEHP8s" },
      { title: "2024 Action Movie: The gang hired", youtubeLink: "https://www.youtube.com/embed/bqym0hsJQbM" },
    ],
    comedy: [
      { title: "Comedy Movie 1", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID4" },
      { title: "Comedy Movie 2", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID5" },
      { title: "Comedy Movie 3", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID6" },
    ],
    drama: [
      { title: "Drama Movie 1", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID7" },
      { title: "Drama Movie 2", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID8" },
      { title: "Drama Movie 3", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID9" },
    ],
    thriller: [
      { title: "Thriller Movie 1", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID10" },
      { title: "Thriller Movie 2", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID11" },
      { title: "Thriller Movie 3", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID12" },
    ],
    sciFi: [
      { title: "Sci-Fi Movie 1", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID13" },
      { title: "Sci-Fi Movie 2", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID14" },
      { title: "Sci-Fi Movie 3", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID15" },
    ],
    horror: [
      { title: "Horror Movie 1", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID16" },
      { title: "Horror Movie 2", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID17" },
      { title: "Horror Movie 3", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID18" },
    ],
    romance: [
      { title: "Romance Movie 1", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID19" },
      { title: "Romance Movie 2", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID20" },
      { title: "Romance Movie 3", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID21" },
    ],
    adventure: [
      { title: "Adventure Movie 1", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID22" },
      { title: "Adventure Movie 2", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID23" },
      { title: "Adventure Movie 3", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID24" },
    ],
    mystery: [
      { title: "Mystery Movie 1", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID25" },
      { title: "Mystery Movie 2", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID26" },
      { title: "Mystery Movie 3", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID27" },
    ],
    documentary: [
      { title: "Documentary Movie 1", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID28" },
      { title: "Documentary Movie 2", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID29" },
      { title: "Documentary Movie 3", youtubeLink: "https://www.youtube.com/embed/VIDEO_ID30" },
    ],
  };
  
  // Load movies by category dynamically
  document.addEventListener('DOMContentLoaded', () => {
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const category = event.target.dataset.category;
        const movies = categories[category] || [];
        const movieList = document.querySelector('.category-movies .movie-list');
        movieList.innerHTML = ''; // Clear previous content
        movies.forEach(movie => {
          const movieItem = document.createElement('div');
          movieItem.classList.add('movie');
          movieItem.innerHTML = `
            <iframe width="300" height="200" src="${movie.youtubeLink}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>${movie.title}</p>
          `;
          movieList.appendChild(movieItem);
        });
  
        // Close the menu when a category is selected on mobile view
        const menu = document.getElementById('menu');
        if (window.innerWidth <= 768) {
          menu.classList.remove('active'); // Hide the menu
        }
      });
    });
  
    // Hamburger Menu Toggle
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menu = document.getElementById('menu');
  
    hamburgerMenu.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  });

  // Add this to your script.js file or in a <script> tag in the index.html file
if (window.location.pathname !== '/index.html') {
    window.location.href = 'index.html'; // Redirect to index.html if not already on it
}

  