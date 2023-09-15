const body = document.querySelector("#body");
const navT = document.querySelector(".navbar__top");
const allEli = document.querySelectorAll(".icon__nav");
function onNight() {
  const nighted = document.querySelector(".bg-gray-700");
  if (nighted) {
    body.classList.remove("bg-gray-700");
    navT.classList.remove("bg-black");
    allEli.forEach((elementi) => {
      elementi.classList.remove("text-white");
    });
  } else {
    body.classList.add("bg-gray-700");
    navT.classList.add("bg-black");
    allEli.forEach((elementi) => {
      elementi.classList.add("text-white");
    });
  }
}
const elem = document.documentElement;
const zoomFullSc = document.querySelector(".zoomScreen");
function openFullscreen() {
  const iszoomFullSc = document.querySelector(".zoomScreen.isZoomFullScreen");
  if (iszoomFullSc && document.exitFullscreen) {
    document.exitFullscreen();
    zoomFullSc.classList.remove("isZoomFullScreen");
  } else if (elem.requestFullscreen) {
    elem.requestFullscreen();
    zoomFullSc.classList.add("isZoomFullScreen");
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}
