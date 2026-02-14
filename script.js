const correctPassword = "20092025";

/* FOTO JATUH */
const photos = ["images/1.jpg","images/6.jpg","images/3.jpg","images/4.jpg","images/8.jpg","images/15.jpg","images/16.jpg",
  "images/17.jpg","images/18.jpg","images/19.jpg","images/20.jpg","images/21.jpg","images/22.jpg","images/23.jpg","images/24.jpg",
  "images/25.jpg","images/26.jpg"];
const rain = document.getElementById("photo-rain");

setInterval(()=>{
  const img=document.createElement("img");
  img.src=photos[Math.floor(Math.random()*photos.length)];
  img.className="photo";
  img.style.left=Math.random()*100+"vw";
  img.style.width=80+Math.random()*60+"px";
  img.style.animationDuration=8+Math.random()*10+"s";
  rain.appendChild(img);
  setTimeout(()=>img.remove(),20000);
},900);


/* LOVE JATUH */
const hearts = document.getElementById("hearts");

setInterval(()=>{
  const love = document.createElement("span");
  love.innerHTML = "❤️";
  love.className = "love-drop";

  love.style.left = Math.random() * 100 + "vw";
  love.style.fontSize = 14 + Math.random() * 20 + "px";
  love.style.animationDuration = 6 + Math.random() * 6 + "s";

  hearts.appendChild(love);

  setTimeout(()=>{
    love.remove();
  },12000);

},600);


/* MUSIK */
const music=document.getElementById("bg-music");
document.addEventListener("click",()=>{
  music.volume=0;
  music.play();
  let v=0;
  const fade=setInterval(()=>{
    if(v<0.6){ v+=0.02; music.volume=v }
    else clearInterval(fade);
  },200);
},{once:true});

/* LOGIN */
function checkPassword(){
  if(document.getElementById("password").value===correctPassword){
    document.querySelector(".login-container").remove();
    showMenu();
  }
}

/* MAIN */
function showMenu(){
  const main=document.createElement("div");
  main.id="main-page";
  main.innerHTML=menuScreen();
  document.body.appendChild(main);
}

function setScreen(html){
  document.getElementById("main-page").innerHTML=html;
}

function menuScreen(){
  return `
  <div class="screen">
    <h1>🤍 Mau ke mana dulu? 🤍</h1>

    <div class="menu-box">
      <div class="choice" onclick="showStory()">💌 Kata-Kata</div>
      <div class="choice" onclick="showGallery()">📸 Galeri</div>
    </div>

    <!-- Tombol Lanjut -->
    <div class="menu-bottom">
      <button class="lanjut-btn" onclick="lanjutRomantis()">
        Lanjut 🤍
      </button>
    </div>

  </div>`;
}


/* STORY */
function showStory(){
  setScreen(`
    <div class="screen">
      <div class="back" onclick="backMenu()">⬅ Kembali</div>
      <div class="story" id="story"></div>
    </div>`);
  typeStory();
}

function typeStory(){
  const text = [
  "Hai kamu 🤍.",
  "Setiap hari aku bersyukur karena kamu ada dalam hidupku.",
  "Setiap senyum dan tawa kita selalu membuat hatiku hangat, dan aku ingin terus merasakan semua itu bersamamu.",
  "Aku ingat setiap momen yang kita lalui, dari hal kecil sampai hal besar, semuanya terasa begitu berharga.",
  "Dan aku berjanji, aku ingin menjalaninya lagi, melewati setiap hari, setiap suka dan duka, selalu bersamamu ❤️"
];
  const el=document.getElementById("story");
  let i=0;
  function next(){
    if(i>=text.length) return;
    const p=document.createElement("p");
    el.appendChild(p);
    let j=0;
    const t=setInterval(()=>{
      p.textContent+=text[i][j++];
      if(j===text[i].length){
        clearInterval(t);
        i++; setTimeout(next,700);
      }
    },40);
  }
  next();
}

/* GALERI */
const galleryData=[
  {img:"images/1.jpg",text:"Pertama kali kita keluar yang difotoo wkwkwk,bukan pertamaa kalii sii,yang pertama kalii ndaakk difotoo wkwkwk 💕"},
  {img:"images/vid1.mp4",text:"Pertama kali bikin Video bareng berduaaa hehe 🤍"},
  {img:"images/2.jpg",text:"Dimanaa kita pergi jauhh bangett iniii dimanaa hayoo masihh ingett apaa ndakkk 💕"},
  {img:"images/12.jpg",text:"Moment dimana kitaaa jalann ke alamm yangg bener benerr alammm nextt kemanaa lagii yaa kitaaa ✨"},
  {img:"images/13.jpg",text:"TAhuuu laa yaa inii fotoo apaaa,YASSSS MY FOTOO FAVORITEE 💕"},
  {img:"images/14.jpg",text:"Dan aku ingin selamanya ❤️"}
];
let currentSlide=0;

function showGallery(){
  currentSlide = 0;
  setScreen(`
  <div class="screen">
    <div class="back" onclick="backMenu()">⬅ Kembali</div>
    <div class="slider">
      <button class="nav-btn prev" onclick="prevSlide()">❮</button>
      <div class="slide-box" id="slide-box"></div>
      <p id="slide-text"></p>
      <button class="nav-btn next" onclick="nextSlide()">❯</button>
    </div>
  </div>`);
  updateSlide(); // tampilkan slide pertama
}

function nextSlide(){
  currentSlide++;
  if(currentSlide>=galleryData.length){
    showFinalScene(); return;
  }
  updateSlide();
}

function prevSlide(){
  currentSlide--;
  if(currentSlide<0) currentSlide=galleryData.length-1;
  updateSlide();
}

function updateSlide(){
  const box = document.getElementById("slide-box");
  const text = document.getElementById("slide-text");
  const data = galleryData[currentSlide];

  box.innerHTML = ""; // kosongkan konten sebelumnya

  if(data.img.endsWith(".mp4")){
    // buat elemen video
    const video = document.createElement("video");
    video.src = data.img;
    video.controls = true;
    video.autoplay = true;
    video.loop = true;
    video.style.width = "100%";
    box.appendChild(video);
  } else {
    // buat elemen gambar
    const img = document.createElement("img");
    img.src = data.img;
    img.style.width = "100%";
    box.appendChild(img);
  }

  text.textContent = data.text;
}


/* FINAL */
const finalMessage=[
  "Semua foto ini cuma bukti kecil…",
  "tapi rasa sayangku ke kamu nggak ada habisnya.",
  "Terima kasih sudah bertahan sejauh ini 🤍"
];

function showFinalScene(){
  setScreen(`
    <div class="screen">
      <div class="final-scene">
        <div id="final-text" class="final-text"></div>
        <button class="hug-btn" onclick="finalHug()">Peluk aku 🤍</button>
      </div>
    </div>`);
  typeFinalText();
}

function typeFinalText(){
  const el=document.getElementById("final-text");
  let i=0;
  function next(){
    if(i>=finalMessage.length) return;
    const p=document.createElement("p");
    el.appendChild(p);
    let j=0;
    const t=setInterval(()=>{
      p.textContent+=finalMessage[i][j++]||"";
      if(j>finalMessage[i].length){
        clearInterval(t); i++; setTimeout(next,900);
      }
    },45);
  }
  next();
}

function finalHug(){
  setScreen(`
    <div class="hug-scene">
      <div class="hug-content">
        <h1>🤍 Untuk Kamu 🤍</h1>
        <div id="hug-text" class="hug-text"></div>
        <button class="forever-btn" onclick="backMenu()">Selamanya 🤍</button>
      </div>
    </div>`);
  typeHugText();
}

function typeHugText(){
  const lines=[
    "Kalau dunia terasa berat,",
    "datanglah ke aku.",
    "",
    "Aku mungkin tidak bisa menyelesaikan semuanya,",
    "tapi aku bisa memelukmu sampai kamu tenang.",
    "",
    "Karena bagiku,",
    "kamu adalah rumah 🤍"
  ];
  const el=document.getElementById("hug-text");
  let i=0;
  function next(){
    if(i>=lines.length) return;
    const p=document.createElement("p");
    el.appendChild(p);
    let j=0;
    const t=setInterval(()=>{
      p.textContent+=lines[i][j++]||"";
      if(j>lines[i].length){
        clearInterval(t); i++; setTimeout(next,900);
      }
    },50);
  }
  next();
}

function backMenu(){
  setScreen(menuScreen());
}

function lanjutRomantis(){

  setScreen(`
    <div class="screen">
      
      <div class="popup-overlay"></div>

      <div class="popup-box">
        <div class="popup-close" onclick="backMenu()">✕</div>

        <h2>Untuk Kamu 🤍</h2>
        <p id="popup-text"></p>
      </div>

    </div>
  `);

  const text = 
  "Selamat Valentine yaa sayanggg,maaf kalau selamaa inii akuu masihh belum jadii yang terbaikk buat kamuu yaa sayangg\n\n" +
  "Mungkiin sekarangg momenttnyaa yang tepattt buatt akuu kasih kamuu inii " +
  "Kadang aku tidak butuh alasan apa pun untuk mencintaimu.\n\n" +
  "Cukup melihat kamu tersenyum,\n" +
  "itu sudah lebih dari cukup bagiku 🤍\n\n" +
  "LOVEE YOUU SAYANGGGG\n\n🤍🤍🤍🤍"  ;

  const el = document.getElementById("popup-text");
  let i = 0;

  const typing = setInterval(()=>{
    el.textContent += text[i++] || "";
    if(i >= text.length) clearInterval(typing);
  },45);
}


// LOVE KLIK DETAIL
document.addEventListener("DOMContentLoaded", ()=>{
  const loveBtn = document.getElementById("love-btn");

  loveBtn.addEventListener("click", ()=>{
    
    // cek apakah popup sudah ada
    if(document.getElementById("love-popup")) return;

    // buat popup
    const popup = document.createElement("div");
    popup.id = "love-popup";

    popup.innerHTML = `
      <div class="popup-content">
        <div class="popup-close" onclick="document.getElementById('love-popup').remove()">✕</div>
        <p id="love-popup-text"></p>
      </div>
    `;

    document.body.appendChild(popup);

    // tulis kata-kata satu per satu (typewriter effect)
    const text = 
      "Kadang aku hanya ingin memandangmu.\n" +
      "Merasa bahagia hanya dengan melihatmu tersenyum.\n\n" +
      "Kamu adalah rumahku, pelabuhan hatiku, dan setiap detik bersamamu adalah harta terindahku.\n\n" +
      "Love youuu ndutt 😘";

    const el = document.getElementById("love-popup-text");
    let i = 0;

    const typing = setInterval(()=>{
      if(i >= text.length){
        clearInterval(typing);
        return;
      }
      el.textContent += text[i] === "\n" ? "\n" : text[i];
      i++;
    }, 40);

  });
});

