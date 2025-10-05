const frame = document.getElementById("frame");
const scrollContainer = document.getElementById("scrollContainer");

// Click logo to open curtains and enable scroll
document.getElementById("openBtn").addEventListener("click", function () {
  frame.classList.add("open");

  // Wait for curtain animation to finish before enabling scroll
  setTimeout(() => {
    document.getElementById('navBar').classList.add('show');
    scrollContainer.style.overflowY = "auto";

    // Add snowflakes after curtain opens
    addSnowflakes(); // Call the function to add snowflakes
  }, 2000); // match your curtain animation duration
});

// Function to add snowflakes
function addSnowflakes() {
  for (let i = 0; i < 50; i++) {
    // wrapper for drift
    let flakeWrapper = document.createElement('div');
    flakeWrapper.classList.add('snowflake-wrapper');

    // flake for fall + twinkle
    let flake = document.createElement('div');
    flake.classList.add('snowflake');

    // random size (6–16px)
    let size = 6 + Math.random() * 10;
    flake.style.width = size + "px";
    flake.style.height = size + "px";

    // random horizontal start
    flakeWrapper.style.left = Math.random() * 360 + "px";

    // random durations
    let fallDuration = 8 + Math.random() * 10;
    let driftDuration = 4 + Math.random() * 4;
    let twinkleDuration = 3 + Math.random() * 4;

    // apply durations
    flake.style.animationDuration = `${fallDuration}s, ${twinkleDuration}s`;
    flakeWrapper.style.animationDuration = `${driftDuration}s`;

    flakeWrapper.appendChild(flake);
    frame.appendChild(flakeWrapper);
  }
}

// Countdown
  const weddingDate = new Date("December 31, 2025 11:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      document.querySelector(".countdown").innerHTML = "<h3>Majlis sudah bermula 🎉</h3>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hari").innerText = days;
    document.getElementById("jam").innerText = hours;
    document.getElementById("minit").innerText = minutes;
    document.getElementById("saat").innerText = seconds;
  }

setInterval(updateCountdown, 1000);
updateCountdown();

// === BOTTOM NAVIGATION BAR ===
    // Calendar DOM
        const calendarBtn = document.getElementById("calendarBtn");
            const popupCal = document.getElementById("popupcal");  
                const androidBtn = document.getElementById("androidBtn");
                const iosBtn = document.getElementById("iosBtn"
    );

    // Contact DOM
        const callBtn = document.getElementById("callBtn"); 
            const popupCon = document.getElementById("popupcon"
    );

    // Location DOM
    const locationBtn = document.getElementById("locationBtn");
        const popupLoc = document.getElementById("popuploc");  
            const iosedBtn = document.getElementById("iosedBtn");
                const googleMapsUrl = "https://www.google.com/maps?q=S23A,+2ND+FLOOR,+D'Kayangan+Ballroom,+D'KAYANGAN+BALLROOM,+OCEANUS+WATERFRONT+MALL,+PHASE+1,+Jln+Tun+Fuad+Stephens,+88000+Kota+Kinabalu,+Sabah";
            const androidedBtn = document.getElementById("androidedBtn");
                const wazeUrl = "https://waze.com/ul?q=S23A,+2ND+FLOOR,+D'Kayangan+Ballroom,+D'KAYANGAN+BALLROOM,+OCEANUS+WATERFRONT+MALL,+PHASE+1,+Jln+Tun+Fuad+Stephens,+88000+Kota+Kinabalu,+Sabah&navigate=yes";

    // RSVP DOM
    const rsvpBtn = document.getElementById("rsvpBtn");
        const popupRSVP = document.getElementById("popupRSVP");
            const hadirBtn = document.getElementById("hadirBtn");
            const tidakhadirBtn = document.getElementById("tidakhadirBtn");
                const rsvpForm = document.getElementById("rsvpForm");
                    const heading = document.getElementById("heading");
                        const batalBtn = document.getElementById("batalBtn");
                        const hadirRow = document.querySelector(".hadir-row");
                        const hadirBersama = document.getElementById("hadirbersama");
                        const hantarBtn = document.getElementById("hantarBtn");
                        const messageDiv = document.getElementById("message");
                        const scriptURL = "https://script.google.com/macros/s/AKfycbzjq-A08RZoV6-IemVpTrV45Cw0kbhvPmJwM_FjP4EH0SeTpvppzU67OCUgbtZAsGNuXw/exec";

    // === Calendar Event Handler ===
        // Show Calendar popup
        calendarBtn.addEventListener("click", (e) => {
        e.preventDefault();
        popupCal.style.display = "flex";
        });

        // Close calendar popup by clicking outside
            popupCal.addEventListener("click", (e) => {
            if (e.target === popupCal) {
            popupCal.style.display = "none";
            }
        });

        // Android Calendar
            androidBtn.addEventListener("click", () => {
            window.open(
            "https://calendar.google.com/calendar/u/0/r/eventedit?text=WALIMATULURUS+FIQRIE-FAZLIANA&dates=20251231T110000Z/20251231T160000Z&details=Event+Description&location=D%27KAYANGAN+BALLROOM+OCEANUS+WATERFRONT+MALL+KOTA+KINABALU",
            "_blank"
            );
        });

        // iOS Calendar
            iosBtn.addEventListener("click", () => {
            window.open(
            "https://calendar.google.com/calendar/u/0/r/eventedit?text=WALIMATULURUS+FIQRIE-FAZLIANA&dates=20251231T110000Z/20251231T160000Z&details=Event+Description&location=D%27KAYANGAN+BALLROOM+OCEANUS+WATERFRONT+MALL+KOTA+KINABALU",
            "_blank");
    });


    // === Contact Event Handler ===
        // Open Contact Popup
            callBtn.addEventListener("click", (e) => {
            e.preventDefault();
            popupCon.style.display = "flex";
        });

        // Close Contact popup when clicking outside the popup content
            popupCon.addEventListener("click", (e) => {
            if (e.target === popupCon) {
            popupCon.style.display = "none";
            }
    });

    // === Location Event Handler ===
        // Open Location Popup
            locationBtn.addEventListener("click", (e) => {
            e.preventDefault();
            popupLoc.style.display = "flex";
        });

        // Close Location popup by clicking outside
            popupLoc.addEventListener("click", (e) => {
            if (e.target === popupLoc) {
            popupLoc.style.display = "none";
            }
        });
            androidedBtn.addEventListener("click", () => {
            window.open(googleMapsUrl, "_blank");
            });

            iosedBtn.addEventListener("click", () => {
            window.open(wazeUrl, "_blank");
    });

    // === RSVP Event Handler ===
    //RSVP Button

        // Show RSVP popup
            rsvpBtn.addEventListener("click", (e) => {
            e.preventDefault();
            popupRSVP.style.display = "flex";
        });

        // Show form and hide buttons when "Hadir" is clicked
            hadirBtn.addEventListener("click", () => {
            hadirBersama.style.display = "block"; // Show hadir bersama field
            rsvpForm.style.display = "block";
            hadirRow.style.display = "none";
        });

        // Show form without hadir bersama when "Tidak Hadir" is clicked
            tidakhadirBtn.addEventListener("click", () => {
            hadirBersama.style.display = "none"; // Hide hadir bersama field
            rsvpForm.style.display = "block";
            hadirRow.style.display = "none";
        });

        // Close popup if user clicks outside the box
            popupRSVP.addEventListener("click", (e) => {
            if (e.target === popupRSVP) {
            popupRSVP.style.display = "none";
            rsvpForm.style.display = "none";   // Hide form
            hadirRow.style.display = "flex";   // Show buttons again
            hadirBersama.style.display = "block"; // Reset hadir bersama visibility
            }
        });
        

        // Cancel button
        if (batalBtn) {
        batalBtn.addEventListener("click", function (e) {
        e.preventDefault();
        rsvpForm.reset();
        rsvpForm.style.display = "none";
        popupRSVP.style.display = "none";
        });
        }
///////////
        // === Form Submission ===

      rsvpForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        messageDiv.textContent = "Submitting...";
        messageDiv.style.display = "block";
        messageDiv.style.backgroundColor = "beige";
        messageDiv.style.color = "black";
        hantarBtn.disabled = true;
        hantarBtn.classList.add("is-loading");

        try {
          const formData = new FormData(this);
          const formDataObj = {};

          for (let [key, value] of formData.entries()) {
            formDataObj[key] = value;
          }


          const response = await fetch(scriptURL, {
            redirect: "follow",
            method: "POST",
            body: JSON.stringify(formDataObj),
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
          });

          const data = await response.json();

          if (data.status === "success") {
            messageDiv.textContent =
              data.message || "Data submitted successfully!";
            messageDiv.style.backgroundColor = "#48c78e";
            messageDiv.style.color = "white";
            rsvpForm.reset();
          } else {
            throw new Error(data.message || "Submission failed");
          }
        } catch (error) {
          console.error("Error:", error);
          messageDiv.textContent = "Error: " + error.message;
          messageDiv.style.backgroundColor = "#f14668";
          messageDiv.style.color = "white";
        } finally {
          hantarBtn.disabled = false;
          hantarBtn.classList.remove("is-loading");

          setTimeout(() => {
            messageDiv.textContent = "";
            messageDiv.style.display = "none";
          }, 4000);
        }
      });

      batalBtn.addEventListener("click", function () {
        rsvpForm.reset();
        messageDiv.style.display = "none";
      });

async function loadUcapan() {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzjq-A08RZoV6-IemVpTrV45Cw0kbhvPmJwM_FjP4EH0SeTpvppzU67OCUgbtZAsGNuXw/exec");
    const data = await response.json();
    console.log("Data from server:", data);  // 🔍 tengok dalam browser console

    if (data.status === "success") {
      document.getElementById("ucapanList").innerHTML =
        data.ucapans.map(msg => `<p>💌 ${msg}</p>`).join("");
    } else {
      document.getElementById("ucapanList").innerHTML = `<p>❌ ${data.message}</p>`;
    }
  } catch (err) {
    console.error("Fetch error:", err);
    document.getElementById("ucapanList").innerHTML = `<p>⚠️ Gagal load ucapan</p>`;
  }
}
document.addEventListener("DOMContentLoaded", loadUcapan);
