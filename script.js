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

  const message = `Hello ate, I know na medyo mabigat yung pakiramdam mo ngayon—birthday blues, ‘ika nga nila. And I get it. Parang habang tumatanda tayo, birthdays start to feel a bit different, minsan parang wala nang may pake. But I just want you to know that I do... I do, I remembered.

That’s why I made this. Hindi para magpa-cute lang (well, maybe saks lang :_:), pero para iparamdam sayo na may isang tao dito na genuinely cares. I’m not the type to forget the birthday of someone na naging espesyal sakin — kahit gaano pa kabilis o kaiksi yung time na magkasama tayo.

Truth is, I really appreciate you. You bring this kind of warmth na hindi mo siguro alam. Kahit hindi pa matagal simula nung nagkakilala tayo, ramdam ko na agad yung presence mo—yung vibe mong nakakagaan ng araw. Kahit malayo tayo (kahit literal na ilang kanto lang 1😆), or hindi madalas magkausap (lagi talaga tau magkausap 1😆), you’ve already made your space in my life.

So today, I hope you feel loved. Not because you’re doing something big or throwing a party, but just because you exist—and that alone is already something to celebrate. Happy Birthday, meyan. 🎉

Sana dumating na lahat ng bagay na hinihintay mo — peace, clarity, konting thrill, at syempre, tamang lambing (ko 1😆) sa tamang oras. And I hope you always feel reminded: you’re not alone. You’re remembered, you’re valued, and you’re cared for—even in the quiet moments.

So yeah, kahit simpleng surprise lang ‘to, sana na-pagaan ko ang nararamdaman mo kahit papano. 💖

Happy birthday uli, you deserve all the joy, peace, and love in the world—today and every day. 💖`;

  const textElement = document.getElementById("typing-message");
  const catGif = document.getElementById("cat-gif");
  let index = 0;

  function typeNextChar() {
    if (index < message.length) {
      textElement.innerHTML += message.charAt(index);
      index++;
      setTimeout(typeNextChar, 65);
    } else {
      catGif.style.display = "block";
    }
  }

  textElement.innerHTML = "";
  catGif.style.display = "none";
  typeNextChar();
}
