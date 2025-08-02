function askReady() {
  document.getElementById("intro-screen").classList.add("hidden");
  document.getElementById("naughty-screen").classList.add("hidden");
  document.getElementById("ready-screen").classList.remove("hidden");
}

function showCakeScreen() {
  document.getElementById("ready-screen").classList.add("hidden");
  document.getElementById("cake-screen").classList.remove("hidden");

  const audio = document.getElementById("birthday-audio");
  if (audio) {
    audio.play().catch((e) => {
      console.log("Audio play was blocked:", e);
    });
  }
}

function notReady() {
  document.getElementById("ready-screen").classList.add("hidden");
  document.getElementById("naughty-screen").classList.remove("hidden");
}

function showFinalGift() {
  document.getElementById("cake-screen").classList.add("hidden");
  document.getElementById("gift-screen").classList.remove("hidden");
}

