// ============ SIDE DRAWER ================

// Get the modal and its elements
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var closeBtn = document.getElementsByClassName("close")[0];

// Choose all span elements
var spans = document.querySelectorAll(".fullscreen-img");

// For each span click
spans.forEach(function (span) {
  span.addEventListener("click", function () {
    // Show Modal
    modal.style.display = "block";

    // Get the img and caption from the span
    var imgSrc = this.getAttribute("data-img-src");
    var imgCaption = this.textContent;

    // modify the Model img and content
    modalImg.src = imgSrc;
    captionText.innerHTML = imgCaption;
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// --------------------------------------------------------------
let heroContent = document.getElementById("hero-content");

console.dir(window);

function removeHeroContent() {
  if (window.location.hash === "#side-drawer") {
    // Perform actions when URL hash changes to #side-drawer
    console.log("URL has changed to #side-drawer");
    heroContent.classList.add("hero-content-display-none");
  } else {
    // Handle other URL cases
    console.log("URL is different than #side-drawer");
    heroContent.classList.remove("hero-content-display-none");
  }
}

window.addEventListener("hashchange", removeHeroContent);
