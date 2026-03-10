$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});

document.addEventListener("DOMContentLoaded", function () {
    // Target date for countdown (14th Feb 2025, 00:00)
    const targetDate = new Date("February 14, 2025 09:10:00").getTime();

    // Function to update countdown timer
    function updateCountdown() {
        let now = new Date().getTime();
        let remaining = targetDate - now;

        if (remaining < 0) {
            clearInterval(countdownInterval);
            revealMainPage();
            return;
        }

        let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }

    // Function to reveal main page when countdown ends
    function revealMainPage() {
        let countdownMask = document.getElementById("countdown-mask");
        countdownMask.classList.add("fade-out");

        setTimeout(() => {
            countdownMask.style.display = "none";
            document.querySelector(".envlope-wrapper").style.display = "block";
            document.querySelector(".reset").style.display = "block";
        }, 2000); // Matches fade-out animation
    }

    // Update countdown every second
    let countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Run immediately

    // Envelope opening/closing interactions
    document.getElementById("open").addEventListener("click", function () {
        document.getElementById("envelope").classList.remove("close");
    });

    document.getElementById("reset").addEventListener("click", function () {
        document.getElementById("envelope").classList.add("close");
    });
});
