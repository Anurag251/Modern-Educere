Fancybox.bind("[data-fancybox]");

const adsBannerImages = document.querySelectorAll(
  ".gallery-section .image-list a"
)[0];
const viewImageButton = document.querySelector("#viewGalleryButton");

if (adsBannerImages) {
  viewImageButton.addEventListener("click", () => {
    adsBannerImages.click();
  });
}

// faq
const faqs = document.querySelectorAll(".faqs-list .item");

if (faqs.length) {
  faqs.forEach((faq, idx) => {
    const faqButton = faq.querySelector(".item-title");

    faqButton.addEventListener("click", () => {
      faqs.forEach((otherFaq) => {
        if (otherFaq !== faq) {
          otherFaq.classList.remove("active");
        }
      });
      faq.classList.toggle("active");
    });
  });
}

// input shring code
let formInputLabels = document.querySelectorAll(".form-input-label");
let customInputs = document.querySelectorAll(".contact-form .form-input");
let customInputLabels = document.querySelectorAll(
  ".contact-form .form-input-label"
);

let customInputsBook = document.querySelectorAll(
  ".ticket-booking-area .form-input"
);
let customInputLabelsBook = document.querySelectorAll(
  ".ticket-booking-area .form-input-label"
);

if (customInputsBook.length) {
  customInputsBook.forEach((customInput, idx) => {
    if (customInput.value.length) {
      customInputLabelsBook[idx].classList.add("shrink");
    }
  });
}

if (customInputs.length) {
  customInputs.forEach((customInput, idx) => {
    if (customInput.value.length) {
      customInputLabels[idx].classList.add("shrink");
    }
  });
}

const getData = (data) => {
  formInputLabels.forEach((formInputLabel, idx) => {
    let dataAttributeName = data.getAttribute("name");
    let labelAttributeName = formInputLabel.getAttribute("for");

    if (dataAttributeName === labelAttributeName) {
      if (data.getAttribute("name") === dataAttributeName) {
        if (data.value.length) {
          formInputLabel.classList.add("shrink");
        } else {
          formInputLabel.classList.remove("shrink");
        }
      }
    }
  });
};

// ticket-booking-popup
const ticketBookingPopup = document.querySelector(".ticket-booking-popup");
const ticketBookingPopupClose = document.querySelector(".ticket-booking-close");
const ticketBookingPopupBg = document.querySelector(
  ".ticket-booking-popup-background"
);
const bookButtons = document.querySelectorAll("#bookButton");

bookButtons.forEach((bookButton) => {
  bookButton.addEventListener("click", () => {
    ticketBookingPopup.classList.add("active");
  });
});

ticketBookingPopupClose.addEventListener("click", () => {
  ticketBookingPopup.classList.remove("active");
});

ticketBookingPopupBg.addEventListener("click", () => {
  ticketBookingPopup.classList.remove("active");
});

// strings to tag
const contactInfos = document.querySelector(".contact-infos");

if (contactInfos) {
  const escapedHTML = contactInfos.innerHTML;

  const decodedHTML = escapedHTML.replace(/&lt;/g, "<").replace(/&gt;/g, ">");

  contactInfos.innerHTML = decodedHTML;
}

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
