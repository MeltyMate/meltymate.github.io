document.addEventListener("DOMContentLoaded", function () {
  var currentPage = document.body.id;
  var currentLink = document.querySelector(`.flex-container a[href='${currentPage}.html']`);
  if (currentLink) {
    currentLink.classList.add("active");
  }
});

function openGallery(category) {
  // Construct the gallery page URL based on the selected category
  const galleryPageURL = `gallery${category}.html`;

  // Navigate to the constructed gallery page
  window.location.href = galleryPageURL;
}

function toggleImageSize(img) {
  img.classList.toggle('enlarged');
}
