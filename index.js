const readMoreBtn = document.querySelector(".btn-more");
const readMoreImg = document.querySelector(".read-more-img");
const cards = document.querySelectorAll(".hidden-brand");
const HIDE = "Скрыть";
const SHOW_ALL = "Показать все";

readMoreBtn.addEventListener("click", function () {
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    if (card.classList.contains("hidden-brand")) {
      card.classList.remove("hidden-brand");
      card.classList.add("visible-brand");
      readMoreBtn.value = HIDE;
      readMoreImg.style.transform = "rotate(180deg)";
    } else {
      card.classList.remove("visible-brand");
      card.classList.add("hidden-brand");
      readMoreBtn.value = SHOW_ALL;
      readMoreImg.style.transform = null;
    }
  }
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
