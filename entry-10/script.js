
var albums = [
  {
    title: "Hit Me Hard and Soft – Billie Eilish",
    image: "../archive/album-1.png",
    link: "https://open.spotify.com/album/7aJuG4TFXa2hmE4z1yxc3n?si=o-E_Sg2WR8aD5jeSRVpIuw"
  },
  {
    title: "Freudian – Daniel Caesar",
    image: "../archive/album-2.png",
    link: "https://open.spotify.com/album/4E1XUBMTpLO7GpBzUo65Jp?si=7XHaJUgXQeW65jGPmFzLOQ"
  },
  {
    title: "SOS : LANA – SZA",
    image: "../archive/album-3.png",
    link: "https://open.spotify.com/album/1Q5WON8dw2JFLP5JVQXu1e?si=WaKMFYzfQ3Wjv95pwEtUgw"
  },
  {
    title: "Kansas Anymore – ROLE MODEL",
    image: "../archive/album-4.png",
    link: "https://open.spotify.com/album/4OZ6nCbn8w0cHr1m0qiD2s?si=F3CsIB-xRMeqO2oXh3Fm2g"
  },
  {
    title: "romance : untold; DAYDREAM – ENHYPEN",
    image: "../archive/album-5.png",
    link: "https://open.spotify.com/album/380UbSJnNQ9SioALGRB0Cf?si=bDCoYYguTTG3OVg8VB-wOg"
  },
  {
    title: "Color Outside the Lines – CORTIS",
    image: "../archive/album-6.png",
    link: "https://open.spotify.com/album/2yMfaynthtWVAkJ5A3Kwrf?si=3zOd8TeLSBSFB2FQ0gMg9w"
  },
  {
    title: "The Secret of Us – Gracie Abrams",
    image: "../archive/album-7.png",
    link: "https://open.spotify.com/album/56bdWeO40o3WfAD2Lja4dl?si=gWJA_OgGSDOZBgC2rS_4rg"
  },
  {
    title: "Red (Taylor's Version) – Taylor Swift",
    image: "../archive/album-8.png",
    link: "https://open.spotify.com/album/6kZ42qRrzov54LcAk4onW9?si=Z-qxHe5VTliZV-K2oVmtAg"
  },
  {
    title: "Wishbone – Conan Gray",
    image: "../archive/album-9.png",
    link: "https://open.spotify.com/album/1Q0kTJx8DrQd8RJW9L7eIN?si=lCT08oeUTg6C67JHfOkjaw"
  },
  {
    title: "The Book of Us: Gravity – DAY6",
    image: "../archive/album-10.png",
    link: "https://open.spotify.com/album/3gTiTx97I9WtlvWOLnPETW?si=oezAgWyhRtygjvYd54SPNw"
  },
  {
    title: "So Close to What – Tate McRae",
    image: "../archive/album-11.png",
    link: "https://open.spotify.com/album/6KaEpgeZQF6ZVVAmSoZUrb?si=NLGDraLHRGiFS1TcsyC-TQ"
  },
  {
    title: "Gabriel – Keshi",
    image: "../archive/album-12.png",
    link: "https://open.spotify.com/album/1WVIJaAboRSwJOe4u0n0Q7?si=UNxtPYDxSKe78IIHadj8EA"
  },
  {
    title: "Eternal Sunshine (Deluxe) – Ariana Grande",
    image: "../archive/album-13.png",
    link: "https://open.spotify.com/album/6kXXIMyzRgQeai4A0DsXOn?si=PWCtgADFTuOFzSVU4DoCSw"
  },
  {
    title: "Man's Best Friend – Sabrina Carpenter",
    image: "../archive/album-14.png",
    link: "https://open.spotify.com/album/1aqg30bNvLSWgShZgX4oop?si=-PsOuxMrTnKEFPLSmJtzoA"
  },
  {
    title: "rosie – Rosé",
    image: "../archive/album-15.png",
    link: "https://open.spotify.com/album/7kFyd5oyJdVX2pIi6P4iHE?si=56U7G-O7QR6PnKQ5frYoKQ"
  }
];

var currentIndex = 0;
var coverElement = document.querySelector("#album-cover");
var linkElement = document.querySelector("#album-link");


function showAlbum(index) {
  var album = albums[index];
  coverElement.src = album.image;
  coverElement.alt = album.title;
  linkElement.textContent = album.title;
  linkElement.href = album.link;
}

function shuffleAlbum() {
  var newIndex = currentIndex;

  if (albums.length <= 1) {
    return;
  }

  while (newIndex === currentIndex) {
    newIndex = Math.floor(Math.random() * albums.length);
  }

  currentIndex = newIndex;
  showAlbum(currentIndex);
}


showAlbum(currentIndex);

coverElement.addEventListener("click", function () {
  shuffleAlbum();
});
