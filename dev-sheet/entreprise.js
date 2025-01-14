const logoRemax = document.getElementById("logo-remax");
const logoEurodislog = document.getElementById("logo-eurodislog");
const remaxContent = document.getElementById("remax-content");
const eurodislogContent = document.getElementById("eurodislog-content");

function switchContent(contentToShow) {
  remaxContent.style.display = "none";
  eurodislogContent.style.display = "none";

  contentToShow.style.display = "block";
}

logoRemax.addEventListener("click", () => {
  switchContent(remaxContent);
});

logoEurodislog.addEventListener("click", () => {
  switchContent(eurodislogContent);
});

document.addEventListener("DOMContentLoaded", () => {
  remaxContent.style.display = "block";
  eurodislogContent.style.display = "none";
});
