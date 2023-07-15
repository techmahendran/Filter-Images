const btns = document.querySelectorAll(".btn button");
const gallerys = document.querySelectorAll(".gallery");

for (let index = 0; index < btns.length; index++) {
  const btn = btns[index];
  btn.addEventListener("click", btnActive);
}

function btnActive(e) {
  const isActive = document.querySelector(".active");

  isActive.classList.remove("active");

  e.target.classList.add("active");

  for (let index = 0; index < gallerys.length; index++) {
    const gallery = gallerys[index];

    gallery.classList.add("hide");

    if (
      gallery.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      gallery.classList.remove("hide");
    }
  }
}
