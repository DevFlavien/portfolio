// Récupérer les éléments du DOM
const slider = document.querySelector(".video-slider");
const videos = document.querySelectorAll(".video_description");
const prevBtn = slider.querySelector(".prev-btn");
const nextBtn = slider.querySelector(".next-btn");

// Variables pour le slider
let currentVideoIndex = 0;
let numVideos = videos.length;

    // Chargement de l'API YouTube Player
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Variable pour stocker le lecteur YouTube
    var player1;
    var player2;
    var player3;
    var player4;
    var player5;

    // Fonction appelée lorsque l'API est prête
    function onYouTubeIframeAPIReady() {
      // Création du lecteur YouTube
      player1 = new YT.Player('player1', {
        height: '360',
        width: '640',
        videoId: 'rj71jMjNbLo', 
      });

      player2 = new YT.Player('player2', {
        height: '360',
        width: '640',
        videoId: 'a3yIqtoEkpA', 
      });

      player3 = new YT.Player('player3', {
        height: '360',
        width: '640',
        videoId: 'VYA6WGHUpdg',
      });

      player4 = new YT.Player('player4', {
        height: '360',
        width: '640',
        videoId: 'eBEaPTNYCQY', 
      });

      player5 = new YT.Player('player5', {
        height: '360',
        width: '640',
        videoId: 'lCofrhjIumY',
      });
    }

// Cacher toutes les vidéos sauf la première
for (let i = 1; i < numVideos; i++) {
  videos[i].style.display = "none";
}


// Gestionnaires d'événements pour les boutons de navigation
prevBtn.addEventListener("click", () => {
  currentVideoIndex--;
  if (currentVideoIndex < 0) {
    currentVideoIndex = numVideos - 1;
  }

  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentVideoIndex++;
  if (currentVideoIndex >= numVideos) {
    currentVideoIndex = 0;
  }

  updateSlider();
});

//fonction pause de toute les vidéos du carrousel dans le cas du clique sur prev ou next
function pauseVideo() {
  player1.pauseVideo();
  player2.pauseVideo();
  player3.pauseVideo();
  player4.pauseVideo();
  player5.pauseVideo();
}

// Fonction pour mettre à jour le slider
function updateSlider() {
  for (let i = 0; i < numVideos; i++) {
    if (i === currentVideoIndex) {	videos[i].style.display = "block";
 
  } else {
    videos[i].style.display = "none";
  }
  pauseVideo();
}
}


//slider img

const slide = ["./sources/couv-roman.jpg", "./sources/DT_studio.png", "./sources/dos-carte.png", "./sources/logo_jios.png","./sources/billet-foot.jpg", "./sources/ecran-naruto.jpg", ];
const description = ["Couverture de roman réalisé sur Photoshop dans le cadre d'un cours de ma formation MMI.","concept d'un studio de musique du label associatif DEATHLESS RECORD dont je fais partie, en 3D sur Blender.", "Dos d'une carte du jeu mobile MEMORY que j'ai crée durant mes cours en licence DDIM ","Logo pour une marque de jus bio, réalisé pour un cours de communication sur Photoshop.", "Billet réalisé sur mon temps libre.", "Fond d'écran pour téléphone sur le personnage naruto, réalisé durant mon temps libre.", ]
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
    document.getElementById("description").innerHTML = description[numero];
}

