import "flowbite";
const mobileMenuButton = document.querySelector('#mobile-menu-button');
const mobileMenu = document.querySelector('#mobile-menu');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    const isExpanded =
      mobileMenuButton.getAttribute('aria-expanded') === 'true';

    mobileMenu.classList.toggle('hidden');

    mobileMenuButton.setAttribute(
      'aria-expanded',
      String(!isExpanded)
    );

    mobileMenuButton.setAttribute(
      'aria-label',
      isExpanded ? 'Open menu' : 'Close menu'
    );
  });
}


// ===================================
// NOVA - Product Interactions
// ===================================

// Wishlist buttons
document.querySelectorAll("[data-wishlist-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const isActive = button.getAttribute("aria-pressed") === "true";

    button.setAttribute("aria-pressed", String(!isActive));
    button.textContent = isActive ? "♡" : "♥";

    button.classList.toggle("text-red-600", !isActive);
  });
});

// Add to Cart buttons
document.querySelectorAll("[data-add-to-cart]").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.productName;
    const cartCount = document.querySelector("[data-cart-count]");

    if (cartCount) {
      const currentCount = Number(cartCount.textContent) || 0;
      cartCount.textContent = currentCount + 1;
    }

    const originalText = button.textContent;
    button.textContent = "Added to Cart ✓";

    button.classList.add("bg-stone-600");

    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove("bg-stone-600");
    }, 1200);

    console.log(`${productName} added to cart`);
  });
});

// ===================================
// NOVA - Newsletter Form
// ===================================

const newsletterForm = document.querySelector("#newsletter-form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = document.querySelector("#newsletter-email");
    const message = document.querySelector("#newsletter-message");

    if (!emailInput.checkValidity()) {
      emailInput.reportValidity();
      return;
    }

    message.textContent = "Thank you for subscribing to NOVA!";
    newsletterForm.reset();
  });
}

// Language Selector
const languageButton = document.querySelector("#language-button");
const languageMenu = document.querySelector("#language-menu");
const languageSelector = document.querySelector("#language-selector");
const languageArrow = document.querySelector("#language-arrow");

if (languageButton && languageMenu) {

  // تشخیص زبان صفحه فعلی
  const currentLang = document.documentElement.lang;

  const currentLanguage = document.querySelector("#current-language");
  const englishCheck = document.querySelector("#english-check");
  const persianCheck = document.querySelector("#persian-check");

  if (currentLang === "fa") {
    currentLanguage.textContent = "FA";
    persianCheck?.classList.remove("hidden");
  } else {
    currentLanguage.textContent = "EN";
    englishCheck?.classList.remove("hidden");
  }

  // باز و بسته کردن منو
  languageButton.addEventListener("click", () => {
    const isOpen = !languageMenu.classList.contains("hidden");

    languageMenu.classList.toggle("hidden", isOpen);
    languageButton.setAttribute("aria-expanded", String(!isOpen));
    languageArrow?.classList.toggle("rotate-180", !isOpen);
  });

  // بستن منو با کلیک خارج از آن
  document.addEventListener("click", (event) => {
    if (!languageSelector.contains(event.target)) {
      languageMenu.classList.add("hidden");
      languageButton.setAttribute("aria-expanded", "false");
      languageArrow?.classList.remove("rotate-180");
    }
  });

  // بستن منو با کلید Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      languageMenu.classList.add("hidden");
      languageButton.setAttribute("aria-expanded", "false");
      languageArrow?.classList.remove("rotate-180");
    }
  });
}
