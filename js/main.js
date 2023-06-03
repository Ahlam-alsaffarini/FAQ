let arrows = document.querySelectorAll(".content .txt img");

arrows.forEach((arrow) =>
  arrow.addEventListener("click", (even) => {
    if (even.target.parentElement.classList.contains("active")) {
      even.target.parentElement.classList.remove("active");
    } else {
      even.target.parentElement.parentElement
        .querySelectorAll(".active")
        .forEach((e) => {
          e.classList.remove("active");
        });
      even.target.parentElement.classList.toggle("active");
    }
  })
);

setTimeout(() => {
  document.querySelector(".FAQ").style.opacity = "1";
}, 500);
