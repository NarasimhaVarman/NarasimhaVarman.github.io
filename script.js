/* ============================= */
/* THUMBNAIL CAROUSEL */
/* ============================= */

const track = document.getElementById("carouselTrack");
const items = document.querySelectorAll(".item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

function getVisibleItems() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 1000) return 2;
  return 3;
}

function updateCarousel() {
  const visible = getVisibleItems();
  const total = items.length;
  const maxIndex = total - visible;

  if (index < 0) index = 0;
  if (index > maxIndex) index = maxIndex;

  const itemWidth = items[0].offsetWidth + 40;
  track.style.transform = `translateX(-${index * itemWidth}px)`;

  if (total <= visible) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = index === 0 ? "none" : "block";
    nextBtn.style.display = index >= maxIndex ? "none" : "block";
  }
}

nextBtn.addEventListener("click", () => {
  index++;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index--;
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);

updateCarousel();



/* ============================= */
/* SHORTS CAROUSEL */
/* ============================= */

const shortsTrack = document.getElementById("shortsTrack");
const shortItems = document.querySelectorAll(".short-item");
const shortPrevBtn = document.getElementById("shortPrevBtn");
const shortNextBtn = document.getElementById("shortNextBtn");

let shortIndex = 0;

function getShortVisibleItems() {
  if (window.innerWidth <= 1000) return 1;
  return 2;
}

function updateShortCarousel() {
  const visible = getShortVisibleItems();
  const total = shortItems.length;
  const maxIndex = total - visible;

  if (shortIndex < 0) shortIndex = 0;
  if (shortIndex > maxIndex) shortIndex = maxIndex;

  const itemWidth = shortItems[0].offsetWidth + 40;
  shortsTrack.style.transform = `translateX(-${shortIndex * itemWidth}px)`;

  if (total <= visible) {
    shortPrevBtn.style.display = "none";
    shortNextBtn.style.display = "none";
  } else {
    shortPrevBtn.style.display = shortIndex === 0 ? "none" : "block";
    shortNextBtn.style.display = shortIndex >= maxIndex ? "none" : "block";
  }
}

shortNextBtn.addEventListener("click", () => {
  shortIndex++;
  updateShortCarousel();
});

shortPrevBtn.addEventListener("click", () => {
  shortIndex--;
  updateShortCarousel();
});

window.addEventListener("resize", updateShortCarousel);

updateShortCarousel();

/* ============================= */
/* POSTERS CAROUSEL SCRIPT */
/* ============================= */

const postersTrack = document.getElementById("postersTrack");
const posterItems = document.querySelectorAll(".poster-item");
const posterPrevBtn = document.getElementById("posterPrevBtn");
const posterNextBtn = document.getElementById("posterNextBtn");

let posterIndex = 0;

function getPosterVisibleItems() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 1000) return 2;
  return 3;
}

function updatePosterCarousel() {
  const visible = getPosterVisibleItems();
  const total = posterItems.length;
  const maxIndex = total - visible;

  if (posterIndex < 0) posterIndex = 0;
  if (posterIndex > maxIndex) posterIndex = maxIndex;

  const itemWidth = posterItems[0].offsetWidth + 40;
  postersTrack.style.transform = `translateX(-${posterIndex * itemWidth}px)`;

  if (total <= visible) {
    posterPrevBtn.style.display = "none";
    posterNextBtn.style.display = "none";
  } else {
    posterPrevBtn.style.display = posterIndex === 0 ? "none" : "block";
    posterNextBtn.style.display = posterIndex >= maxIndex ? "none" : "block";
  }
}

posterNextBtn.addEventListener("click", () => {
  posterIndex++;
  updatePosterCarousel();
});

posterPrevBtn.addEventListener("click", () => {
  posterIndex--;
  updatePosterCarousel();
});

window.addEventListener("resize", updatePosterCarousel);

updatePosterCarousel();