document.addEventListener("DOMContentLoaded", function () {
    var currentPage = document.body.id;
    var currentLink = document.querySelector(`.flex-container a[href='${currentPage}.html']`);
    if (currentLink) {
      currentLink.classList.add("active");
    }
  });
  