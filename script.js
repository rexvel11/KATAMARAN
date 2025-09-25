// Weather notice interaction
const weatherNotice = document.getElementById("weatherNotice");
if (weatherNotice) {
  weatherNotice.addEventListener("click", function () {
    this.classList.toggle("active");
    this.textContent = this.classList.contains("active")
      ? "NEW DATE: SEPTEMBER 29TH"
      : "POSTPONED DUE TO BAD WEATHER";
  });
}

// Safety message interaction
const safetyMsg = document.getElementById("safetyMessage");
if (safetyMsg) {
  safetyMsg.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
    this.style.transition = "transform 0.3s ease";
  });

  safetyMsg.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
}

// Countdown timer - Updated to September 29th
function updateCountdown() {
  const targetDate = new Date("2025-09-29T00:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update numbers with animation trigger
    updateCountdownNumber("days", days);
    updateCountdownNumber("hours", hours);
    updateCountdownNumber("minutes", minutes);
    updateCountdownNumber("seconds", seconds);

    // Update progress circles
    const dayProgress = (days / 365) * 360;
    const hourProgress = (hours / 24) * 360;
    const minuteProgress = (minutes / 60) * 360;
    const secondProgress = (seconds / 60) * 360;

    document
      .querySelector(".countdown-item:nth-child(1) .countdown-circle")
      .style.setProperty("--progress-angle", dayProgress + "deg");
    document
      .querySelector(".countdown-item:nth-child(2) .countdown-circle")
      .style.setProperty("--progress-angle", hourProgress + "deg");
    document
      .querySelector(".countdown-item:nth-child(3) .countdown-circle")
      .style.setProperty("--progress-angle", minuteProgress + "deg");
    document
      .querySelector(".countdown-item:nth-child(4) .countdown-circle")
      .style.setProperty("--progress-angle", secondProgress + "deg");
  } else {
    // Birthday has arrived
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    // Trigger celebration
    document.querySelector(".invitation-text").textContent = "HAPPY BIRTHDAY!";
    document.getElementById("weatherNotice").textContent =
      "IT'S TIME TO CELEBRATE!";
  }
}

// Animated number update
function updateCountdownNumber(elementId, newValue) {
  const element = document.getElementById(elementId);
  const paddedValue = String(newValue).padStart(2, "0");

  if (element.textContent !== paddedValue) {
    element.style.animation = "none";
    element.offsetHeight; // Trigger reflow
    element.style.animation = "bounce 2s ease-in-out infinite";
    element.textContent = paddedValue;
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Add click interaction to countdown circles
  document.querySelectorAll(".countdown-circle").forEach((circle) => {
    circle.addEventListener("click", function () {
      this.style.animation =
        "rotateIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    });
  });
});

// Expected Time display - Updated to September 29th
const targetDay = new Date("2025-09-29T16:00:00");
const optionsDay = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

document.getElementById("expectedTime").textContent =
  "Expected Time: " + "4:00 – 5:00 PM";
