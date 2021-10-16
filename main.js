import "./style.css";

const themeBtn = document.querySelector("theme");

// Figure out system light/dark default
function getCurrentTheme() {
  let theme = window.matchMedia("(prefers-colos-scheme: dark)").matches
    ? "dark"
    : "light";
  return theme;
}
