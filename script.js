// Countdown timer
function updateCountdown() {
  const targetDate = new Date("2025-09-26T00:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update numbers
    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(
      2,
      "0"
    );
    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0"
    );

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
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  updateCountdown();
  setInterval(updateCountdown, 1000);
});

// Expected Time display (static 4–5 PM event window)
const targetDay = new Date("2025-09-26T16:00:00");
const optionsDay = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

document.getElementById("expectedTime").textContent =
  "Expected Time: " +
  targetDay.toLocaleDateString("en-US", optionsDay) +
  " • 4:00 – 5:00 PM";
