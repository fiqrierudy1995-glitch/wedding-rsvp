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
