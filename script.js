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
  const giftScreen = document.getElementById("gift-screen");
  giftScreen.classList.remove("hidden");

  const message = `Hello ate, I know na nagkakaroon ka ngayon ng birthday blues and I just want to say na it's normal to have that
since natanda na tayo, but if you ever thinking na walang nakakaalala ng birthday mo, i just want to say na I'm one of
those people na hindi nakalimutan na birthday mo ngayon.`;

  const typingEl = document.getElementById("typing-message");
  typingEl.innerHTML = ""; // Clear existing content

  let i = 0;
  const speed = 40; // typing speed in ms

  function typeLetter() {
    if (i < message.length) {
      typingEl.innerHTML += message.charAt(i);
      i++;
      setTimeout(typeLetter, speed);
    }
  }

  typeLetter(); // start typing
}
