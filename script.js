const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
const languageToggle = document.getElementById("languageToggle");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Tutup navigasi" : "Buka navigasi");
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka navigasi");
  });
});

let currentLanguage = "id";

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "id" ? "en" : "id";
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-id][data-en]").forEach((element) => {
    const value = element.dataset[currentLanguage];
    if (value !== undefined) element.innerHTML = value;
  });

  languageToggle.textContent = currentLanguage === "id" ? "EN" : "ID";
});
