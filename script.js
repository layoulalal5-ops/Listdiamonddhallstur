
const products = [
  [5, 1500],
  [12, 2500],
  [50, 8000],
  [70, 8500],
  [100, 15000],
  [140, 19000],
  [150, 20500],
  [210, 29000],
  [355, 46000],
  [500, 66000],
  [720, 93000],
  [1000, 130000],
  [1450, 185000],
  [2180, 276000],
  [3640, 500000]
];

const admin = "6285932222902";
const productList = document.getElementById("productList");

products.forEach(([diamond, price]) => {
  const formattedPrice = price.toLocaleString("id-ID");

  const message =
    `Halo Admin DHALL STURE 👑, saya mau order ${diamond} Diamond Free Fire seharga Rp ${formattedPrice}. Mohon informasi cara pemesanannya.`;

  const card = document.createElement("div");
  card.className = "product";

  card.innerHTML = `
    <div class="diamond">💎</div>
    <h3>${diamond} Diamond</h3>
    <div class="price">Rp ${formattedPrice}</div>
    <a class="order"
       href="https://wa.me/${admin}?text=${encodeURIComponent(message)}"
       target="_blank">
       BELI SEKARANG
    </a>
  `;

  productList.appendChild(card);
});

// MUSIC PLAYER
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

async function playMusic() {
  try {
    await music.play();
    playing = true;
    musicBtn.textContent = "🎵 Musik ON";
  } catch (error) {
    playing = false;
    musicBtn.textContent = "▶ Putar Musik";
  }
}

musicBtn.addEventListener("click", async () => {
  if (playing) {
    music.pause();
    playing = false;
    musicBtn.textContent = "▶ Putar Musik";
  } else {
    await playMusic();
  }
});

// Mencoba memutar musik saat halaman dibuka
window.addEventListener("load", () => {
  playMusic();
});
