export const handleHeaderTransparency = () => {
  const header_mobile = document.getElementById("header-renderized-mobile");
  const header_desktop = document.getElementById("header-renderized-desktop");

  if (!header_mobile || !header_desktop) {
    console.warn("Headers não encontrados.");
    return;
  }

  const isHomePage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

  if (window.scrollY === 0 && isHomePage) {
    header_mobile.classList.add("apply__transparency");
    header_desktop.classList.add("apply__transparency");
  } else {
    header_mobile.classList.remove("apply__transparency");
    header_desktop.classList.remove("apply__transparency");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  handleHeaderTransparency();
});
