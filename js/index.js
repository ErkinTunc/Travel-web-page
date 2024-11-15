let heroContent = document.getElementById("hero-content");

console.dir(window);

function removeHeroContent(){
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
