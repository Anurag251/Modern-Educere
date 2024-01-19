// side nav
const sideNavButton = document.querySelector(".side-nav-button");
const sideNav = document.querySelector(".side-nav");
const sideNavBg = document.querySelector(".side-nav-bg");
const sideNavClose = document.querySelector(".side-nav-close");
const sideNavItems = document.querySelectorAll(".side-nav .nav-button");

sideNavButton.addEventListener("click", () => {
  sideNav.classList.add("active");
});

const closeSideNav = () => {
  sideNav.classList.remove("active");
};

sideNavClose.addEventListener("click", closeSideNav);
sideNavBg.addEventListener("click", closeSideNav);

sideNavItems.forEach((sideNavItem) => {
  sideNavItem.addEventListener("click", closeSideNav);
});

// filter food menu
$(document).ready(function () {
  $(".food-menu-item").not(".DataBreakfast").hide("1000");
});

$(document).ready(function () {
  $(".food-menu-area .food-menu-categories li").click(function () {
    const value = $(this).attr("data-filters");

    $(".food-menu-item")
      .not("." + value)
      .hide("1000");
    $(".food-menu-item")
      .filter("." + value)
      .show("1000");
  });

  $(".food-menu-area .food-menu-categories li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

// dynamic color
function hexToRgb(hex) {
  hex = hex.replace(/^#/, "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r}, ${g}, ${b}`;
}

const priColor = "#55a960";
const secColor = "#022c46";
const priRGB = hexToRgb(priColor);
const secRGB = hexToRgb(secColor);

document.documentElement.style.setProperty("--pri", priColor);
document.documentElement.style.setProperty("--sec", secColor);
document.documentElement.style.setProperty("--prirgb", priRGB);
document.documentElement.style.setProperty("--secrgb", secRGB);

// video Popup
const videoPopup = document.querySelector(".video-popup");
const videoPopupOpen = document.querySelector(".video-play-button");
const videoPopupBg = document.querySelector(".popup-bg");
const videoPopupClose = document.querySelector(".popup-close");

videoPopupOpen.addEventListener("click", () => {
  videoPopup.classList.add("active");
  videoPopup.querySelector("iframe").style.display = "block";
});

videoPopupBg.addEventListener("click", () => {
  videoPopup.classList.remove("active");
  videoPopup.querySelector("iframe").style.display = "none";
});

videoPopupClose.addEventListener("click", () => {
  videoPopup.classList.remove("active");
  videoPopup.querySelector("iframe").style.display = "none";
});
