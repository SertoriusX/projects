const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", scrolling);
scrolling();
function scrolling() {
  const triggerBtn = window.innerHeight * (4 / 5);
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (triggerBtn > boxTop) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
