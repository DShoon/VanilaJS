function resize() {
  if (window.innerWidth < 650) {
    document.body.style.background = "skyblue";
  } else if (window.innerWidth >= 650 && window.innerWidth < 1000) {
    document.body.style.background = "purple";
  } else {
    document.body.style.background = "orange";
  }
}

window.onresize = resize;
