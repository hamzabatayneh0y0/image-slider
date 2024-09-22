let next = document.querySelector(".next");
let pre = document.querySelector(".pre");
let img = document.querySelectorAll(".img");
let numbers = document.querySelectorAll("span[data-num]");

let currentimg = 1;
next.onclick = () => {
  currentimg++;
  if (currentimg !== img.length + 1) {
    numbers.forEach((el) => {
      el.classList.remove("activ");
    });
    img.forEach((img) => {
      img.style.display = "none";
      document;
      img.classList.remove("anime");
      img.classList.remove("anime-r");

      if (+img.dataset.num === currentimg) {
        img.style.display = "block";
        img.classList.add("anime");
        document
          .querySelector(`span[data-num="${currentimg}"]`)
          .classList.add("activ");
      }
    });
  } else {
    currentimg = 1;
    numbers.forEach((el) => {
      el.classList.remove("activ");
    });
    img.forEach((img) => {
      img.style.display = "none";
      img.classList.remove("anime");
      img.classList.remove("anime-r");

      if (+img.dataset.num === currentimg) {
        img.style.display = "block";
        img.classList.add("anime");
        document
          .querySelector(`span[data-num="${currentimg}"]`)
          .classList.add("activ");
      }
    });
  }
};

pre.onclick = () => {
  currentimg--;
  if (currentimg !== 0) {
    numbers.forEach((el) => {
      el.classList.remove("activ");
    });
    img.forEach((img) => {
      img.style.display = "none";
      document;
      img.classList.remove("anime-r");
      img.classList.remove("anime");

      if (+img.dataset.num === currentimg) {
        img.style.display = "block";
        img.classList.add("anime-r");

        document
          .querySelector(`span[data-num="${currentimg}"]`)
          .classList.add("activ");
      }
    });
  } else {
    currentimg = 5;
    numbers.forEach((el) => {
      el.classList.remove("activ");
    });
    img.forEach((img) => {
      img.style.display = "none";
      img.classList.remove("anime-r");
      img.classList.remove("anime");

      if (+img.dataset.num === currentimg) {
        img.style.display = "block";
        document;
        img.classList.add("anime-r");

        document
          .querySelector(`span[data-num="${currentimg}"]`)
          .classList.add("activ");
      }
    });
  }
};
