// Relationship start date: June 5, 2026
const relationshipStart = new Date("2026-06-05T00:00:00");

function updateCountdown() {
  const now = new Date();
  let diff = Math.max(0, now - relationshipStart);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById("days").textContent = days.toLocaleString();
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseBtn.addEventListener("click", () => {
  surpriseMessage.classList.toggle("hidden");
  surpriseBtn.textContent = surpriseMessage.classList.contains("hidden")
    ? "Open My Surprise ✨"
    : "A little message for you 💗";
});

const letterBtn = document.getElementById("letterBtn");
const loveLetter = document.getElementById("loveLetter");
const letterSection = document.querySelector(".letter-section");

letterBtn.addEventListener("click", () => {
  const opening = loveLetter.classList.contains("hidden");
  loveLetter.classList.toggle("hidden");
  letterSection.classList.toggle("open", opening);
  letterBtn.setAttribute("aria-expanded", String(opening));
  letterBtn.querySelector("span:last-child").textContent = opening
    ? "Your letter is open ♡"
    : "Tap to open your letter";

  if (opening) {
    loveLetter.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});