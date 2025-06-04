document.getElementById('searchBtn').addEventListener('click', function() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const films = document.querySelectorAll('#filmList .film');

  films.forEach(film => {
    const title = film.textContent.toLowerCase();
    if(title.includes(input)) {
      film.style.display = 'block';
    } else {
      film.style.display = 'none';
    }
  });
});
