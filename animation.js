const anchors = document.querySelectorAll("header a[href*='#']");

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockId = anchor.getAttribute("href");
    document.getElementById(blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}



document.querySelectorAll("a.yakor").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 0;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});
