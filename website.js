document.addEventListener("DOMContentLoaded", function () {
  highlightActivePage();
});

function highlightActivePage() {
  var currentPage = document.body.id;
  var currentLink = document.querySelector(`.flex-container a[href='${currentPage}.html']`);
  if (currentLink) {
    currentLink.classList.add("active");
  }
}

function openGallery(category) {
  const galleryPageURL = `gallery${category}.html`;
  window.location.href = galleryPageURL;
}

function toggleImageSize(img) {
  img.classList.toggle('enlarged');
}

function openGallery(category) {
  if (category === 'goKart') {
    const galleryPageURL = 'https://meltymate.github.io/GallerygoKart.html';
    window.location.href = galleryPageURL;
  }
  // Add similar conditions for other gallery categories if needed
}
