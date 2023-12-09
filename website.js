document.addEventListener("DOMContentLoaded", function () {
  try {
    highlightActivePage();
  } catch (error) {
    console.error("Error in highlightActivePage:", error);
  }
});

function highlightActivePage() {
  try {
    var currentPage = document.body.id;
    var currentLink = document.querySelector(`.flex-container a[href='${currentPage}.html']`);
    if (currentLink) {
      currentLink.classList.add("active");
    }
  } catch (error) {
    console.error("Error in highlightActivePage:", error);
  }
}

function openGallery(category) {
  try {
    let galleryPageURL;

    switch (category) {
      case 'goKart':
        galleryPageURL = 'https://meltymate.github.io/GallerygoKart.html';
        break;
      case 'Sim':
        galleryPageURL = 'https://meltymate.github.io/GallerySim.html';
        break;
      case 'Motorbike':
        galleryPageURL = 'https://meltymate.github.io/GalleryMotorbike.html';
        break;
      case 'rc':
        galleryPageURL = "https://meltymate.github.io/GalleryRC.html";
        break;
    }

    if (galleryPageURL) {
      window.location.href = galleryPageURL;
    }
  } catch (error) {
    console.error("Error in openGallery:", error);
  }
}

function toggleImageSize(img) {
  try {
    img.classList.toggle('enlarged');
  } catch (error) {
    console.error("Error in toggleImageSize:", error);
  }
}
