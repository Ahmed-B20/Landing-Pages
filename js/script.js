// start nav
let navToggle = document.getElementById("nav-toggle");
let nav = document.querySelector("nav");

navToggle.onclick = function () {
  navToggle.classList.toggle("fa-times");
  nav.classList.toggle("active");
};

window.onscroll = function () {
  navToggle.classList.remove("fa-times");
  nav.classList.remove("active");
};

let items = document.querySelectorAll(".one");

items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".one.active").classList.remove("active");
    item.classList.add("active");
  });
});
// end nav

// start gallery
let but = document.querySelectorAll(".two");

but.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".two.active").classList.remove("active");
    item.classList.add("active");
  });
});

let galleryBut = document.querySelectorAll("[data-attr]");
let galleryBox = document.querySelectorAll(".box.all");

galleryBut.forEach((el) => {
  el.addEventListener("click", () => {
    let x = el.getAttribute("data-attr");
    if (x == "all") {
      galleryBox.forEach((e) => {
        document.querySelectorAll(".box.none").forEach((e) => {
          e.classList.remove("none");
        });
        e.classList.add("active");
      });
    } else {
      document.querySelectorAll(".box.all.active").forEach((e) => {
        e.classList.remove("active");
      });

      document.querySelectorAll(`.box.all.${x}`).forEach((e) => {
        e.classList.add("active");
      });
    }
  });
});
// end gallery
