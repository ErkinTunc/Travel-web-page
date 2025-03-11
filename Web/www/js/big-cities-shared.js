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
let heroSection = document.getElementById("hero");
let heroContent = document.getElementById("hero-content");
let heroVideo = document.querySelector("video");
let headerContent = document.querySelector("header");
let parallaxCaption = document.querySelectorAll(".caption"); //array

console.dir(window);
console.dir(heroContent);
console.dir(headerContent);
console.dir(parallaxCaption);

function removeHeroContent() {
  if (window.location.hash === "#side-drawer") {
    // Perform actions when URL hash changes to #side-drawer
    console.log("URL has changed to #side-drawer");
    heroSection.classList.remove("position-relative");
    heroSection.classList.add("position-static");
    heroContent.classList.add("display-none");
    heroVideo.classList.add("display-none");
    headerContent.classList.add("display-none");
    for (i = 0; i < parallaxCaption.length; i++) {
      parallaxCaption[i].classList.add("display-none");
    }
  } else {
    // Handle other URL cases
    console.log("URL is different than #side-drawer");
    heroSection.classList.remove("position-static");
    heroSection.classList.add("position-relative");
    heroContent.classList.remove("display-none");
    headerContent.classList.remove("display-none");
    heroVideo.classList.remove("display-none");
    for (i = 0; i < parallaxCaption.length; i++) {
      parallaxCaption[i].classList.remove("display-none");
    }
  }
}

window.addEventListener("hashchange", removeHeroContent);
