<<<<<<< HEAD
// ==========================
// === DOM References ===
// ==========================
const frame = document.getElementById("frame");
const scrollContainer = document.getElementById("scrollContainer");

const musicToggleBtn = document.getElementById("musicToggle");
const openBtn = document.getElementById("openBtn");

const calendarBtn = document.getElementById("calendarBtn");
const popupCal = document.getElementById("popupcal");
const androidBtn = document.getElementById("androidBtn");
const iosBtn = document.getElementById("iosBtn");

const callBtn = document.getElementById("callBtn");
const popupCon = document.getElementById("popupcon");

const locationBtn = document.getElementById("locationBtn");
const popupLoc = document.getElementById("popuploc");
const iosedBtn = document.getElementById("iosedBtn");
const androidedBtn = document.getElementById("androidedBtn");

const rsvpBtn = document.getElementById("rsvpBtn");
const popupRSVP = document.getElementById("popupRSVP");
const hadirBtn = document.getElementById("hadirBtn");
const tidakhadirBtn = document.getElementById("tidakhadirBtn");
const rsvpForm = document.getElementById("rsvpForm");
const hantarBtn = document.getElementById("hantarBtn");
const batalBtn = document.getElementById("batalBtn");
const rsvpFormtidak = document.getElementById("rsvpFormtidak");
const hantarBtntidak = document.getElementById("hantarBtntidak");
const batalBtntidak = document.getElementById("batalBtntidak");
const hadirRow = document.querySelector(".hadir-row");
const hadirBersama = document.getElementById("hadirBersama");

const messageDiv = document.getElementById("message");

const googleMapsUrl = "https://www.google.com/maps?q=S23A,+2ND+FLOOR,+D'Kayangan+Ballroom,+D'KAYANGAN+BALLROOM,+OCEANUS+WATERFRONT+MALL,+PHASE+1,+Jln+Tun+Fuad+Stephens,+88000+Kota+Kinabalu,+Sabah";
const wazeUrl = "https://waze.com/ul?q=S23A,+2ND+FLOOR,+D'Kayangan+Ballroom,+D'KAYANGAN+BALLROOM,+OCEANUS+WATERFRONT+MALL,+PHASE+1,+Jln+Tun+Fuad+Stephens,+88000+Kota+Kinabalu,+Sabah&navigate=yes";

const scriptURL = "https://script.google.com/macros/s/AKfycbzjq-A08RZoV6-IemVpTrV45Cw0kbhvPmJwM_FjP4EH0SeTpvppzU67OCUgbtZAsGNuXw/exec";
                    
// ==========================
// === Curtain & Auto-Scroll ===
frame && addSnowflakes(); // initialize snowflakes

// Auto-scroll setup
function createAutoScroll(container, duration = 60000, resumeDelay = 3000) {
  let scrolling = false;
  let resumeTimeout;
  let ignoreNextInteraction = true;

  const startScrollFn = () => {
    if (scrolling) return;
    scrolling = true;

    const startScroll = container.scrollTop;
    const maxScroll = container.scrollHeight - container.clientHeight;
    const distance = maxScroll - startScroll;
    const startTime = performance.now();

    const step = timestamp => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      container.scrollTop = startScroll + distance * progress;
      if (progress < 1 && scrolling) requestAnimationFrame(step);
      else scrolling = false;
    };
    requestAnimationFrame(step);
  };

  const stopScrollFn = () => {
    scrolling = false;
  };

  const onUserScroll = () => {
    if (ignoreNextInteraction) {
      ignoreNextInteraction = false;
      return;
    }
    stopScrollFn();
    clearTimeout(resumeTimeout);
    resumeTimeout = setTimeout(startScrollFn, resumeDelay);
  };

  container.addEventListener("wheel", onUserScroll, { passive: true });
  container.addEventListener("touchstart", onUserScroll, { passive: true });

  return startScrollFn;
}

const startAutoScroll = scrollContainer ? createAutoScroll(scrollContainer, 60000, 3000) : null;

// ==========================
// === Music Player ===
const music = new Audio("music.mp3");
music.loop = true;
let musicPlaying = false;

function updateMusicButton() {
  if (!musicToggleBtn) return;
  musicToggleBtn.innerHTML = musicPlaying
    ? '<span class="material-symbols-outlined">pause_circle</span><span class="label">Lagu</span>'
    : '<span class="material-symbols-outlined">play_circle</span><span class="label">Lagu</span>';
}

musicToggleBtn && musicToggleBtn.addEventListener("click", () => {
  if (musicPlaying) music.pause();
  else music.play().catch(err => console.log("Playback blocked:", err));

  musicPlaying = !musicPlaying;
  updateMusicButton();
});

// Curtain open
openBtn && openBtn.addEventListener("click", () => {
  frame.classList.add("open");
  setTimeout(() => {
    document.getElementById("navBar")?.classList.add("show");
    if (scrollContainer) scrollContainer.style.overflowY = "auto";

    // Autoplay music
    music.play().then(() => {
      musicPlaying = true;
      updateMusicButton();
    }).catch(err => console.log("Autoplay blocked:", err));

    // Start auto-scroll
    startAutoScroll && startAutoScroll();
  }, 1800);
});

// ==========================
// === Snowflakes ===
function addSnowflakes() {
  for (let i = 0; i < 50; i++) {
    let flakeWrapper = document.createElement("div");
    flakeWrapper.classList.add("snowflake-wrapper");

    let flake = document.createElement("div");
    flake.classList.add("snowflake");

=======
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
>>>>>>> 610bb25472239167b601d92f37e2b609c7fddd43
    let size = 6 + Math.random() * 10;
    flake.style.width = size + "px";
    flake.style.height = size + "px";

<<<<<<< HEAD
    flakeWrapper.style.left = Math.random() * window.innerWidth + "px";

=======
    // random horizontal start
    flakeWrapper.style.left = Math.random() * 360 + "px";

    // random durations
>>>>>>> 610bb25472239167b601d92f37e2b609c7fddd43
    let fallDuration = 8 + Math.random() * 10;
    let driftDuration = 4 + Math.random() * 4;
    let twinkleDuration = 3 + Math.random() * 4;

<<<<<<< HEAD
=======
    // apply durations
>>>>>>> 610bb25472239167b601d92f37e2b609c7fddd43
    flake.style.animationDuration = `${fallDuration}s, ${twinkleDuration}s`;
    flakeWrapper.style.animationDuration = `${driftDuration}s`;

    flakeWrapper.appendChild(flake);
<<<<<<< HEAD
    scrollContainer && scrollContainer.appendChild(flakeWrapper);
  }
}

// ==========================
// === Countdown ===
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

// ==========================
// === Calendar ===
calendarBtn && calendarBtn.addEventListener("click", e => {
  e.preventDefault();
  popupCal.style.display = "flex";
});

popupCal && popupCal.addEventListener("click", e => {
  if (e.target === popupCal) popupCal.style.display = "none";
});

androidBtn && androidBtn.addEventListener("click", () => {
  const googleUrl = "https://calendar.google.com/calendar/u/0/r/eventedit?" +
    "text=WALIMATULURUS+FIQRIE-FAZLIANA&" +
    "dates=20251230T030000Z/20251230T080000Z&" +
    "details=Join+us+at+D%27Kayangan+Ballroom+Oceanus+Waterfront+Mall&" +
    "location=D%27Kayangan+Ballroom+Oceanus+Waterfront+Mall";
  window.open(googleUrl, "_blank");
  popupCal.style.display = "none";
});

iosBtn && iosBtn.addEventListener("click", () => {
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//WALIMATULURUS FIQRIE & FAZLIANA//Event Calendar//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
UID:20251230T030000Z-Wedding@example.com
DTSTAMP:20251005T000000Z
DTSTART:20251230T030000Z
DTEND:20251230T080000Z
SUMMARY:WALIMATULURUS FIQRIE & FAZLIANA
DESCRIPTION:Join us at D'Kayangan Ballroom, Oceanus Waterfront Mall
LOCATION:D'Kayangan Ballroom, Oceanus Waterfront Mall
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'walimatulurus.ics';
  link.click();
  popupCal.style.display = "none";
});

// ==========================
// === Contact & Location ===
callBtn && callBtn.addEventListener("click", e => {
  e.preventDefault();
  popupCon.style.display = "flex";
});
popupCon && popupCon.addEventListener("click", e => {
  if (e.target === popupCon) popupCon.style.display = "none";
});

locationBtn && locationBtn.addEventListener("click", e => {
  e.preventDefault();
  popupLoc.style.display = "flex";
});
popupLoc && popupLoc.addEventListener("click", e => {
  if (e.target === popupLoc) popupLoc.style.display = "none";
});
androidedBtn && androidedBtn.addEventListener("click", () => window.open(googleMapsUrl, "_blank"));
iosedBtn && iosedBtn.addEventListener("click", () => window.open(wazeUrl, "_blank"));

// ==========================
// === RSVP ===
let rsvpChoice = "";

rsvpBtn && rsvpBtn.addEventListener("click", e => {
  e.preventDefault();
  popupRSVP.style.display = "flex";
});

hadirBtn && hadirBtn.addEventListener("click", () => {
  rsvpChoice = "Hadir";
  hadirBersama.style.display = "block";
  rsvpForm.style.display = "block";
  rsvpFormtidak.style.display = "none";
  hadirRow.style.display = "none";
  document.querySelector(".rsvppopup")?.classList.add("expanded");
});

tidakhadirBtn && tidakhadirBtn.addEventListener("click", () => {
  rsvpChoice = "Tidak Hadir";
  rsvpFormtidak.style.display = "block";
  rsvpForm.style.display = "none";
  hadirRow.style.display = "none";
  document.querySelector(".rsvppopup")?.classList.add("expanded");
});

popupRSVP && popupRSVP.addEventListener("click", e => {
  if (e.target === popupRSVP) {
    popupRSVP.style.display = "none";
    resetRSVP();
  }
});

batalBtn && batalBtn.addEventListener("click", e => {
  e.preventDefault();
  rsvpForm.reset();
  popupRSVP.style.display = "none";
  resetRSVP();
});

batalBtntidak && batalBtntidak.addEventListener("click", e => {
  e.preventDefault();
  rsvpFormtidak.reset();
  popupRSVP.style.display = "none";
  resetRSVP();
});

function resetRSVP() {
  rsvpForm.style.display = "none";
  rsvpFormtidak.style.display = "none";
  hadirRow.style.display = "flex";
  hadirBersama.style.display = "none";
  document.querySelector(".rsvppopup")?.classList.remove("expanded");
  rsvpChoice = "";
}

// ✅ SAME scriptURL used for both forms
if (rsvpForm) {
  rsvpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    submitRSVP(rsvpForm, scriptURL, "Hadir");
  });
}

if (rsvpFormtidak) {
  rsvpFormtidak.addEventListener("submit", async (e) => {
    e.preventDefault();
    submitRSVP(rsvpFormtidak, scriptURL, "Tidak Hadir");
  });
}

// Common submission function
async function submitRSVP(form, url, rsvpChoice) {
  const messageDiv = document.getElementById("message");
  const hantarBtn = form.querySelector("button[type='submit']");
  
  messageDiv.textContent = "Menghantar...";
  messageDiv.style.display = "block";
  messageDiv.style.backgroundColor = "beige";
  messageDiv.style.color = "black";
  hantarBtn.disabled = true;

  try {
    const formData = new FormData(form);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log("Submitting form data:", formDataObj);

    formDataObj["Kehadiran"] = rsvpChoice;

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formDataObj),
      headers: { "Content-Type": "text/plain;charset=utf-8" },
    });

    const data = await response.json();
    if (data.status === "success") {
      messageDiv.textContent = rsvpChoice === "Hadir"
        ? "Terima kasih! Kehadiran anda telah disahkan."
        : "Terima kasih! Kami memahami anda tidak dapat hadir pada majlis.";
      messageDiv.style.backgroundColor = rsvpChoice === "Hadir" ? "#e7f1f8" : "#ffdd57";
      messageDiv.style.color = rsvpChoice === "Hadir" ? "#000" : "#363636";
      form.reset();

       // ✅ Auto-close the popup after 2 seconds
  setTimeout(() => {
    popupRSVP.style.display = "none";
    resetRSVP();
  }, 2000);
      
    } else {
      throw new Error(data.message || "Submission failed");
    }
  } catch (err) {
    console.error(err);
    messageDiv.textContent = "Ralat: " + err.message;
    messageDiv.style.backgroundColor = "#f14668";
    messageDiv.style.color = "white";
  } finally {
    hantarBtn.disabled = false;
    setTimeout(() => {
      messageDiv.style.display = "none";
    }, 4000);
  }
}



// === Load Ucapan ===
async function loadUcapan() {
  const list = document.getElementById("ucapanList");
  try {
    const response = await fetch(scriptURL);
    const data = await response.json();

    if (data.status === "success" && Array.isArray(data.ucapans)) {
      if (data.ucapans.length === 0) {
        list.innerHTML = `<p>Belum ada ucapan lagi 😊</p>`;
        return;
      }

      list.innerHTML = data.ucapans
        .map(({ ucapan, nama, jenis }) => `
          <div class="ucapan-item ${jenis === "Tidak Hadir" ? "tidak-hadir" : "hadir"}">
            <p class="ucapan-text">"${ucapan}"</p>
            ${nama ? `<p class="ucapan-nama">– ${nama}</p>` : ""}
          </div>
        `)
        .join("");
    } else {
      list.innerHTML = `<p>❌ ${data.message || "Tiada ucapan ditemui"}</p>`;
    }
  } catch (err) {
    console.error("Fetch error:", err);
    list.innerHTML = `<p>⚠️ Gagal memuat ucapan.</p>`;
  }
}

document.addEventListener("DOMContentLoaded", loadUcapan);
=======
    frame.appendChild(flakeWrapper);
  }
}

const calendarBtn = document.getElementById("calendarBtn");
const calendarPopup = document.getElementById("calendarPopup");
const androidBtn = document.getElementById("androidBtn");
const iosBtn = document.getElementById("iosBtn");

// Show popup
calendarBtn.addEventListener("click", (e) => {
  e.preventDefault();
  calendarPopup.style.display = "flex";
});

// Close popup by clicking outside
calendarPopup.addEventListener("click", (e) => {
  if (e.target === calendarPopup) {
    calendarPopup.style.display = "none";
  }
});

// Android
androidBtn.addEventListener("click", () => {
  window.open(
    "https://calendar.google.com/calendar/u/0/r/eventedit?text=WALIMATULURUS+FIQRIE-FAZLIANA&dates=20251231T110000Z/20251231T160000Z&details=Event+Description&location=D%27KAYANGAN+BALLROOM+OCEANUS+WATERFRONT+MALL+KOTA+KINABALU",
    "_blank"
  );
});

// iOS
iosBtn.addEventListener("click", () => {
  window.open(
    "https://calendar.google.com/calendar/u/0/r/eventedit?text=WALIMATULURUS+FIQRIE-FAZLIANA&dates=20251231T110000Z/20251231T160000Z&details=Event+Description&location=D%27KAYANGAN+BALLROOM+OCEANUS+WATERFRONT+MALL+KOTA+KINABALU",
    "_blank");
});
// Elements
const callBtn = document.getElementById("callBtn"); // Make sure this button exists
const contactPopup = document.getElementById("contactPopup");

// Open popup
callBtn.addEventListener("click", () => {
  contactPopup.style.display = "flex";
  contactPopup.setAttribute("aria-hidden", "false");
});

// Close popup when clicking outside the popup content
contactPopup.addEventListener("click", (e) => {
  if (e.target === contactPopup) {
    contactPopup.style.display = "none";
    contactPopup.setAttribute("aria-hidden", "true");
    callBtn.focus(); // optional for accessibility
  }
});


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



locationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  locationPopup.style.display = "flex";
});

// Close popup by clicking outside
locationPopup.addEventListener("click", (e) => {
  if (e.target === locationPopup) {
    locationPopup.style.display = "none";
  }
});

const androidedBtn = document.getElementById("androidedBtn");
const iosedBtn = document.getElementById("iosedBtn");

// Clean URL for your location (Google Maps)
const googleMapsUrl = "https://www.google.com/maps?q=S23A,+2ND+FLOOR,+D'Kayangan+Ballroom,+D'KAYANGAN+BALLROOM,+OCEANUS+WATERFRONT+MALL,+PHASE+1,+Jln+Tun+Fuad+Stephens,+88000+Kota+Kinabalu,+Sabah";

// Waze URL for the same place
const wazeUrl = "https://waze.com/ul?q=S23A,+2ND+FLOOR,+D'Kayangan+Ballroom,+D'KAYANGAN+BALLROOM,+OCEANUS+WATERFRONT+MALL,+PHASE+1,+Jln+Tun+Fuad+Stephens,+88000+Kota+Kinabalu,+Sabah&navigate=yes";

androidedBtn.addEventListener("click", () => {
  window.open(googleMapsUrl, "_blank");
});

iosedBtn.addEventListener("click", () => {
  window.open(wazeUrl, "_blank");
});

const rsvpPopup = document.getElementById("rsvpPopup");
const hadirBtn = document.getElementById("hadirBtn");
const tidakHadirBtn = document.getElementById("tidakhadirBtn");
const rsvpForm = document.getElementById("rsvpForm");
const batalBtn = document.getElementById("batalBtn");
const hadirRow = document.querySelector(".hadir-row");

// Get the hadir bersama field container
const hadirBersamaDiv = document.getElementById("hadirBersama").parentElement;

// Open RSVP Popup (trigger this from your main RSVP button)
document.getElementById("rsvpBtn").addEventListener("click", (e) => {
  e.preventDefault();
  rsvpPopup.style.display = "flex";
  hadirRow.style.display = "flex";   // Show buttons when popup opens
  rsvpForm.style.display = "none";   // Hide form when popup opens
});

// Close popup if user clicks outside the box
rsvpPopup.addEventListener("click", (e) => {
  if (e.target === rsvpPopup) {
    rsvpPopup.style.display = "none";
    rsvpForm.style.display = "none";   // Hide form
    hadirRow.style.display = "flex";   // Show buttons again
    hadirBersamaDiv.style.display = "block"; // Reset hadir bersama visibility
  }
});

// Show form and hide buttons when "Hadir" is clicked
hadirBtn.addEventListener("click", () => {
  hadirBersamaDiv.style.display = "block"; // Show hadir bersama field
  rsvpForm.style.display = "block";
  hadirRow.style.display = "none";
});

// Show form without hadir bersama when "Tidak Hadir" is clicked
tidakHadirBtn.addEventListener("click", () => {
  hadirBersamaDiv.style.display = "none"; // Hide hadir bersama field
  rsvpForm.style.display = "block";
  hadirRow.style.display = "none";
});

// Hide form and show buttons when "Batal" is clicked
batalBtn.addEventListener("click", () => {
  rsvpForm.style.display = "none";
  hadirRow.style.display = "flex";
  hadirBersamaDiv.style.display = "block"; // Reset hadir bersama visibility
});

// Handle form submit
rsvpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Terima kasih atas RSVP anda!");
  rsvpForm.reset();                // Clear the form
  rsvpForm.style.display = "none"; // Hide the form
  hadirRow.style.display = "flex"; // Show buttons again
  hadirBersamaDiv.style.display = "block"; // Reset hadir bersama visibility
  rsvpPopup.style.display = "none"; // Optionally close popup after submission
});
>>>>>>> 610bb25472239167b601d92f37e2b609c7fddd43
