const cards = document.querySelector(".cards");

let isAutoScrolling = false;

window.addEventListener("scroll", () => {

  if (isAutoScrolling) return;

  const limit = cards.offsetTop;

  // If user scrolls above cards → gently push back once
  if (window.scrollY < limit - 5) {

    isAutoScrolling = true;

    window.scrollTo({
      top: limit,
      behavior: "smooth"
    });

    // allow scrolling again after animation finishes
    setTimeout(() => {
      isAutoScrolling = false;
    }, 500);

  }

});


/* Touch devices */
window.addEventListener("touchmove", (e) => {

  if (!lockEnabled) return;

  const limit = cards.offsetTop;

  if (window.scrollY <= limit) {
    e.preventDefault();
    window.scrollTo({ top: limit });
  }

}, { passive: false });


/* Toggle animation class */
window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }

});


/* Intro auto scroll */
window.addEventListener("load", () => {

  setTimeout(() => {

    lockEnabled = false; // disable lock during auto scroll

    window.scrollTo({
      top: cards.offsetTop,
      behavior: "smooth"
    });

    // Re-enable lock after animation finishes
    setTimeout(() => {
      lockEnabled = true;
    }, 1200);

  }, 1200);

});


const cardBoxes = document.querySelectorAll(".cards h2");

cardBoxes.forEach(card => {

  card.addEventListener("click", () => {

    card.classList.remove("card-pop"); 
    void card.offsetWidth; // forces animation reset
    card.classList.add("card-pop");

  });

});