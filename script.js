// 1. Animate on Scroll
AOS.init();

// 2. Lucide Icons Render and all DOM loaded scripts
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  // 3. Typed.js intro
  new Typed("#typed", {
    strings: ["Frontend Developer.", "Creative Designer", "UI/UX Designer.", "React Specialist.", "Cat Lover 🐱"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    showCursor: false,
  });

  // 4. Spotify Rotator (mock)
  const tracks = [
    { name: "Blinding Lights", artist: "The Weeknd", img: "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36" },
    { name: "Daylight", artist: "David Kushner", img: "https://i.scdn.co/image/ab67616d0000b2731c446d2c25c9041a2222adc3" },
    { name: "Heat Waves", artist: "Glass Animals", img: "https://i.scdn.co/image/ab67616d0000b273712701c5e263efc8726b1464" }
  ];
  let i = 0;
  setInterval(() => {
    const t = tracks[i++ % tracks.length];
    document.getElementById('album-art').src = t.img;
    document.getElementById('track-title').textContent = t.name;
    document.getElementById('track-artist').textContent = t.artist;
  }, 9000);

  // 5. Dark Mode Toggle (sync with system)
  function setTheme(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
  }
  // System sync on load
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  setTheme(savedTheme || (prefersDark ? "dark" : "light"));

  // FAB Logic
  const fab = document.getElementById('fab-menu');
  const fabActions = document.getElementById('fab-actions');
  fab.onclick = () => fabActions.classList.toggle('show');

  // FAB: theme toggle
  document.getElementById("themeToggle").onclick = () => {
    const cur = document.documentElement.getAttribute("data-theme");
    setTheme(cur === "dark" ? "light" : "dark");
  };

  // FAB: Cat mode
  document.getElementById("catToggle").onclick = () => {
    const cat = document.createElement("div");
    cat.textContent = "🐈";
    cat.style.position = "fixed";
    cat.style.left = `${Math.random() * 90 + 5}%`;
    cat.style.top = `${Math.random() * 80 + 10}%`;
    cat.style.fontSize = "3rem";
    cat.style.zIndex = 9999;
    cat.style.transition = "transform 3s linear";
    document.body.appendChild(cat);
    setTimeout(() => { cat.style.transform = "rotate(720deg)"; }, 100);
    setTimeout(() => { cat.remove(); }, 3000);
  };

  // FAB: Scroll to top
  document.getElementById("scrollTop").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Konami Code Easter Egg: changes background to "party mode"
  const secret = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // up up down down left right left right b a
  let pos = 0;
  window.addEventListener("keydown", (e) => {
    if (e.keyCode === secret[pos]) {
      pos++;
      if (pos === secret.length) {
        document.body.classList.add("party");
        setTimeout(() => document.body.classList.remove("party"), 4000);
        pos = 0;
      }
    } else {
      pos = 0;
    }
  });

  // Smooth scroll polyfill for anchors (if needed)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.onclick = function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: "smooth" });
    };
  });
});

// 6. Gradient Animated BG (Aurora-like)
window.onload = function () {
  const bg = document.getElementById('gradient-bg');
  let angle = 0;
  setInterval(() => {
    angle += 0.2;
    bg.style.background = `linear-gradient(${angle}deg, #c3f0ff 0%, #a3bfff 30%, #fff0f5 100%)`;
  }, 40);
};
