const cover = document.querySelector("#cover"); //ngambil judul doang
const vid = document.querySelector("video");
const title = document.getElementById("title");

const coverCon = document.querySelector("#cover-container"); //ngambil judul + poster + prolog
const slider2 = document.querySelector("#slider-2"); //ngambil slider 2

const dinamisHeight = () => {
  const pageWidth = window.innerWidth;
  const pageHeight = window.innerHeight;

  const newHeight = (pageWidth / pageHeight) * 360;

  cover.style.height = newHeight + "px";
  vid.style.height = newHeight + "px";

  if (pageWidth <= 768) {
    coverCon.classList.remove("col-8"); //ngeremove col boostrap biar layout balik semula
    slider2.classList.remove("col-4");

    document.querySelector("body").classList.remove("row"); //ngeremove row biar jadi satu colom doang
    vid.style.width = 100 + "%";
  } else {
    coverCon.classList.add("col-8"); //add col biar jadi 2 colom
    slider2.classList.add("col-4");

    document.querySelector("body").classList.add("row"); //add row biar bisa pake col

    vid.style.width = cover.clientWidth + "px";
    vid.style.height = cover.clientHeight + "px"; //nyamain ukuran video sama poster
  }
};

dinamisHeight();
window.addEventListener("resize", dinamisHeight);

// Tombol play
const play = document.querySelector("#play-button");

play.addEventListener("click", () => {
  vid.classList.remove("d-none");
  vid.classList.add("d-block"); // Menampilkan video

  title.style.display = "none"; // hide title
  cover.style.backgroundImage = "none"; // hide background ketika video diputar

  if (!vid.play()) {
    vid.play(); // play video
  }
});

// munculin title ketika video selesai
vid.addEventListener("ended", () => {
  title.style.display = "block"; // munculin title
});

// hide video ketika video selesai
vid.addEventListener("ended", () => {
  vid.classList.remove("d-block");
  vid.classList.add("d-none");

  cover.style.backgroundImage = ""; // munculin background ketika video selesai
});
