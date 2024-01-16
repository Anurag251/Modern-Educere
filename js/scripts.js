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
